/*
 * The people. Bios are the ones the club publishes, lightly trimmed for
 * length where a sentence repeated itself. Nobody here is invented, and no
 * headshot stands in for a different person.
 */

export interface Person {
  name: string
  role: string
  image: string
  alt: string
  bio: string
  /** Founders are shown first, in their own row. */
  founder?: boolean
}

export const founders: Person[] = [
  {
    name: 'Gina Baski',
    role: 'Founder and managing partner',
    image: '/images/trifit/team-gina-baski.jpg',
    alt: 'Gina Baski, founder and managing partner of TRIFIT LA',
    founder: true,
    bio: 'Gina\'s athletic roots began in her early years as a gymnast and competitive swimmer. In her twenties she worked as an adjunct college professor and senior technical writer in San Diego. Shortly after meeting Bernard she left for LA to pursue her lifelong dream of becoming a health and fitness professional. Alongside running TRIFIT, she sits on the board of the California Fitness Alliance. She has competed in Ironman triathlons and various multi-sport races — training and racing give her balance, enjoyment, and a sanctuary from the craziness of running a business while raising a family.',
  },
  {
    name: 'Bernard Baski',
    role: 'Founder',
    image: '/images/trifit/team-bernard-baski.jpg',
    alt: 'Bernard Baski, founder of TRIFIT LA',
    founder: true,
    bio: 'Sport and fitness have always been at the centre of Bernard\'s life, beginning with fifteen years of amateur and professional hockey training under some of Canada\'s top coaches. Wanting to help other young players excel was the turning point of his career, and it took him into coaching at one of Canada\'s most internationally renowned training camps. Over time that same passion moved into endurance sport, where his experience in aerobic, anaerobic, and strength training has helped athletes at every level.',
  },
]

export const team: Person[] = [
  {
    name: 'Sevdi Simnica',
    role: 'Personal training',
    image: '/images/trifit/team-sevdi-simnica.jpg',
    alt: 'Sevdi Simnica, personal trainer at TRIFIT LA',
    bio: 'Sevdi is from Yonkers, New York, and moved to LA a couple of years ago. She found her love for fitness in college and has been training and educating herself in the industry for over seven years. She is ISSA certified in personal training and strength and conditioning, and she is as interested in nutrition and daily habits outside the gym as she is in what happens inside it. Fitness is not one size fits all — together you can cut through the noise and work out what is best for you.',
  },
  {
    name: 'Aaron Newton',
    role: 'Personal training and group fitness',
    image: '/images/trifit/team-aaron-newton.jpg',
    alt: 'Aaron Newton, trainer and group fitness instructor at TRIFIT LA',
    bio: 'Aaron is originally from Portland, Oregon, and has had a passion for sport his whole life. With two athlete parents he was put into football and basketball young and played competitively through high school. He moved to Los Angeles a couple of years ago and started his fitness career right here at TRIFIT — first on the front desk, then earning his ISSA personal training certification, and he has been teaching classes and training members ever since. His focus is on getting lifting form right.',
  },
  {
    name: 'Jimmy Guerrero',
    role: 'Personal training and group fitness',
    image: '/images/trifit/team-jimmy-guerrero.jpg',
    alt: 'Jimmy Guerrero, trainer and group fitness instructor at TRIFIT LA',
    bio: 'Competing in soccer, BJJ, and wrestling in his youth, Jimmy has had a passion for movement his entire life. After majoring in kinesiology with a focus in exercise science at CSUN, he worked in several physical therapy clinics across LA. He believes in a balanced approach — mobility and strength together — and in a training experience that is genuinely enjoyable. Outside the gym you will find him trail running, hiking, backpacking, and travelling.',
  },
  {
    name: 'Ben Hawkinson',
    role: 'Personal training and group fitness',
    image: '/images/trifit/team-ben-hawkinson.jpg',
    alt: 'Ben Hawkinson, trainer and group fitness instructor at TRIFIT LA',
    bio: 'Born and raised in California, Ben has always been drawn to being active outdoors, and his own path as an athlete led him into sports performance, strength training, and corrective exercise. He has a degree in exercise science and is certified as a strength coach, movement specialist, and holistic lifestyle coach. His classes focus on proper technique and range of motion, blending mobility with strength to balance out the daily grind of being a modern human.',
  },
  {
    name: 'Hunter Jakupko',
    role: 'Personal training and group fitness',
    image: '/images/trifit/team-hunter-jakupko.jpg',
    alt: 'Hunter Jakupko, trainer and group fitness instructor at TRIFIT LA',
    bio: 'Originally from Manasquan, New Jersey, Hunter relocated to Santa Monica a few years ago. He specialises in functional training and works calisthenics into his sessions. A vegetarian since birth, he follows a lacto-ovo plant-based diet, and with a bachelor\'s degree in nutrition and food science his aim is to show clients how to eat well without sacrificing progress.',
  },
  {
    name: 'Yasmin Shirangi',
    role: 'Yoga',
    image: '/images/trifit/team-yasmin-shirangi.jpg',
    alt: 'Yasmin Shirangi, yoga instructor at TRIFIT LA',
    bio: 'Yasmin was introduced to Iyengar yoga in 2008 at the Iyengar Yoga Institute of Tehran, and was drawn in by the technicality and precision of the method and by the fact that it is an ever-evolving path. She began teaching in 2016 and has studied with senior teachers in several countries, learning sequencing methods she now shares with her students to give each of them individual guidance.',
  },
  {
    name: 'Steve Jones',
    role: 'Yoga',
    image: '/images/trifit/team-steve-jones.jpg',
    alt: 'Steve Jones, yoga instructor at TRIFIT LA',
    bio: 'Steve is an ERYT-500 certified yoga instructor who has been teaching classes, workshops, retreats, and teacher trainings for fifteen years. He focuses heavily on mindful breathing while strengthening and opening the body safely, with close attention to technique and alignment. He will remind you to breathe deeply and encourage you to listen to your body, so each class becomes a sweetly challenging journey into self-awareness.',
  },
  {
    name: 'Moses Wolfe-Polgar',
    role: 'Performance coaching',
    image: '/images/trifit/team-moses-wolfe-polgar.jpg',
    alt: 'Moses Wolfe-Polgar, performance coach at TRIFIT LA',
    bio: 'Moses is a former USAT All-American triathlete with degrees in biochemistry and exercise science. He designs endurance programmes that optimise performance, injury prevention, and enjoyment, while making sure they work inside the wider context of his athletes\' lives.',
  },
]

export const allPeople: Person[] = [...founders, ...team]
