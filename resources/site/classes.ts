/*
 * The class programme.
 *
 * `classTypes` is the catalogue — one entry per class the club runs, with the
 * description it publishes and a photograph that actually shows that class.
 * `schedule` is the live week, generated from the club's own calendar, so the
 * page can show the real timetable with the coach who teaches each slot
 * rather than linking out to a PDF.
 */

export interface ClassType {
  slug: string
  name: string
  /** Studio or space the class runs in. */
  where: string
  /** Typical session length, as published. */
  length: string
  description: string
  image: string
  alt: string
  /** Carried on the landing-page rail as well as the classes page. */
  featured?: boolean
}

export const classTypes: ClassType[] = [
  {
    slug: 'hiit',
    name: 'HIIT',
    where: 'Group Ex Room',
    length: '45 minutes',
    description: 'Ignite your metabolism and build lean strength. These sessions alternate intense bursts of activity with short recovery periods, maximising calorie burn and cardiovascular health. Suitable for all fitness levels.',
    image: '/images/trifit/HIIT.jpg',
    alt: 'A member pressing a kettlebell overhead during a HIIT class at TRIFIT LA',
    featured: true,
  },
  {
    slug: 'strength-and-conditioning',
    name: 'Strength & Conditioning',
    where: 'Group Ex Room',
    length: '45 minutes',
    description: 'Build power, endurance, and agility in a circuit that pairs bodyweight mastery with aerobic conditioning. It keeps you moving from start to finish, and it is the class most members credit for their first real jump in performance.',
    image: '/images/trifit/Strength-Conditioning-resize.jpg',
    alt: 'A member rowing a loaded barbell on the strength floor at TRIFIT LA',
    featured: true,
  },
  {
    slug: 'functional-training',
    name: 'Functional Training',
    where: 'Group Ex Room',
    length: '45 minutes',
    description: 'Mobility, stability, and strength work that improves range of motion, core control, and overall performance. Built for the demands of real life rather than the demands of a machine.',
    image: '/images/trifit/functional-training-area.jpg',
    alt: 'The functional training area at TRIFIT LA with racks, ropes, and open floor',
    featured: true,
  },
  {
    slug: 'trx',
    name: 'TRX',
    where: 'Group Ex Room',
    length: '50 minutes',
    description: 'Suspension training that uses your own bodyweight to build strength, core stability, and balance. It targets several muscle groups at once, so a short session covers a lot of ground.',
    image: '/images/trifit/TRX.jpg',
    alt: 'Members working through a TRX suspension training class',
    featured: true,
  },
  {
    slug: 'cycling',
    name: 'Cycling',
    where: 'Cycling Studio',
    length: '50 minutes',
    description: 'High-intensity indoor cycling for every fitness level. Music, coaching, and interval work combine to build stamina and cardiovascular health in a room that carries the effort with you.',
    image: '/images/trifit/Cycling.jpg',
    alt: 'Rows of Schwinn bikes in the cycling studio at TRIFIT LA',
    featured: true,
  },
  {
    slug: 'boxing',
    name: 'Boxing',
    where: 'Group Ex Room',
    length: '50 minutes',
    description: 'Technique, agility, and coordination on the bags. Dynamic rounds that build fitness while you learn to actually throw a punch properly.',
    image: '/images/trifit/Boxing.jpg',
    alt: 'Heavy bags hanging in the boxing area at TRIFIT LA',
    featured: true,
  },
  {
    slug: 'swim-workout',
    name: 'Swim Workout',
    where: 'Lap Pool',
    length: '60 minutes',
    description: 'A Masters-style pool session built to improve technique, endurance, and speed. Each workout is structured to challenge every level, with a rotating focus. Monday sessions concentrate on form and technique.',
    image: '/images/trifit/swim-lane.jpg',
    alt: 'A swimmer mid-stroke in the lap pool at TRIFIT LA',
    featured: true,
  },
  {
    slug: 'ocean-swim',
    name: 'Ocean Swim',
    where: 'Lifeguard Tower 26',
    length: '60 minutes',
    description: 'A coached open-water swim on a buoyed course, hosted with the LA Tri Club, for advanced swimmers comfortable in the ocean and able to swim 1,000 yards without stopping. A lifeguard is on the beach and spotters are in the water. Free to members and to the public; non-members sign an online waiver first.',
    image: '/images/trifit/ocean-swim.jpg',
    alt: 'Swimmers in wetsuits wading into the surf at dawn for the TRIFIT LA ocean swim',
    featured: true,
  },
  {
    slug: 'run-workout',
    name: 'Run Workout',
    where: 'Will Rogers State Park',
    length: '60 minutes',
    description: 'Outdoor coached runs with Bernard on Tuesday mornings, for beginners and seasoned runners alike. Interval work, building mileage, and proper run technique. Warm-up starts at 7:30 am sharp on the road beside the polo field; bring any kind of stopwatch so you can learn your pacing.',
    image: '/images/trifit/run-workout.jpg',
    alt: 'A coached outdoor run session with TRIFIT LA',
  },
  {
    slug: 'vinyasa-flow',
    name: 'Vinyasa Flow',
    where: 'Yoga Studio',
    length: '60 minutes',
    description: 'A dynamic, flowing practice that links breath with movement. You move smoothly from pose to pose, building strength, flexibility, and focus. No two classes are the same.',
    image: '/images/trifit/Yoga-Trifit.jpg',
    alt: 'An instructor adjusting a member in the yoga studio at TRIFIT LA',
  },
  {
    slug: 'iyengar-yoga',
    name: 'Iyengar Yoga',
    where: 'Yoga Studio',
    length: '60 minutes',
    description: 'A precise practice focused on posture, alignment, and safe movement, using blocks, straps, and blankets so every level can practise with confidence. Good for building strength, improving flexibility, and learning to move mindfully.',
    image: '/images/trifit/yoga-studio.jpg',
    alt: 'The yoga studio at TRIFIT LA set up with mats and props',
  },
  {
    slug: 'destress-yoga',
    name: 'Destress Yoga',
    where: 'Yoga Studio',
    length: '60 minutes',
    description: 'A slower Friday afternoon practice aimed at relaxation, flexibility, and unwinding the week out of your shoulders before the weekend starts.',
    image: '/images/trifit/yoga-outdoors.jpg',
    alt: 'A calm yoga practice at TRIFIT LA',
  },
  {
    slug: 'kinstretch',
    name: 'Kinstretch',
    where: 'Yoga Studio',
    length: '45 minutes',
    description: 'Targeted mobility work that improves your usable range of motion and helps prevent injury. It is the least glamorous class on the schedule and the one that keeps people training for decades.',
    image: '/images/trifit/untitled-shoot-180.jpg',
    alt: 'A mobility and core class in progress at TRIFIT LA',
  },
  {
    slug: 'guided-meditation',
    name: 'Guided Meditation',
    where: 'Yoga Studio',
    length: '45 minutes',
    description: 'A mindful break in the middle of the day, set to soothing rhythmic music, designed to support digestion and lift post-lunch energy. Reduced stress and anxiety, better focus, a genuine reset.',
    image: '/images/trifit/meditation.jpg',
    alt: 'The meditation and breathwork space at TRIFIT LA',
  },
  {
    slug: 'guided-breathwork',
    name: 'Guided Breathwork',
    where: 'Yoga Studio',
    length: '45 minutes',
    description: 'An early evening session that closes out the workday. Music and atmospherics dial back tension and anxiety while you learn a simple practice of relaxing on demand — intentional breathing that regulates the nervous system.',
    image: '/images/trifit/breathwork.jpg',
    alt: 'An early evening breathwork session at TRIFIT LA',
  },
  {
    slug: 'squash-round-robin',
    name: 'Squash Round Robin',
    where: 'Squash Courts',
    length: '3 hours, drop in',
    description: 'Weekly open play on the professional-grade courts. Turn up, get matched, play whoever is next. Twice a week, Thursday evenings and Sunday mornings.',
    image: '/images/trifit/squash-play.jpg',
    alt: 'Players on the squash courts at TRIFIT LA',
  },
]

/** Rail on the landing page: the eight classes that carry a photograph. */
export const featuredClasses = classTypes.filter(c => c.featured)

export interface Slot {
  time: string
  name: string
  where: string
  who: string
}

/**
 * The published week. Times are the club's own; the coach named is the one
 * listed against that occurrence on the club calendar.
 */
export const schedule: { day: string, slots: Slot[] }[] = [
  {
    day: 'Monday',
    slots: [
      { time: '7:30 am – 8:15 am', name: 'Functional Training', where: 'Group Ex Room', who: 'Ben Hawkinson' },
      { time: '8:30 am – 9:15 am', name: 'Strength & Conditioning', where: 'Group Ex Room', who: 'Bastien Hattiger' },
      { time: '12 pm – 12:50 pm', name: 'TRX', where: 'Group Ex Room', who: 'Jimmy Guerrero' },
      { time: '1 pm – 2 pm', name: 'Vinyasa Flow', where: 'Yoga Studio', who: 'Steve Jones' },
      { time: '4:30 pm – 5:15 pm', name: 'Guided Meditation', where: 'Yoga Studio', who: 'Jackson Lynch' },
      { time: '5 pm – 6 pm', name: 'Swim Workout', where: 'Lap Pool', who: 'Triniti Santos' },
      { time: '5:30 pm – 6:20 pm', name: 'Cycling', where: 'Cycling Studio', who: 'Tiffani Carter' },
      { time: '5:30 pm – 6:15 pm', name: 'HIIT', where: 'Group Ex Room', who: 'Jimmy Guerrero' },
      { time: '6 pm – 7 pm', name: 'Swim Workout', where: 'Lap Pool', who: 'Triniti Santos' },
      { time: '6:15 pm – 7:15 pm', name: 'Vinyasa Flow', where: 'Yoga Studio', who: 'Sophie Clemo' },
      { time: '6:30 pm – 7:15 pm', name: 'Strength & Conditioning', where: 'Group Ex Room', who: 'Sevdi Simnica' },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '7:30 am – 8:30 am', name: 'Run Workout', where: 'Will Rogers State Park', who: '' },
      { time: '8 am – 8:45 am', name: 'HIIT', where: 'Group Ex Room', who: 'Aaron Newton' },
      { time: '12 pm – 1 pm', name: 'Swim Workout', where: 'Lap Pool', who: 'Cassaundra Pino' },
      { time: '12:30 pm – 1:15 pm', name: 'HIIT', where: 'Group Ex Room', who: 'Jimmy Guerrero' },
      { time: '1 pm – 2 pm', name: 'Vinyasa Flow', where: 'Yoga Studio', who: 'Sophie Clemo' },
      { time: '5:30 pm – 6:20 pm', name: 'Cycling', where: 'Cycling Studio', who: 'Sara McGinnis' },
      { time: '5:30 pm – 6:15 pm', name: 'Kinstretch', where: 'Yoga Studio', who: 'Jimmy Guerrero' },
      { time: '5:30 pm – 6:15 pm', name: 'Functional Training', where: 'Group Ex Room', who: 'Ben Hawkinson' },
      { time: '6:30 pm – 7:20 pm', name: 'Boxing', where: 'Group Ex Room', who: 'Fernando Russo' },
      { time: '7:30 pm – 8:30 pm', name: 'Iyengar Yoga', where: 'Yoga Studio', who: 'Yasmin Shirangi' },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '7:30 am – 8:15 am', name: 'Functional Training', where: 'Group Ex Room', who: 'Ben Hawkinson' },
      { time: '8:30 am – 9:15 am', name: 'Strength & Conditioning', where: 'Group Ex Room', who: 'Bastien Hattiger' },
      { time: '12 pm – 12:50 pm', name: 'TRX', where: 'Group Ex Room', who: 'Jeff Wells' },
      { time: '4:30 pm – 5:15 pm', name: 'Guided Breathwork', where: 'Yoga Studio', who: 'Jackson Lynch' },
      { time: '5 pm – 6 pm', name: 'Swim Workout', where: 'Lap Pool', who: 'Triniti Santos' },
      { time: '5:30 pm – 6:15 pm', name: 'HIIT', where: 'Group Ex Room', who: 'Jimmy Guerrero' },
      { time: '6:15 pm – 7:15 pm', name: 'Vinyasa Flow', where: 'Yoga Studio', who: 'Sophie Clemo' },
      { time: '6:30 pm – 7:20 pm', name: 'Cycling', where: 'Cycling Studio', who: 'Bernard Baski' },
      { time: '6:30 pm – 7:15 pm', name: 'Strength & Conditioning', where: 'Group Ex Room', who: 'Sevdi Simnica' },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { time: '8 am – 8:45 am', name: 'HIIT', where: 'Group Ex Room', who: 'Jimmy Guerrero' },
      { time: '12 pm – 1 pm', name: 'Swim Workout', where: 'Lap Pool', who: 'Cassaundra Pino' },
      { time: '12:30 pm – 1:15 pm', name: 'HIIT', where: 'Group Ex Room', who: 'Jimmy Guerrero' },
      { time: '1 pm – 2 pm', name: 'Vinyasa Flow', where: 'Yoga Studio', who: 'Sophie Clemo' },
      { time: '5:30 pm – 6:15 pm', name: 'Kinstretch', where: 'Yoga Studio', who: 'Jimmy Guerrero' },
      { time: '5:30 pm – 6:15 pm', name: 'Functional Training', where: 'Group Ex Room', who: 'Ben Hawkinson' },
      { time: '6 pm – 9 pm', name: 'Squash Round Robin', where: 'Squash Courts', who: '' },
      { time: '6:30 pm – 7:20 pm', name: 'Boxing', where: 'Group Ex Room', who: 'Fernando Russo' },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '6:30 am – 7:30 am', name: 'Ocean Swim', where: 'Tower 26', who: 'Cassaundra Pino' },
      { time: '7:30 am – 8:15 am', name: 'Functional Training', where: 'Group Ex Room', who: 'Aaron Newton' },
      { time: '12 pm – 12:50 pm', name: 'Cycling', where: 'Cycling Studio', who: 'Jeff Wells' },
      { time: '1 pm – 2 pm', name: 'Destress Yoga', where: 'Yoga Studio', who: 'Steve Jones' },
      { time: '5 pm – 5:45 pm', name: 'Strength & Conditioning', where: 'Group Ex Room', who: 'Bastien Hattiger' },
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { time: '9:30 am – 10:15 am', name: 'HIIT', where: 'Group Ex Room', who: 'Aaron Newton' },
      { time: '10:30 am – 11:20 am', name: 'Cycling', where: 'Cycling Studio', who: 'Bernard Baski' },
      { time: '11 am – 12 pm', name: 'Iyengar Yoga', where: 'Yoga Studio', who: 'Yasmin Shirangi' },
    ],
  },
  {
    day: 'Sunday',
    slots: [
      { time: '9 am – 12 pm', name: 'Squash Round Robin', where: 'Squash Courts', who: '' },
      { time: '9:30 am – 10:15 am', name: 'HIIT', where: 'Group Ex Room', who: 'Aaron Newton' },
      { time: '10:30 am – 11:20 am', name: 'Cycling', where: 'Cycling Studio', who: 'Tiffani Carter' },
    ],
  },
]

/** Total sessions on the weekly timetable, computed rather than asserted. */
export const weeklySessionCount = schedule.reduce((n, day) => n + day.slots.length, 0)
