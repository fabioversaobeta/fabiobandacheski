import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { ThemeToggle } from "../ui/ThemeToggle";
import { siteConfig } from "../../config/site";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-ink-50/80 backdrop-blur-md dark:border-ink-800/70 dark:bg-ink-950/80">
      <Container className="flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="text-base font-semibold tracking-tight text-ink-900 transition-colors hover:text-accent-600 dark:text-ink-50 dark:hover:text-accent-400"
          onClick={() => setOpen(false)}
        >
          {siteConfig.shortName}
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                clsx(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-accent-600 dark:text-accent-400"
                    : "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={clsx(
          "grid overflow-hidden border-t border-ink-200/70 bg-ink-50 transition-[grid-template-rows] duration-300 ease-out dark:border-ink-800/70 dark:bg-ink-950 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-accent-50 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300"
                      : "text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </Container>
        </div>
      </nav>
    </header>
  );
}
