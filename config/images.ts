import type { ImagesConfig, SocialCardPageConfig } from '@stacksjs/types'
import { posts } from '../resources/site/blog'

/**
 * **Images Configuration**
 *
 * Generated imagery — the social cards link previews show, the App Store
 * screenshot set, and the platform icon sets — is declared here and built by
 * `buddy generate:images`. Because Stacks is fully-typed, you may hover any of
 * the options below and the definitions will be provided. In case you have any
 * questions, feel free to reach out via Discord or GitHub Discussions.
 *
 * Every generator is off until you fill it in: each one needs an asset the
 * framework cannot invent — a TrueType face, a product capture, a square
 * source icon.
 */

/**
 * Blog posts get their card from the post index rather than a second list
 * here. A post's headline and photograph are already written down once in
 * `resources/site/blog.ts`, and a card that quotes a headline the page no
 * longer has is worse than no card.
 */
const postCards: SocialCardPageConfig[] = posts.map(post => ({
  path: `/blog/${post.slug}`,
  eyebrow: post.topic,
  title: post.cardTitle ?? post.title,
  subtitle: `${post.dateLabel} · ${post.minutes} minute read`,
  foreground: `public${post.image}`,
}))

export default {
  // Cards and screenshots draw real glyphs rather than relying on a system
  // font stack, so a face has to be a file the project ships or depends on.
  // These are the two faces the site itself loads from Google Fonts, as
  // static TrueType instances — see the README beside them for why static.
  fonts: {
    title: 'resources/assets/fonts/brand/Outfit-Bold.ttf',
    body: 'resources/assets/fonts/brand/Geist-Regular.ttf',
  },

  // Shared palette. Positions are fractions of the canvas, so one definition
  // renders correctly at every size the generators produce.
  //
  // These are the dark-theme tokens from public/css/site.css, so a card and
  // the page it links to are recognisably the same site.
  background: {
    color: '#080c0a',
    gradient: {
      angle: 165,
      stops: [
        { offset: 0, color: '#0d1410' },
        { offset: 1, color: '#080c0a' },
      ],
    },
    // One accent glow, behind the brand row, in the TRIFIT green.
    glows: [{ x: 0.06, y: 0.04, radius: 0.55, color: '#5dd37c24' }],
  },
  color: '#e9f0eb',
  mutedColor: '#96a79c',
  accent: '#5dd37c',

  // How the page photograph is drawn beside the copy.
  device: {
    radius: 0.045,
    scale: 0.8,
    borderColor: '#e9f0eb1f',
    shadow: { blur: 60, offsetY: 24, color: '#00000066' },
  },

  // The wordmark ships white, which is what a dark card wants, so nothing is
  // painted behind it. `brand` is deliberately unset: the mark already says
  // the name, and setting both prints it twice.
  mark: 'public/images/trifit/TRIFIT_LOGOS_white_horizontal.png',
  markPlate: false,

  social: {
    enabled: true,
    outputDir: 'public/social',
    publicPath: '/social',
    // The `og` preset is the primary card and keeps the bare filename. The
    // others exist because some consumers reserve a taller slot than 1.91:1
    // and letterbox a wide card into it.
    presets: ['og'],
    format: 'jpeg',
    quality: 82,
    pages: [
      {
        path: '/',
        eyebrow: 'Santa Monica',
        title: 'One roof. Every way to train.',
        subtitle: 'Pool, tennis, squash, strength, recovery, and coaching across 29,000 square feet.',
        foreground: 'public/images/trifit/untitled-shoot-270.jpg',
      },
      {
        path: '/classes',
        eyebrow: 'Classes',
        title: 'Sixteen classes. One schedule.',
        subtitle: '49 coached sessions a week, included with every membership.',
        foreground: 'public/images/trifit/HIIT.jpg',
      },
      {
        path: '/events',
        eyebrow: 'Events',
        title: 'The club, outside the club.',
        subtitle: 'The Friday ocean swim at Tower 26 is free, members or not.',
        foreground: 'public/images/trifit/ocean-swim.jpg',
      },
      {
        path: '/services',
        eyebrow: 'Services',
        title: 'Coaching that starts with data.',
        subtitle: 'VO₂ max, metabolic rate, and body composition, measured in house.',
        foreground: 'public/images/trifit/vo2-max.jpg',
      },
      {
        path: '/about',
        eyebrow: 'About us',
        title: 'A family business with a gym in it.',
        subtitle: "Santa Monica's largest independent, family-owned health club since 2005.",
        foreground: 'public/images/trifit/Trifit_Family.jpg',
      },
      {
        path: '/membership',
        eyebrow: 'Membership',
        title: 'Every plan opens the whole club.',
        subtitle: 'From $189 a month. Month to month, no annual contract.',
        foreground: 'public/images/trifit/weight-deck.jpg',
      },
      {
        path: '/benefits',
        eyebrow: 'Benefits',
        title: 'A club, not a gym floor.',
        subtitle: 'Lap pool, squash, five studios, cold plunge, sauna, and free parking.',
        foreground: 'public/images/trifit/trifit-indoors-Pools.jpg',
      },
      {
        path: '/visit-us',
        eyebrow: 'Visit us',
        title: 'Come and see it.',
        subtitle: 'Same-day tours, or a $39 day pass that covers everything.',
        foreground: 'public/images/trifit/lobby.jpg',
      },
      {
        path: '/contact',
        eyebrow: 'Contact',
        title: 'Talk to someone who works here.',
        subtitle: '310-829-2227 rings the front desk of the club.',
        foreground: 'public/images/trifit/be-humble.jpg',
      },
      {
        path: '/careers',
        eyebrow: 'Careers',
        title: 'Work where the owners know your name.',
        subtitle: 'We accept resumes on a rolling basis.',
        foreground: 'public/images/trifit/better-together.jpg',
      },
      {
        path: '/blog',
        eyebrow: 'Blog',
        title: 'Notes from the club.',
        subtitle: 'Training, recovery, and testing, from the coaches who work here.',
        foreground: 'public/images/trifit/blog-saunas.jpg',
      },
      {
        path: '/privacy-policy',
        eyebrow: 'Legal',
        title: 'Privacy policy',
        subtitle: 'How TRIFIT LA handles your personal information.',
        foreground: 'public/images/trifit/exterior.jpg',
      },
      {
        path: '/terms-of-service',
        eyebrow: 'Legal',
        title: 'Terms of service',
        subtitle: 'The terms that apply to a TRIFIT LA membership.',
        foreground: 'public/images/trifit/exterior.jpg',
      },
      ...postCards,
    ],
  },

  appStore: {
    enabled: false,
    outputDir: 'resources/app-store/screenshots',
    displays: ['APP_IPHONE_67', 'APP_IPAD_PRO_3GEN_129', 'APP_DESKTOP'],
    // Each slide is one claim about the product. `capture` is a raw screenshot
    // of the app — no frame, no caption; the framing happens for you.
    // slides: [
    //   { capture: 'dist/captures/home.png', headline: 'What it does.', subheadline: 'Why that matters.' },
    // ],
  },

  appIcons: {
    enabled: false,
    // source: 'resources/icon.png',
    outputDir: 'resources/app-icons',
    platforms: ['ios', 'macos'],
    favicon: false,
    faviconDir: 'public',
  },
} satisfies ImagesConfig
