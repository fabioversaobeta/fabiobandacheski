import { Seo } from "../components/seo/Seo";
import { Container } from "../components/ui/Container";
import { Tag } from "../components/ui/Tag";
import { siteConfig } from "../config/site";
import { skillGroups } from "../data/skills";

const PRINCIPLES = [
  {
    title: "Ship, then refine",
    body: "I favor working software over speculative architecture — get something real in front of users, then iterate with data instead of guesses.",
  },
  {
    title: "Readable over clever",
    body: "Code is read far more often than it's written. I optimize for the next engineer (often future me) who has to change it under time pressure.",
  },
  {
    title: "Own the whole stack",
    body: "From database schema to the pixel on screen, I care about how each layer affects the others — performance, security, and UX included.",
  },
];

export function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description={`Learn more about ${siteConfig.name}, a Full Stack Software Engineer working with PHP, Node.js, React, and Vue.`}
      />

      <Container as="section" className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            About
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
            I'm {siteConfig.name}, a Full Stack Software Engineer.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">
            <p>
              I build web applications end to end — designing backend services in PHP and Node.js,
              and pairing them with interfaces in React and Vue. I like projects where I can move
              across the stack: shaping the data model, wiring up the API, and polishing the
              interface that people actually touch.
            </p>
            <p>
              My focus is on writing code that holds up over time — clear, tested, and easy for a
              team to build on. I pay close attention to performance and accessibility, not as an
              afterthought, but as part of how a feature is built from day one.
            </p>
            <p>
              Outside of client and product work, I like digging into new tools, contributing notes
              back through the <a href="/blog" className="font-medium text-accent-600 underline-offset-4 hover:underline dark:text-accent-400">blog</a> on
              this site, and refining my own workflow.
            </p>
          </div>
        </div>
      </Container>

      <Container as="section" className="border-t border-ink-200/70 py-16 dark:border-ink-800/70">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
          How I work
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/40">
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{principle.body}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className="border-t border-ink-200/70 py-16 dark:border-ink-800/70">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
          Skills &amp; tools
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
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
      </Container>
    </>
  );
}
