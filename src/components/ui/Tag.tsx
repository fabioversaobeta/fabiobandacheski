import type { ReactNode } from "react";
import clsx from "clsx";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300",
        className
      )}
    >
      {children}
    </span>
  );
}
