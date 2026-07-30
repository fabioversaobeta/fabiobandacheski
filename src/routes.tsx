import type { RouteRecord } from "vite-react-ssg";
import { RootLayout } from "./components/layout/RootLayout";
import { Home } from "./pages/Home";
import { getAllPosts } from "./lib/posts";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    entry: "src/components/layout/RootLayout.tsx",
    children: [
      // Home is rendered eagerly: it's the most common landing page and
      // keeping it in the main chunk avoids an extra round-trip on first paint.
      { index: true, element: <Home />, entry: "src/pages/Home.tsx" },
      {
        path: "about",
        lazy: async () => {
          const { About } = await import("./pages/About");
          return { Component: About };
        },
        entry: "src/pages/About.tsx",
      },
      {
        path: "projects",
        lazy: async () => {
          const { Projects } = await import("./pages/Projects");
          return { Component: Projects };
        },
        entry: "src/pages/Projects.tsx",
      },
      {
        path: "blog",
        lazy: async () => {
          const { Blog } = await import("./pages/Blog");
          return { Component: Blog };
        },
        entry: "src/pages/Blog.tsx",
      },
      {
        path: "blog/:slug",
        lazy: async () => {
          const { BlogPost } = await import("./pages/BlogPost");
          return { Component: BlogPost };
        },
        entry: "src/pages/BlogPost.tsx",
        getStaticPaths: () => getAllPosts().map((post) => `blog/${post.slug}`),
      },
      {
        path: "contact",
        lazy: async () => {
          const { Contact } = await import("./pages/Contact");
          return { Component: Contact };
        },
        entry: "src/pages/Contact.tsx",
      },
      {
        path: "*",
        lazy: async () => {
          const { NotFound } = await import("./pages/NotFound");
          return { Component: NotFound };
        },
        entry: "src/pages/NotFound.tsx",
      },
    ],
  },
];
