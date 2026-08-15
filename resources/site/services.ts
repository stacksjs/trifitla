/*
 * Add-on services. Every price below is the published rate; where the club
 * lists an initial rate and a retest or add-on rate, both are carried rather
 * than collapsed into one number.
 */

export interface Service {
  slug: string
  name: string
  /** Which of the four groups the service belongs to. */
  group: 'Coaching' | 'Testing' | 'Performance'
  summary: string
  detail: string[]
  image: string
  alt: string
  prices?: { label: string, amount: string }[]
  /**
   * `prices` flattened to one line, amount first.
   *
   * The template renders this rather than looping `prices` in place: a
   * `@foreach` nested inside an `@if` inside two outer loops renders nothing
   * under the SSG build, and a price that silently disappears in production
   * while it works in dev is the worst kind of bug to ship.
   */
  priceLine?: string
}

export const serviceGroups: { id: string, name: string, match: Service['group'], lede: string }[] = [
  {
    id: 'coaching',
    name: 'Coaching',
    match: 'Coaching',
    lede: 'One-to-one work with trainers who hold certifications in kinesiology and exercise physiology, not a script handed to everyone who walks in.',
  },
  {
    id: 'testing',
    name: 'Biometric testing',
    match: 'Testing',
    lede: 'Measured, not estimated. Exercise scientists on staff run the tests in-house, so your plan starts from a real number.',
  },
  {
    id: 'performance',
    name: 'Sports performance',
    match: 'Performance',
    lede: 'Mechanics work for athletes who want the competitive edge that comes from moving efficiently rather than simply training harder.',
  },
]

export const services: Service[] = [
  {
    slug: 'private-training',
    name: 'Private training',
    group: 'Coaching',
    summary: 'Whether you are building muscle, losing weight, improving overall fitness, or preparing for a race, our trainers are here to support you at every step.',
    detail: [
      'Sessions are one-to-one with a TRIFIT certified trainer, scheduled around your week rather than a fixed class time.',
      'Every plan begins with a personalised assessment so the programme starts where you actually are.',
    ],
    image: '/images/trifit/untitled-shoot-270.jpg',
    alt: 'A member catching their breath between sets on the training floor at TRIFIT LA',
  },
  {
    slug: 'strength-and-conditioning',
    name: 'Strength and conditioning',
    group: 'Coaching',
    summary: 'Our TRIFIT certified personal trainers combine kinesiology and exercise physiology to design customised programmes for your health and fitness goals.',
    detail: [
      'Build lean muscle, lose weight, improve flexibility and agility, or train for a race.',
      'Your journey starts with a personalised assessment, and the programme is revised as your fitness changes.',
    ],
    image: '/images/trifit/weight-deck.jpg',
    alt: 'The weight and cardio deck at TRIFIT LA',
  },
  {
    slug: 'swim-instruction',
    name: 'Swim instruction',
    group: 'Coaching',
    summary: 'Whether you are learning to swim or training for an endurance competition, our coaches will help you optimise your performance in the water.',
    detail: [
      'Pool instruction runs in the three-lane, 25-yard indoor lap pool, temperature controlled year round.',
      'Open-water ocean swim training is available for individuals and groups, including sighting and in-and-outs.',
    ],
    image: '/images/trifit/swim-workout.jpg',
    alt: 'A swimmer taking a stroke in the indoor lap pool at TRIFIT LA',
  },
  {
    slug: 'individual-training-plans',
    name: 'Individual training plans',
    group: 'Coaching',
    summary: 'Triathlon, cycling, running, and swimming programmes for individuals and groups training for endurance sport.',
    detail: [
      'Each package includes comprehensive weekly training plans with scheduled workouts and personal training zones.',
      'The programme takes into account your ability, your access to training and equipment, your schedule, and your other commitments — because a training programme is only useful if it fits inside your life.',
      'Coaches offer stand-alone programmes as well as plans with in-person sessions and check-ins, so the plan evolves with your fitness. Delivery is by spreadsheet or through TrainingPeaks.',
    ],
    image: '/images/trifit/bike-fitting.jpg',
    alt: 'A bike being fitted and serviced at TRIFIT LA',
  },
  {
    slug: 'body-composition-assessment',
    name: 'Body composition assessment',
    group: 'Testing',
    summary: 'Precise body composition analysis with a trained specialist and the seca mBCA.',
    detail: [
      'The test measures fat mass, fat-free mass, body water, and skeletal muscle mass, so you can track real change over time instead of watching one number on a bathroom scale.',
    ],
    image: '/images/trifit/seca-body-composition.jpg',
    alt: 'The seca medical body composition analyser at TRIFIT LA',
    prices: [
      { label: 'Initial assessment', amount: '$50' },
      { label: 'Add-on with any test', amount: '$25' },
    ],
  },
  {
    slug: 'resting-metabolic-rate',
    name: 'Resting metabolic rate',
    group: 'Testing',
    summary: 'Understand your metabolic profile so you can manage weight from evidence rather than guesswork.',
    detail: [
      'The assessment tells you how many calories your body burns in a day at rest, which is the number every nutrition target should be built on.',
    ],
    image: '/images/trifit/vo2-test.jpg',
    alt: 'Metabolic testing equipment in use at TRIFIT LA',
    prices: [
      { label: 'Initial assessment', amount: '$125' },
      { label: 'Add-on with any test', amount: '$75' },
    ],
  },
  {
    slug: 'vo2-max',
    name: 'VO₂ max and exercise metabolic rate',
    group: 'Testing',
    summary: 'How much oxygen you actually use at effort, measured rather than estimated.',
    detail: [
      'EMR and VO₂ max testing show how your body performs metabolically during exercise: your VO₂ max, your heart rate zones, your calorie burn, and which fuels you use during endurance work.',
      'With that data we make personalised recommendations aligned to your health and performance goals.',
    ],
    image: '/images/trifit/vo2-max.jpg',
    alt: 'A VO₂ max test underway at TRIFIT LA',
    prices: [
      { label: 'Initial test', amount: '$295' },
      { label: 'Annual retest', amount: '$195' },
    ],
  },
  {
    slug: 'swim-stroke-analysis',
    name: 'Swim stroke analysis',
    group: 'Performance',
    summary: 'Underwater and overhead cameras record your stroke so a coach can explain what your body is actually doing.',
    detail: [
      'We record, analyse, and explain your swim stroke biomechanics and efficiency, then take you through the technical side of swimming.',
      'From there you work through progressive, specific drills that improve your performance, your fitness, and your confidence in the water.',
    ],
    image: '/images/trifit/swim-masters.jpg',
    alt: 'A coached swim session in the lap pool at TRIFIT LA',
    prices: [
      { label: 'Initial video assessment', amount: '$249' },
    ],
  },
]

// Flatten each service's prices once, at module load, so the template never
// has to loop them.
for (const service of services) {
  if (service.prices?.length)
    service.priceLine = service.prices.map(p => `${p.amount} ${p.label.toLowerCase()}`).join('  ·  ')
}
