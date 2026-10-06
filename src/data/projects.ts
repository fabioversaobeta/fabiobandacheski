export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "repertorio",
    title: "Repertório",
    description:
      "Repertoire manager for bands: members share a song library, build setlists and keep everyone in sync, with invite codes, admin approval and push notifications.",
    stack: ["Next.js", "React", "tRPC", "Prisma", "PostgreSQL", "Tailwind CSS", "Turborepo"],
    url: "https://www.musicalrepertory.com/",
    featured: true,
  },
  {
    slug: "learning-english-words",
    title: "English Learning App",
    description:
      "Learn English while studying other subjects: pick a topic, get a Claude-generated text, select the words you don't know and receive English definitions and PT-BR translations.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Claude API"],
    url: "https://learning-english-words-liart.vercel.app/",
    featured: true,
  },
  {
    slug: "family-finance",
    title: "Family Finance",
    description:
      "Household finance app with a monthly view of income, expenses, fixed bills and credit cards, showing how much is still left to spend. Data is shared by all household members.",
    stack: ["Laravel", "Vue 3", "TypeScript", "Pinia", "MySQL", "Redis"],
  },
  {
    slug: "talking-in-english",
    title: "Talking in English",
    description:
      "Speaking practice with AI: hold voice conversations with customizable personas, get instant grammar feedback and review saved transcripts and practice stats.",
    stack: ["React", "TypeScript", "Express", "SQLite", "Claude API", "Tailwind CSS"],
  },
  {
    slug: "studying-artificial-intelligence",
    title: "Learning Platform",
    description:
      "Personal learning and career platform with goals, learning paths, study sessions, spaced repetition and gamification (XP, streaks, achievements), evolving toward AI-assisted adaptive learning.",
    stack: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "Tailwind CSS"],
  },
];
