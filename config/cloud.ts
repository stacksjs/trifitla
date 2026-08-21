import type { CloudConfig } from '@stacksjs/types'
import type { CloudConfig as TsCloudConfig } from '@stacksjs/ts-cloud'
import { env } from '@stacksjs/env'

const APP_SLUG = 'trifitla'
const APP_DOMAIN = env.APP_DOMAIN || 'trifitla.stacksjs.com'

/**
 * Cloud configuration.
 *
 * This app is a TENANT on the shared Hetzner box owned by the `stacks`
 * project (`cloud.attachTo`), not a box of its own. Two rules follow from
 * that, and both have caused outages before:
 *
 *   1. `project.slug` names the files this deploy OWNS on the box:
 *      `/etc/rpx/sites.d/<slug>.json` and `rpx-cert-renew-<slug>.*`. The
 *      fragment is replaced wholesale, so a slug that collides with another
 *      tenant (or with `stacks` itself) deletes that tenant's routes. It must
 *      stay `trifitla`.
 *   2. Ports must be clear of every other tenant on the box. 3140/3148 were
 *      picked from a live `ss -lntp` (in use at the time: 3000/3008 stacks,
 *      3010 adblock, 3024 analyticshq, 3032 training, 3040/3048 chrisbreuer,
 *      3049 wildloop, 3060/3068 openfarming, 3070..3131 the rest).
 *
 * The dashboard host derives to `dashboard.trifitla.stacksjs.com` rather than
 * `dashboard.stacksjs.com`, because ts-cloud's apex-owner guard only hands a
 * tenant the apex dashboard when the tenant owns the apex. Nothing to do here.
 */
export const tsCloud: TsCloudConfig = {
  project: {
    name: APP_SLUG,
    slug: APP_SLUG,
    region: 'us-east-1',
  },

  stateDir: 'storage/cloud',

  cloud: {
    provider: 'hetzner',
    // Join the box the `stacks` project provisions instead of creating one.
    attachTo: 'stacks',
  },

  mode: 'server',

  environments: {
    production: {
      type: 'production',
      deployBranch: 'main',
      region: 'us-east-1',
      variables: {
        APP_ENV: 'production',
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
      },
    },
  },

  infrastructure: {
    /**
     * DNS lives on Cloudflare, which is authoritative for the whole
     * `stacksjs.com` zone — this app owns four names on it, not the zone.
     *
     * `domain` is the zone apex rather than this app's host: it is what tells
     * ts-cloud where `trifitla.stacksjs.com` lives, instead of leaving it to
     * guess from the last two labels (which is right here and wrong the moment a
     * name has a multi-label suffix).
     *
     * `records` stays empty on purpose. Reconciliation is upsert-only, so a
     * record declared here is one this app will publish on EVERY deploy — and the
     * zone's mail, DKIM and certificate-validation records belong to the zone
     * owner, not to a tenant. Declaring them here would mean four apps racing to
     * own the same SPF policy.
     */
    dns: {
      provider: 'cloudflare',
      domain: 'stacksjs.com',
    },

    compute: {
      instances: 1,
      size: 'small',
      disk: {
        size: 20,
        type: 'ssd',
        encrypted: true,
      },
      webServer: 'rpx',
      proxy: {
        engine: 'rpx',
        // Emits this tenant's own cert units rather than sitting on the box's
        // fallback certificate.
        onDemandTls: true,

        /**
         * Serve the frontends from Cloudflare's edge.
         *
         * `frontedHosts` is left to default, which resolves to the hostnames
         * THIS app's gateway entries answer for — the four `sites` below, not
         * the whole box. That distinction matters on a shared box: a hard-coded
         * list would go stale the moment a site is added here, and a box-wide
         * one would orange-cloud another tenant's names.
         *
         * No `secret`: rpx enforces a single origin-guard header/value for the
         * entire gateway, so a co-tenant on this box cannot bring its own. If
         * this app declared one and `stacks` declared another, ts-cloud leaves
         * THIS app's hosts unguarded rather than guarding them with a value the
         * gateway would reject — which would reject every request instead. The
         * origin guard therefore belongs to whoever owns the box.
         */
        cdn: {
          provider: 'cloudflare',
          cloudflare: {
            /**
             * These are ZONE-WIDE, and this app is a tenant on a zone with
             * roughly twenty other sites — so the set here is deliberately the
             * subset that is safe for all of them. Every host on the zone is
             * already HTTPS-only behind a real Let's Encrypt certificate, so
             * `strict` and `alwaysUseHttps` change nothing for anyone else.
             *
             * HSTS is NOT set. `includeSubdomains` on the apex would commit
             * every name under `stacksjs.com` to HTTPS-only in every visitor's
             * browser for a year, including names this app has never heard of
             * and any that are added later without a certificate ready. That is
             * a zone owner's decision to make once, not a side effect of
             * deploying a tenant.
             */
            settings: {
              ssl: 'strict',
              alwaysUseHttps: true,
              minTlsVersion: '1.2',
              brotli: true,
              http3: true,
            },
            cache: {
              // Build output is fingerprinted, so the bytes at a URL never
              // change and a long edge TTL is free.
              assetEdgeTtl: 2592000,
              // HTML carries the references to those fingerprinted files.
              // Caching it as long would pin visitors to a stale release.
              documentEdgeTtl: 3600,
            },
            // Purge the edge for these hosts at the end of every deploy, so a
            // release is visible immediately rather than after the document TTL
            // lapses. This is the default; it is spelled out because it is the
            // thing most likely to be turned off by accident.
            purgeOnDeploy: true,
          },
        },
      },
    },
  },

  sites: {
    // The stx app server: renders the landing page and proxies /api to the
    // loopback service below. ts-cloud prefixes site directories with the
    // project slug on a shared box (`/var/www/trifitla-main`), so plain keys
    // cannot collide with another tenant's.
    main: {
      root: '.',
      path: '/',
      domain: APP_DOMAIN,
      start: 'bun node_modules/@stacksjs/buddy/dist/serve-entry.js',
      port: 3140,
      // Migrate runs only here (single database owner) and tolerates failure:
      // the final auth-table guarantee step throws `no such table:
      // oauth_access_tokens` even when every table was created. The page reads
      // nothing from the database, so a migration hiccup must not fail the
      // release.
      preStart: [
        'bun install --frozen-lockfile',
        'mkdir -p /var/lib/trifitla',
        'bun node_modules/@stacksjs/buddy/dist/cli.js migrate || true',
      ],
      env: {
        HOST: '127.0.0.1',
        APP_ENV: 'production',
        NODE_ENV: 'production',
        APP_NAME: 'TRIFIT LA',
        APP_URL: APP_DOMAIN,
        APP_KEY: env.APP_KEY || '',
        PORT_API: '3148',
        API_URL: 'http://127.0.0.1:3148',
        // Outside the atomic release directories, so a deploy never swaps the
        // database out from under the running service.
        DB_CONNECTION: 'sqlite',
        DB_DATABASE_PATH: '/var/lib/trifitla/stacks.sqlite',
      },
    },

    // Short alias. `trifitla` is canonical everywhere — the repo, the brand, the
    // og:url and the certificate — so this 301s rather than serving a second
    // copy, which would split the two hosts in search results. To make `trifit`
    // canonical instead, swap the `redirect` here for the domain on `main` and
    // point this one back the other way.
    trifitAlias: {
      domain: 'trifit.stacksjs.com',
      redirect: 'https://trifitla.stacksjs.com',
    },

    // The `www.` variants are kept because people type them, not because they
    // are required. They started as a workaround: `buddy deploy`'s DNS reconcile
    // used to publish an A record for `www.<domain>` on EVERY site domain, while
    // the gateway's autoWww only routes `www` for a two-label apex — so a
    // three-label host ended up with a record that had no route and no
    // certificate, resolving and then failing TLS. Fixed in stacks 0.70.367
    // (commit 30730d8a63), which this app now runs, so nothing would recreate
    // them if these two entries were deleted. Declared, they are real
    // certificated redirects; deleted, the names simply stop resolving.
    wwwMain: {
      domain: 'www.trifitla.stacksjs.com',
      redirect: 'https://trifitla.stacksjs.com',
    },

    wwwTrifitAlias: {
      domain: 'www.trifit.stacksjs.com',
      redirect: 'https://trifitla.stacksjs.com',
    },

    // API (bun-router). Deliberately no `domain`/`path`: the rpx gateway skips
    // domain-less sites, so this stays loopback-only and is reached only
    // through the app's same-origin /api proxy.
    api: {
      root: '.',
      start: 'bun node_modules/@stacksjs/actions/dist/serve/api.js',
      port: 3148,
      preStart: ['bun install --frozen-lockfile'],
      env: {
        HOST: '127.0.0.1',
        APP_ENV: 'production',
        NODE_ENV: 'production',
        APP_NAME: 'TRIFIT LA',
        APP_URL: APP_DOMAIN,
        APP_KEY: env.APP_KEY || '',
        DB_CONNECTION: 'sqlite',
        DB_DATABASE_PATH: '/var/lib/trifitla/stacks.sqlite',
      },
    },
  },
}

const config: CloudConfig = {}

export default config
