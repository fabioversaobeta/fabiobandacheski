import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/github-dark.min.css";
import { Seo } from "../components/seo/Seo";
import { Container } from "../components/ui/Container";
import { Tag } from "../components/ui/Tag";
import { getPostBySlug, formatDate } from "../lib/posts";
import { rehypeCodeHighlight } from "../lib/rehype-code-highlight";
import { siteConfig } from "../config/site";
import { NotFound } from "./NotFound";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        tags={post.tags}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: siteConfig.name,
          },
          url: `${siteConfig.url}/blog/${post.slug}`,
        }}
      />

      <Container as="article" className="py-16 sm:py-20">
        <Link
          to="/blog"
          className="text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
        >
          &larr; Back to blog
        </Link>

        <header className="mt-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-ink-500 dark:text-ink-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <div className="prose prose-ink mt-10 max-w-3xl prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-accent-600 dark:prose-invert dark:prose-a:text-accent-400">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, rehypeCodeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </Container>
    </>
  );
}
