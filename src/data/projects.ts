export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
}

// Projects will be added here as they're published.
export const projects: Project[] = [];
