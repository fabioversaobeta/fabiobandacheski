export const siteConfig = {
  name: "Fabio Bandacheski",
  title: "Fabio Bandacheski — Software Engineer",
  shortName: "Fabio Bandacheski",
  role: "Software Engineer",
  tagline: "Full Stack Software Engineer building fast, reliable web products.",
  description:
    "Portfolio and blog of Fabio Bandacheski, a Full Stack Software Engineer specializing in PHP, Node.js, React and Vue. Projects, writing, and notes on modern web engineering.",
  url: "https://fabiobandacheski.com",
  locale: "en_US",
  email: "fabio.versao.beta@gmail.com",
  social: {
    github: "https://github.com/fabioversaobeta",
    linkedin: "https://www.linkedin.com/in/fabiobandacheski",
  },
  keywords: [
    "Fabio Bandacheski",
    "Software Engineer",
    "Full Stack Developer",
    "PHP Developer",
    "Node.js Developer",
    "React Developer",
    "Vue Developer",
    "Web Development",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
