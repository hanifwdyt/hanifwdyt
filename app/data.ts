import { SocialLink, JourneyYear, Belief } from './types';

export const bio = {
  name: "Hanif Tri Widiyanto",
  intro: "A person who questions everything"
};

export const beliefs: Belief[] = [
  {
    title: "Long game: direction > speed",
    points: [
      "Know where you're going first",
      "Right path saves you tons of time",
      "Less distraction, more progress",
      "Slow and aimed beats fast and lost"
    ]
  },
  {
    title: "Short game: ship fast, think less",
    points: [
      "Overthinking = fear",
      "Action gives you answers",
      "Done is better than perfect",
      "Speed unlocks clarity"
    ]
  },
  {
    title: "Consistency is investing in yourself",
    points: [
      "Daily reps compound over time",
      "Make it fun, not a chore",
      "Show up, let the results follow"
    ]
  },
  {
    title: "Time & attention > everything",
    points: [
      "Attention is the real currency — Naval Ravikant",
      "Productive mind pays the best returns",
      "Measure everything against your time",
      "Procrastinating = wasting your money"
    ]
  }
];

export const experience = [
  { tech: "TypeScript", context: "Building scalable systems" },
  { tech: "React & Next.js", context: "Modern web applications" },
  { tech: "Python", context: "Data processing & automation" },
  { tech: "System Design", context: "Architecture & patterns" },
  { tech: "Local-first Apps", context: "Offline-capable experiences" }
];

export const books = [
  { title: "Deep Work", author: "Cal Newport", year: "2025" },
  { title: "The Design of Everyday Things", author: "Don Norman", year: "2024" },
  { title: "Atomic Habits", author: "James Clear", year: "2024" },
  { title: "Sapiens", author: "Yuval Noah Harari", year: "2023" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: "2023" },
  { title: "The Lean Startup", author: "Eric Ries", year: "2022" }
];

export const journey: JourneyYear[] = [
  {
    year: "2016",
    events: [
      "Finished high school",
      "Started gap year to figure things out"
    ]
  },
  {
    year: "2017",
    events: [
      "Volunteered at Teras Cerdas",
      "Learned HTML",
      "Got curious about blockchain"
    ]
  },
  {
    year: "2018",
    events: [
      "Got into public university (Educational Technology)",
      "Landed first client"
    ]
  },
  {
    year: "2019",
    events: [
      "Joined agency for project-based client work"
    ]
  },
  {
    year: "2020",
    events: [
      "Started learning React and Express"
    ]
  },
  {
    year: "2021",
    events: [
      "Interned as Educational Technologist at BPSDM DKI Jakarta"
    ]
  },
  {
    year: "2022",
    events: [
      "Built major project as final contribution to Teras Cerdas"
    ]
  },
  {
    year: "2023",
    events: [
      "Got first job as professional software engineer",
      "Graduated from university"
    ]
  },
  {
    year: "2024",
    events: [
      "Participated in first hackathon"
    ]
  },
  {
    year: "2025",
    events: [
      "Learning infrastructure",
      "Training for half marathon 2026"
    ]
  }
];

export const currentlyListening = [
  { title: "Weightless", artist: "Marconi Union" },
  { title: "Clair de Lune", artist: "Claude Debussy" },
  { title: "Avril 14th", artist: "Aphex Twin" }
];

export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/hanifwdyt",
    handle: "@hanifwdyt"
  },
  {
    name: "GitHub",
    url: "https://github.com/hanifwdyt",
    handle: "hanifwdyt"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/haniftwd",
    handle: "@haniftwd"
  },
  {
    name: "Email",
    url: "mailto:hanifwidiyanto12@gmail.com",
    handle: "hanifwidiyanto12@gmail.com"
  }
];
