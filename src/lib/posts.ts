import { parseFrontmatter } from "./frontmatter";

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingTime: number;
}

const modules = import.meta.glob<string>("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

function loadPosts(): Post[] {
  const posts: Post[] = [];

  for (const [path, raw] of Object.entries(modules)) {
    const { data, content } = parseFrontmatter(raw);
    const frontmatter = data as unknown as PostFrontmatter;

    if (frontmatter.draft && import.meta.env.PROD) continue;

    posts.push({
      ...frontmatter,
      slug: slugFromPath(path),
      content,
      readingTime: estimateReadingTime(content),
    });
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

const allPosts = loadPosts();

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of allPosts) {
    for (const tag of post.tags) tags.add(tag);
  }
  return Array.from(tags).sort();
}

export function formatDate(date: string): string {
  // Format the plain YYYY-MM-DD as UTC so the displayed date doesn't shift
  // backward a day for readers in timezones behind UTC.
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
