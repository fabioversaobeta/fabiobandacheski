import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { Container } from "../components/ui/Container";

export function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" noindex />
      <Container as="section" className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-ink-600 dark:text-ink-300">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700"
        >
          Back to home
        </Link>
      </Container>
    </>
  );
}
