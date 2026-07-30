import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { Container } from "../components/ui/Container";
import { Tag } from "../components/ui/Tag";
import { siteConfig } from "../config/site";
import { skillGroups } from "../data/skills";
import { getAllPosts, formatDate } from "../lib/posts";

export function Home() {
  const latestPosts = getAllPosts().slice(0, 3);
  const coreStack = ["PHP", "Node.js", "React", "Vue", "TypeScript"];

  return (
    <>
      <Seo
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
          jobTitle: siteConfig.role,
          email: siteConfig.email,
          sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,theme(colors.accent.100),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,theme(colors.accent.900/0.35),transparent_60%)]"
        />
        <Container>
          <div className="max-w-2xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              {siteConfig.role}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl dark:text-white">
              Hi, I'm {siteConfig.name.split(" ")[0]}.
              <br />I build reliable full-stack web products.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              I'm a Full Stack Software Engineer working across PHP, Node.js, React, and Vue —
              from backend architecture to polished, accessible interfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700"
              >
                View my projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-ink-300 px-6 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400 hover:bg-ink-100 dark:border-ink-700 dark:text-ink-100 dark:hover:bg-ink-800"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills overview */}
      <section className="border-t border-ink-200/70 py-16 dark:border-ink-800/70">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
            What I work with
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/40"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-600 dark:text-ink-400">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/about"
              className="text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
            >
              More about my background &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Latest posts */}
      {latestPosts.length > 0 && (
        <section className="border-t border-ink-200/70 py-16 dark:border-ink-800/70">
          <Container>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                From the blog
              </h2>
              <Link
                to="/blog"
                className="text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <div
                  key={post.slug}
                  className="relative flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-ink-800 dark:bg-ink-900/40"
                >
                  <time dateTime={post.date} className="text-xs font-medium text-ink-600 dark:text-ink-400">
                    {formatDate(post.date)}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900 dark:text-white">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0 hover:text-accent-600 dark:hover:text-accent-400 focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent-500"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-600 dark:text-ink-300">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
