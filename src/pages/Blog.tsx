import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { Container } from "../components/ui/Container";
import { Tag } from "../components/ui/Tag";
import { getAllPosts, formatDate } from "../lib/posts";
import { siteConfig } from "../config/site";

export function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Seo
        title="Blog"
        path="/blog"
        description={`Writing from ${siteConfig.name} on software engineering, PHP, Node.js, React, and Vue.`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${siteConfig.name} — Blog`,
          url: `${siteConfig.url}/blog`,
        }}
      />

      <Container as="section" className="py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Blog
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
          Notes &amp; writing
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
          Occasional posts on things I run into building software — no fixed schedule, just
          whatever seems worth writing down.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-ink-500 dark:text-ink-400">No posts yet — check back soon.</p>
        ) : (
          <ul className="mt-12 flex flex-col divide-y divide-ink-200 dark:divide-ink-800">
            {posts.map((post) => (
              <li key={post.slug} className="py-8 first:pt-0">
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-ink-500 dark:text-ink-400">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-ink-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {post.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
