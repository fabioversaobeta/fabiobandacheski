import { Seo } from "../components/seo/Seo";
import { Container } from "../components/ui/Container";
import { Tag } from "../components/ui/Tag";
import { projects } from "../data/projects";
import { siteConfig } from "../config/site";

export function Projects() {
  return (
    <>
      <Seo
        title="Projects"
        path="/projects"
        description={`A selection of projects built by ${siteConfig.name}.`}
      />

      <Container as="section" className="py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Projects
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
          Things I've built
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
          A selection of projects I've worked on, spanning full-stack apps, APIs, and interfaces.
        </p>

        {projects.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-ink-300 bg-white/50 p-10 text-center dark:border-ink-700 dark:bg-ink-900/30">
            <h2 className="text-lg font-semibold text-ink-800 dark:text-ink-100">
              New projects are on the way
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-600 dark:text-ink-400">
              I'm currently preparing case studies for this section. Check back soon, or take a
              look at my{" "}
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-accent-600 underline-offset-4 hover:underline dark:text-accent-400"
              >
                GitHub
                <span className="sr-only"> (opens in new tab)</span>
              </a>{" "}
              in the meantime.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/40"
              >
                <h2 className="text-lg font-semibold text-ink-900 dark:text-white">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-4 text-sm font-semibold">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
                    >
                      Live site &rarr;
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
                    >
                      Source &rarr;
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
