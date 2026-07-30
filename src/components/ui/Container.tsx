import type { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={clsx("mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8", className)}>{children}</Tag>;
}
