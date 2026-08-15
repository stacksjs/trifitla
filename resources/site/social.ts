/*
 * Link previews.
 *
 * `buddy generate:images --social` renders one card per page into
 * `public/social`, named after the path. This maps a path back to its card so
 * a page does not have to know the naming rule, and so a page that has no
 * card falls back to the club's own card rather than to nothing.
 *
 * Regenerate after changing a headline in `config/images.ts`: the card quotes
 * the copy, and a card quoting a headline the page no longer has is worse
 * than no card at all.
 */

/** Every card `config/images.ts` declares, by the path it belongs to. */
const CARD_PATHS = new Set([
  '/',
  '/about',
  '/benefits',
  '/blog',
  '/careers',
  '/classes',
  '/contact',
  '/events',
  '/membership',
  '/privacy-policy',
  '/services',
  '/terms-of-service',
  '/visit-us',
])

/** The `og` preset's dimensions, which every card is rendered at. */
export const cardWidth = 1200
export const cardHeight = 630
export const cardType = 'image/jpeg'

/**
 * The generator's naming rule, mirrored: strip the slashes, replace runs of
 * non-alphanumerics with a hyphen, and call the root card `og`.
 */
export function cardName(path: string): string {
  const trimmed = path.replace(/^\/+|\/+$/g, '')
  return trimmed === '' ? 'og' : trimmed.replace(/[^a-z0-9]+/gi, '-').toLowerCase()
}

/**
 * The card for `path`, or the club's own card when that page has none.
 *
 * Blog posts are matched by prefix because every post has a card, generated
 * from the post index.
 */
export function cardFor(path: string): string {
  const known = CARD_PATHS.has(path) || path.startsWith('/blog/')
  return `/social/${known ? cardName(path) : 'og'}.jpg`
}
