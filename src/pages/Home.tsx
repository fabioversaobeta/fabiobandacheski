import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { Container } from "../components/ui/Container";
import { Tag } from "../components/ui/Tag";
import { siteConfig } from "../config/site";
import { skillGroups } from "../data/skills";
import { getAllPosts, formatDate } from "../lib/posts";

const HIGHLIGHTS = [
  { label: "Focus", value: "Full Stack" },
  { label: "Backend", value: "PHP & Node.js" },
  { label: "Frontend", value: "React & Vue" },
  { label: "Priorities", value: "Performance & a11y" },
];

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
          image: `${siteConfig.url}/fabio.jpg`,
          sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
        }}
      />

      {/* Hero banner */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_85%_-10%,theme(colors.accent.600/0.55),transparent_60%),radial-gradient(40rem_30rem_at_-10%_110%,theme(colors.accent.800/0.6),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-accent-100 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {siteConfig.role}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I'm {siteConfig.name.split(" ")[0]}.
              <span className="mt-2 block bg-gradient-to-r from-accent-200 via-accent-300 to-sky-300 bg-clip-text text-transparent">
                I build reliable full-stack web products.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              I'm a Full Stack Software Engineer working across PHP, Node.js, React, and Vue —
              from backend architecture to polished, accessible interfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-ink-100 backdrop-blur"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-accent-900/40 transition hover:-translate-y-0.5 hover:bg-accent-50"
              >
                View my projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-fade-in lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent-500/50 via-sky-400/20 to-transparent blur-2xl"
            />
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-ink-900 p-2 shadow-2xl shadow-black/50">
              <img
                src="/fabio.jpg"
                alt={`Portrait of ${siteConfig.name}`}
                width={1050}
                height={1400}
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/15 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-6">
              <p className="text-xl font-semibold leading-none">Full Stack</p>
              <p className="mt-1 text-xs text-ink-300">PHP · Node · React · Vue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10">
        <Container>
          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 shadow-sm sm:-mt-8 lg:grid-cols-4 dark:border-ink-800 dark:bg-ink-800">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="bg-white px-5 py-5 dark:bg-ink-900">
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-500 dark:text-ink-400">
                  {item.label}
                </dt>
                <dd className="mt-1 text-base font-semibold text-ink-900 dark:text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Skills overview */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
            What I work with
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-ink-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg hover:shadow-accent-500/10 dark:border-ink-800 dark:bg-ink-900/40 dark:hover:border-accent-700"
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
        <section className="pb-16">
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
                  className="relative flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900/40"
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

      {/* Closing CTA */}
      <section className="pb-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-700 via-accent-600 to-ink-900 px-8 py-12 text-center text-white sm:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl"
            />
            <h2 className="relative text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-accent-100">
              Let's talk about how I can help you build something fast, reliable and accessible.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:bg-accent-50"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
