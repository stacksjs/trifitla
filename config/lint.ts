import type { LintConfig } from '@stacksjs/types'

/**
 * Lint configuration.
 *
 * Code style lives in `config/code-style.ts` (pickier's own options). This file
 * holds the checks Stacks runs on top of it - today, the stx conformance
 * checks behind `buddy lint --stx`.
 *
 * The baselines are a ratchet. A number is a DEBT, not a target: going above
 * one fails, and dropping below one is reported too, so a cleared violation has
 * to be recorded rather than quietly banked. Every non-zero entry names what
 * clears it.
 */
const config: LintConfig = {
  stx: {
    baselines: {
      // Held at zero - each of these breaks a page or silently drops content.
      'comment-landmine': 0,
      'dist-component-error': 0,
      'dist-layout-published': 0,
      'dist-path-leak': 0,
      'script-tag-balance': 0,
      'strict-lint': 0,
      'unmanaged-timer': 0,

      // Cleared: every internal anchor across the site now carries
      // data-stx-link, so the router owns navigation everywhere.
      'plain-internal-anchor': 0,

      // config/ui.ts sets none of strict/root/pagesDir. Pinning root+pagesDir
      // changes how stx resolves topology, so it wants its own dev+build pass
      // rather than being swept in with a lint change.
      'stx-config-keys': 2,

      // The email template, the desktop shell, and the two PDF partials own
      // their own DOCTYPE. Every marketing page now declares @nolayout, which
      // is what the rule is actually asking for; these four are not pages.
      'doctype-no-nolayout': 4,

      // coming-soon.stx still carries a <style> block; the destination is
      // config/crosswind.ts preflights. The marketing pages now share
      // public/css/site.css instead of inlining the design system per page.
      'style-block': 1,

      // coming-soon.stx and index.stx are still imperative.
      'dom-guard': 3,

      // The desktop demo components, plus pre-hydration display:none whose
      // sanctioned form is a :class with literal branches. The marketing pages
      // carry none: their one-off spacing lives in site.css utilities.
      'inline-style-attr': 46,
    },
  },
}

export default config
