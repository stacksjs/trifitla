/*
 * The club itself: address, hours, and the handful of facts that appear on
 * more than one page. Every value here comes from trifitla.com. Nothing is
 * invented — no fabricated testimonials, no rounded-up statistics.
 */

export const siteName = 'TRIFIT LA'

/**
 * Canonical origin.
 *
 * `trifitla.stacksjs.com` is the canonical host, per `config/cloud.ts`:
 * `trifit.stacksjs.com` and both `www.` variants 301 here, so canonicals and
 * structured data must name this one or they point at a redirect.
 */
export const siteUrl = 'https://trifitla.stacksjs.com'

export const club = {
  street: '2425 Colorado Ave Ste B100',
  city: 'Santa Monica, CA 90404',
  cityShort: 'Santa Monica',
  phone: '310-829-2227',
  phoneHref: 'tel:+13108292227',
  email: 'contact@trifitla.com',
  /** Members manage bookings, freezes, and cancellations here. */
  memberPortal: 'https://www.myiclubonline.com/iclub/members/signin',
  /** Square footage of the Colorado Center club. */
  squareFeet: '29,000',
  /** Family owned and operating in Santa Monica since 2005. */
  since: 2005,
}

export const hours = [
  { days: 'Monday to Thursday', short: 'Mon–Thu', time: '6 am to 9 pm' },
  { days: 'Friday', short: 'Fri', time: '6 am to 8 pm' },
  { days: 'Saturday and Sunday', short: 'Sat–Sun', time: '7:30 am to 6 pm' },
]

/** Voted Santa Monica's Most Loved Gym in each of these years. */
export const awardYears = ['2019', '2020', '2023', '2024', '2025', '2026']

/**
 * Primary navigation. Every entry is a real page, which is the point of this
 * pass: the previous build linked only to anchors on the landing page.
 */
export const navLinks = [
  { label: 'Membership', url: '/membership' },
  { label: 'Benefits', url: '/benefits' },
  { label: 'Services', url: '/services' },
  { label: 'Classes', url: '/classes' },
  { label: 'Events', url: '/events' },
  { label: 'Blog', url: '/blog' },
  { label: 'About', url: '/about' },
  { label: 'Visit us', url: '/visit-us' },
]

export const footerColumns = [
  {
    title: 'The club',
    links: [
      { label: 'Membership', url: '/membership' },
      { label: 'Benefits and amenities', url: '/benefits' },
      { label: 'Services', url: '/services' },
      { label: 'Classes', url: '/classes' },
      { label: 'Events', url: '/events' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', url: '/about' },
      { label: 'Careers', url: '/careers' },
      { label: 'Blog', url: '/blog' },
      { label: 'Contact us', url: '/contact' },
      { label: 'Visit us', url: '/visit-us' },
    ],
  },
]

export const legalLinks = [
  { label: 'Privacy policy', url: '/privacy-policy' },
  { label: 'Terms of service', url: '/terms-of-service' },
]

/** What every membership includes, whichever plan you are on. */
export const included = [
  'Premium locker rooms',
  'Coffee, tea, and infused water in the lobby',
  'Wi-Fi throughout the club',
  'Retail store',
  '3 hours of free validated parking',
  'Exercise physiologists on staff',
]

/**
 * Structured data for the club. Built as a string so the @-prefixed
 * schema.org keys never reach the stx directive scanner.
 */
export function clubJsonLd(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${siteUrl}/#club`,
    name: siteName,
    url: `${siteUrl}/`,
    telephone: club.phone,
    email: club.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: club.street,
      addressLocality: 'Santa Monica',
      addressRegion: 'CA',
      postalCode: '90404',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '06:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '06:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '07:30', closes: '18:00' },
    ],
  })
}
