export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Vue", "Tailwind CSS", "Vite", "Redux/Pinia", "Accessibility (a11y)"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Laravel", "REST APIs", "GraphQL", "Authentication & Auth"],
  },
  {
    category: "Data & Infrastructure",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "CI/CD"],
  },
  {
    category: "Practices",
    items: ["Testing (Unit/E2E)", "Performance Optimization", "SEO", "Agile/Scrum", "Code Review"],
  },
];
