/*
 * Membership, amenities, and events.
 *
 * Prices, fees, and terms are exactly as the club publishes them. Where a
 * term has small print — the 60-day minimum, the parking badge, the amenities
 * fee cadence — it is carried here rather than dropped for a tidier card.
 */

export interface Plan {
  id: string
  name: string
  price: string
  period: string
  note: string
  lines: string[]
  cta: string
  ctaUrl: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    id: 'community',
    featured: true,
    name: 'Community',
    price: '$189',
    period: 'per month',
    note: 'Month to month, with a 60-day minimum. No annual contract to sign.',
    lines: [
      'Full facility access: gym, pool, recovery, and more',
      'Unlimited classes',
      'Free 3-hour daily validated parking',
      '$99 initiation fee',
      '$39 amenities fee every six months',
    ],
    cta: 'Join us',
    ctaUrl: '/visit-us',
  },
  {
    id: 'tenant',
    name: 'Tenant and corporate',
    price: '$179',
    period: 'per month',
    note: 'For Colorado Center tenants, select corporate groups, and families. Bring your employee badge on your first visit.',
    lines: [
      'Everything in Community',
      'Month to month, 60-day minimum',
      '$99 initiation fee',
      '$39 amenities fee every six months',
      'Free 3-hour daily validated parking',
    ],
    cta: 'Join us',
    ctaUrl: '/visit-us',
  },
  {
    id: 'direct',
    name: 'Corporate direct pay',
    price: 'Custom',
    period: 'billed to your company',
    note: 'Your company pays a discounted rate directly to TRIFIT LA. Contact us to discuss direct-pay rates.',
    lines: [
      'No initiation fee',
      'No amenities fee at signup, due annually on 1 January',
      'Full facility access and unlimited classes',
      'Free 3-hour daily validated parking',
    ],
    cta: 'Contact us',
    ctaUrl: '/contact',
  },
]

/** Ways in that are not a membership. */
export const passes = [
  {
    name: 'Day pass',
    price: '$39',
    period: 'per visit',
    lines: [
      'Full access to every club facility',
      'Indoor pool access',
      'Squash courts access',
      'Free 3-hour parking, validated at the front desk',
    ],
  },
  {
    name: 'Tennis',
    price: '$5',
    period: 'per hour',
    lines: [
      'West court hourly reservation',
      'Open play only',
      'Coaching is not permitted',
      'Buy a day pass for full access to the rest of the club',
    ],
  },
  {
    name: 'Ocean swim',
    price: 'Free',
    period: 'May through September',
    lines: [
      'Hosted by TRIFIT LA and the LA Tri Club',
      'Meets at Lifeguard Tower 26',
      'Free to members and to the public',
      'Coached open-water workout on a buoyed course, lifeguard on duty',
    ],
  },
]

/** Fees that are easy to miss on a pricing table, stated plainly. */
export const feeNotes = [
  'A one-time electronic parking badge is $29.',
  'Freezes are $25 a month in place of your regular dues, for up to three months a calendar year.',
  'Monthly billing is assessed on the 1st of each month for the month ahead.',
]

export interface Amenity {
  name: string
  text: string
  image?: string
  alt?: string
}

export const amenityGroups: { id: string, name: string, lede: string, items: Amenity[] }[] = [
  {
    id: 'training',
    name: 'Training spaces',
    lede: 'Eight distinct spaces, so the class in the yoga studio is not competing for floor with the squat racks.',
    items: [
      {
        name: 'Weight and cardio deck',
        text: 'Racks, platforms, machines, dumbbells to the end of the rack, and a full cardio floor.',
        image: '/images/trifit/weight-deck.jpg',
        alt: 'The fully equipped weight and cardio deck at TRIFIT LA',
      },
      {
        name: '25-yard indoor lap pool',
        text: 'A three-lane, temperature-controlled pool, indoors and open all year, for swimming laps or working on technique.',
        image: '/images/trifit/trifit-indoors-Pools.jpg',
        alt: 'The indoor 25-yard lap pool at TRIFIT LA with lane ropes and pennants overhead',
      },
      {
        name: 'Squash courts',
        text: 'Professional-grade courts, with weekly open-play round robins on Thursday evenings and Sunday mornings.',
        image: '/images/trifit/squash-courts.jpg',
        alt: 'Glass-backed squash courts at TRIFIT LA',
      },
      {
        name: 'Cycling studio',
        text: 'High-energy indoor cycling sessions built to lift endurance.',
        image: '/images/trifit/cycling-studio.jpg',
        alt: 'The cycling studio at TRIFIT LA',
      },
      {
        name: 'Boxing studio',
        text: 'Learn technique and build strength on the bags in a dedicated space.',
        image: '/images/trifit/Boxing.jpg',
        alt: 'The boxing area at TRIFIT LA with heavy bags',
      },
      {
        name: 'Functional training studio',
        text: 'Strength, endurance, and mobility work with equipment designed for real-life movement.',
        image: '/images/trifit/functional-training-area.jpg',
        alt: 'The functional training studio at TRIFIT LA',
      },
      {
        name: 'TRX suspension training',
        text: 'A dedicated TRX space for full-body strength and stability work.',
        image: '/images/trifit/TRX.jpg',
        alt: 'TRX straps set up for suspension training at TRIFIT LA',
      },
      {
        name: 'Yoga studio',
        text: 'Vinyasa, Iyengar, destress yoga, meditation, breathwork, and mobility, in a room built for them.',
        image: '/images/trifit/yoga-studio.jpg',
        alt: 'The yoga studio at TRIFIT LA',
      },
    ],
  },
  {
    id: 'recovery',
    name: 'Recovery and amenities',
    lede: 'The part of training that actually makes you fitter happens after the session, so the club is built for it.',
    items: [
      {
        name: 'Cold plunge',
        text: 'Accelerate recovery and refresh your body with a dip in the plunge.',
        image: '/images/trifit/cold-plunge.jpg',
        alt: 'The cold plunge at TRIFIT LA',
      },
      {
        name: 'Sauna',
        text: 'Relax and rejuvenate after training in the sauna.',
        image: '/images/trifit/sauna.jpg',
        alt: 'The sauna at TRIFIT LA',
      },
      {
        name: 'Steam room',
        text: 'Soothing heat that helps you loosen off and recover.',
        image: '/images/trifit/steam-room.jpg',
        alt: 'The steam room at TRIFIT LA',
      },
      {
        name: 'Massage recovery pods',
        text: 'Advanced massage pods for the days your legs have had enough.',
        image: '/images/trifit/recovery-pods.jpg',
        alt: 'Massage recovery pods at TRIFIT LA',
      },
      {
        name: 'Locker rooms',
        text: 'Spacious, modern locker rooms and showers with premium amenities.',
        image: '/images/trifit/locker-rooms.jpg',
        alt: 'The locker rooms at TRIFIT LA',
      },
      {
        name: 'Parking',
        text: 'Up to three hours of free parking per visit in the secured Colorado Center garage.',
        image: '/images/trifit/parking.jpg',
        alt: 'The parking garage entrance at Colorado Center',
      },
    ],
  },
  {
    id: 'outdoor',
    name: 'Outdoors',
    lede: 'Santa Monica is the other half of the club. Three of the best sessions on the schedule happen outside the building.',
    items: [
      {
        name: 'Tennis courts',
        text: 'Public courts where TRIFIT LA members get priority access when reserving. The west court is open play; the east court is reserved for registered tennis pros.',
        image: '/images/trifit/tennis-court.jpg',
        alt: 'The tennis court framed by palm trees near TRIFIT LA',
      },
      {
        name: 'Ocean swim',
        text: 'May through September, every Friday at 6:30 am. A coached buoyed-course swim with certified triathlon coaching, a lifeguard on the beach, and spotters in the water.',
        image: '/images/trifit/ocean-swim-group.jpg',
        alt: 'Swimmers heading into the ocean at dawn for the TRIFIT LA open water swim',
      },
      {
        name: 'Run workout',
        text: 'Tuesday morning coached runs with Bernard: interval work and proper technique. Warm-up starts at 7:30 am near the polo field.',
        image: '/images/trifit/run-coached.jpg',
        alt: 'A coached run workout with TRIFIT LA',
      },
    ],
  },
]

export interface ClubEvent {
  slug: string
  name: string
  when: string
  where: string
  price: string
  season?: string
  summary: string
  detail: string[]
  image: string
  alt: string
  /** Open to the public, not just members. */
  publicWelcome?: boolean
}

export const events: ClubEvent[] = [
  {
    slug: 'ocean-swim',
    name: 'Ocean swim',
    when: 'Fridays, 6:30 am',
    season: 'May through September',
    where: 'Lifeguard Tower 26, Santa Monica',
    price: 'Free, members and public',
    publicWelcome: true,
    summary: 'A coached open-water swim on a buoyed course, hosted with the LA Tri Club, with a lifeguard on the beach and spotters in the water.',
    detail: [
      'The workout is designed for advanced swimmers who are comfortable in the ocean and able to swim at least 1,000 yards consecutively without stopping.',
      'It is open to TRIFIT LA members, LA Tri Club members, and the general public. Non-members are asked to sign an online guest participant waiver before attending.',
    ],
    image: '/images/trifit/ocean-swim.jpg',
    alt: 'Swimmers in wetsuits entering the surf at dawn for the TRIFIT LA ocean swim',
  },
  {
    slug: 'run-workout',
    name: 'Coached run workout',
    when: 'Tuesdays, 7:30 am',
    where: 'Will Rogers State Park, beside the polo field',
    price: 'Included with membership',
    summary: 'Outdoor coached runs with Bernard, whether you are a beginner or an avid runner.',
    detail: [
      'Get introduced to interval running, and learn how to build mileage while developing proper run technique.',
      'The warm-up begins at 7:30 am sharp on the road adjacent to the polo field. Any kind of stopwatch is recommended so you can learn and understand your pacing.',
    ],
    image: '/images/trifit/run-workout.jpg',
    alt: 'Runners on a coached outdoor run with TRIFIT LA',
  },
  {
    slug: 'squash-round-robin',
    name: 'Squash round robin',
    when: 'Thursdays 6–9 pm, Sundays 9 am–12 pm',
    where: 'Squash courts',
    price: 'Included with membership',
    summary: 'Weekly open play on the professional-grade courts. Turn up, get matched, play whoever is next.',
    detail: [
      'Challenge your friends or improve your game. The round robin runs twice a week and suits every standard, because the format keeps rotating opponents.',
    ],
    image: '/images/trifit/squash-play.jpg',
    alt: 'Players on the squash courts at TRIFIT LA',
  },
  {
    slug: 'strength-and-conditioning',
    name: 'Strength and conditioning',
    when: 'Mondays and Wednesdays 8:30 am, Fridays 5 pm',
    where: 'Group Ex Room',
    price: 'Included with membership',
    summary: 'Functional strength training combined with high-intensity intervals, to build lean muscle and improve overall athleticism.',
    detail: [
      'Each session challenges the full body through progressive resistance work, core integration, and dynamic conditioning circuits.',
      'Whether you are training for sport, for fat loss, or for overall performance, this class will push you and keep you coming back stronger. All levels welcome.',
    ],
    image: '/images/trifit/Strength-Conditioning-resize.jpg',
    alt: 'A member rowing a loaded barbell during a strength and conditioning session',
  },
  {
    slug: 'guided-meditation',
    name: 'Meditation: inspiration and digestion',
    when: 'Mondays, 4:30 pm',
    where: 'Yoga studio',
    price: 'Included with membership',
    summary: 'A 45-minute guided meditation set to soothing, rhythmic music, designed to support digestion and lift energy.',
    detail: [
      'The session will help you reset, refocus, and recharge, body and mind.',
      'Experience the mental and physical benefits of meditation, from reduced stress and anxiety to improved digestion, focus, and overall well-being.',
    ],
    image: '/images/trifit/meditation.jpg',
    alt: 'The meditation space at TRIFIT LA',
  },
  {
    slug: 'guided-breathwork',
    name: 'Breathwork: breathing for relaxation and calm',
    when: 'Wednesdays, 4:30 pm',
    where: 'Yoga studio',
    price: 'Included with membership',
    summary: 'A 45-minute early evening breathwork session that closes out the workday.',
    detail: [
      'The practice incorporates music and atmospherics designed to dial back tension and anxiety, and to instil a simple practice of relaxing on demand.',
      'Breathwork is the practice of intentional breathing to influence physical, mental, and emotional well-being. By consciously controlling your breath you can regulate your nervous system, reduce stress, manage anxiety, and improve your overall health.',
    ],
    image: '/images/trifit/breathwork.jpg',
    alt: 'An early evening breathwork session at TRIFIT LA',
  },
]
