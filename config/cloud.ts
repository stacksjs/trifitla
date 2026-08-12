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
