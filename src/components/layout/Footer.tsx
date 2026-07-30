import { Container } from "../ui/Container";
import { siteConfig } from "../../config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200/70 dark:border-ink-800/70">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-ink-600 sm:flex-row sm:justify-between dark:text-ink-400">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-ink-900 dark:hover:text-ink-50"
          >
            GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-ink-900 dark:hover:text-ink-50"
          >
            LinkedIn
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-ink-900 dark:hover:text-ink-50"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
