import { Seo } from "../components/seo/Seo";
import { Container } from "../components/ui/Container";
import { siteConfig } from "../config/site";

const CHANNELS = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best way to reach me for work inquiries or questions.",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.social.linkedin,
    description: "For professional updates and networking.",
  },
  {
    label: "GitHub",
    value: "See my code",
    href: siteConfig.social.github,
    description: "Where most of my public work lives.",
  },
];

export function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description={`Get in touch with ${siteConfig.name} via email, LinkedIn, or GitHub.`}
      />

      <Container as="section" className="py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Contact
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
          Let's talk
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
          Have a project in mind, a question, or just want to connect? Reach out through any of
          the channels below.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CHANNELS.map((channel) => {
            const external = !channel.href.startsWith("mailto:");
            return (
              <div
                key={channel.label}
                className="relative flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-ink-800 dark:bg-ink-900/40"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-ink-600 dark:text-ink-400">
                  {channel.label}
                </span>
                <a
                  href={channel.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer noopener" : undefined}
                  className="mt-2 text-lg font-semibold text-ink-900 after:absolute after:inset-0 hover:text-accent-600 dark:text-white dark:hover:text-accent-400 focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent-500"
                >
                  {channel.value}
                  {external && <span className="sr-only"> (opens in new tab)</span>}
                </a>
                <span className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                  {channel.description}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
