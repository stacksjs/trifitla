/*
 * The blog index.
 *
 * Posts are real TRIFIT LA posts, ported with their original publication
 * dates and featured images. Each post lives at /blog/<slug> as its own page;
 * this module is the index those pages and the listing share, so a post's
 * date, image, and neighbours are stated once.
 */

export interface Post {
  slug: string
  title: string
  /** ISO date, as published. */
  date: string
  /** Same date, written out for display. */
  dateLabel: string
  excerpt: string
  image: string
  alt: string
  /** Rough read time in minutes, rounded from the word count. */
  minutes: number
  topic: string
}

export const posts: Post[] = [
  {
    slug: 'why-everyone-in-fitness-is-obsessed-with-saunas-right-now',
    title: 'Why everyone in fitness is obsessed with saunas right now',
    date: '2026-05-19',
    dateLabel: '19 May 2026',
    topic: 'Recovery',
    minutes: 4,
    excerpt: 'Walk into almost any high-end gym or recovery studio in Los Angeles right now and everyone is talking about saunas. Here is what the heat actually does, and what it does not.',
    image: '/images/trifit/blog-saunas.jpg',
    alt: 'The sauna at TRIFIT LA',
  },
  {
    slug: 'how-to-maintain-muscle-while-using-glp-1-weight-loss-medications',
    title: 'How to maintain muscle while using GLP-1 weight loss medications',
    date: '2026-05-06',
    dateLabel: '6 May 2026',
    topic: 'Training',
    minutes: 5,
    excerpt: 'GLP-1 medications work, and the weight comes off. The problem is what comes off with it. Here is how to protect lean mass while you lose fat.',
    image: '/images/trifit/blog-glp1.jpg',
    alt: 'A member training with dumbbells at TRIFIT LA',
  },
  {
    slug: 'gym-anxiety-is-real-heres-how-to-get-over-it',
    title: 'Gym anxiety is real. Here is how to get over it.',
    date: '2026-04-17',
    dateLabel: '17 April 2026',
    topic: 'Community',
    minutes: 5,
    excerpt: 'For a lot of people, walking into a gym does not feel motivating. It feels intimidating. That is far more common than the fitness industry admits.',
    image: '/images/trifit/blog-gym-anxiety.jpg',
    alt: 'Members training together on the floor at TRIFIT LA',
  },
  {
    slug: 'local-gym-vs-big-box-gym',
    title: 'Local gym vs big box gym: which is better for results?',
    date: '2026-04-02',
    dateLabel: '2 April 2026',
    topic: 'Choosing a gym',
    minutes: 4,
    excerpt: 'In Los Angeles you have no shortage of options. Both models can work. But if your priority is results, the training environment matters more than most people realise.',
    image: '/images/trifit/lobby.jpg',
    alt: 'The lobby and front desk at TRIFIT LA',
  },
  {
    slug: 'personal-training-vs-group-fitness',
    title: 'Personal training vs group fitness: which one gets better results?',
    date: '2026-04-02',
    dateLabel: '2 April 2026',
    topic: 'Training',
    minutes: 3,
    excerpt: 'One-to-one coaching or a room full of people doing the same thing. They solve different problems, and the honest answer for most people is not one or the other.',
    image: '/images/trifit/blog-personal-training.jpg',
    alt: 'A trainer coaching a member through a lift at TRIFIT LA',
  },
  {
    slug: 'march-madness-basketball',
    title: 'March Madness basketball presented by TRIFIT LA',
    date: '2026-03-24',
    dateLabel: '24 March 2026',
    topic: 'Community',
    minutes: 2,
    excerpt: 'A free community basketball event at Colorado Center Park, open to every skill level. This is the kind of thing an independent club can just decide to do.',
    image: '/images/trifit/blog-march-madness.jpg',
    alt: 'The basketball court at Colorado Center Park',
  },
  {
    slug: 'ai-workouts-vs-personal-training',
    title: 'AI workouts vs personal training: what technology cannot replace',
    date: '2026-03-12',
    dateLabel: '12 March 2026',
    topic: 'Training',
    minutes: 3,
    excerpt: 'An app can write you a programme in seconds. It cannot see your left knee caving on rep seven, and that is the whole argument.',
    image: '/images/trifit/blog-ai-workouts.jpg',
    alt: 'A coach watching a member’s form during a set',
  },
  {
    slug: 'choosing-a-gym-in-santa-monica',
    title: 'Choosing a gym in Santa Monica: 7 things that matter',
    date: '2026-02-26',
    dateLabel: '26 February 2026',
    topic: 'Choosing a gym',
    minutes: 4,
    excerpt: 'Most people do not quit the gym because the equipment was wrong. They quit because of friction they could have predicted on the tour.',
    image: '/images/trifit/blog-choosing-a-gym.jpg',
    alt: 'The training floor at TRIFIT LA',
  },
  {
    slug: 'hyrox-training-in-santa-monica',
    title: 'HYROX training in Santa Monica: what it is and why it is exploding',
    date: '2026-02-19',
    dateLabel: '19 February 2026',
    topic: 'Training',
    minutes: 3,
    excerpt: 'Eight runs, eight functional stations, one clock. HYROX has pulled in everyone from serious endurance athletes to people who have never raced anything.',
    image: '/images/trifit/blog-hyrox.jpg',
    alt: 'Functional training equipment set up for HYROX-style work',
  },
  {
    slug: 'the-power-of-the-seca-medical-body-composition-machine',
    title: 'The power of the seca medical body composition machine',
    date: '2026-02-05',
    dateLabel: '5 February 2026',
    topic: 'Testing',
    minutes: 3,
    excerpt: 'The scale tells you one number and hides four. Medical-grade body composition analysis separates the fat, the muscle, and the water.',
    image: '/images/trifit/seca-body-composition.jpg',
    alt: 'The seca medical body composition analyser at TRIFIT LA',
  },
  {
    slug: 'new-year-new-goals-2026-workout-motivation-guide',
    title: 'New year, new goals: your 2026 workout motivation guide',
    date: '2026-01-02',
    dateLabel: '2 January 2026',
    topic: 'Training',
    minutes: 3,
    excerpt: 'January motivation is easy and worthless. What you need is a plan that still works in March, when the novelty has gone.',
    image: '/images/trifit/blog-new-year.jpg',
    alt: 'Members training at TRIFIT LA at the start of the year',
  },
  {
    slug: 'the-power-of-recovery',
    title: 'The power of recovery: unlock peak performance',
    date: '2025-11-20',
    dateLabel: '20 November 2025',
    topic: 'Recovery',
    minutes: 3,
    excerpt: 'You do not get fitter during the workout. You get fitter afterwards, if you let your body do the work. Here is how the club is built for that.',
    image: '/images/trifit/blog-recovery.jpg',
    alt: 'Recovery equipment at TRIFIT LA',
  },
  {
    slug: 'vo2-max-the-number-one-indicator-of-health-and-longevity',
    title: 'VO₂ max: the number one indicator of your health and longevity',
    date: '2025-11-06',
    dateLabel: '6 November 2025',
    topic: 'Testing',
    minutes: 3,
    excerpt: 'Of everything you can measure about your body, one number predicts how long you will live better than almost any other. It is also trainable.',
    image: '/images/trifit/blog-vo2-max.jpg',
    alt: 'VO₂ max testing at TRIFIT LA',
  },
]

/** Newest first, which is the order the index and the post navigation use. */
export const postsByDate = [...posts].sort((a, b) => b.date.localeCompare(a.date))

export function postIndex(slug: string): number {
  return postsByDate.findIndex(p => p.slug === slug)
}

export function neighbours(slug: string): { prev: Post | null, next: Post | null } {
  const i = postIndex(slug)
  if (i === -1)
    return { prev: null, next: null }

  return {
    // "Previous" reads as older, which is the direction a reader expects.
    prev: postsByDate[i + 1] ?? null,
    next: postsByDate[i - 1] ?? null,
  }
}

export function articleJsonLd(post: Post, siteUrl: string): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${siteUrl}${post.image}`,
    author: { '@type': 'Organization', name: 'TRIFIT LA', url: `${siteUrl}/` },
    publisher: { '@type': 'Organization', name: 'TRIFIT LA', url: `${siteUrl}/` },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  })
}
