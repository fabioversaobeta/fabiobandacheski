import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import { siteConfig } from "../../config/site";

function upsertMeta(selector: string, create: () => HTMLElement, apply: (el: Element) => void) {
  const el = document.querySelector(selector) ?? create();
  apply(el);
  if (!el.isConnected) document.head.appendChild(el);
}

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  tags?: string[];
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function Seo({
  title,
  description = siteConfig.description,
  path = "/",
  image,
  type = "website",
  publishedTime,
  tags,
  noindex = false,
  jsonLd,
}: SeoProps) {
  const pageTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.title;
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const ogImage = image ?? `${siteConfig.url}/og-image.png`;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // react-helmet-async doesn't reliably re-run its side effects on
  // client-side route transitions under React 19, so the document head
  // gets stuck on whatever was first hydrated. This keeps the title,
  // description, and canonical link in sync on every route change; the
  // SSG-rendered HTML (what crawlers and link previews actually fetch)
  // already has the correct tags per URL independent of this.
  useEffect(() => {
    document.title = pageTitle;

    upsertMeta(
      'meta[name="description"]',
      () => Object.assign(document.createElement("meta"), { name: "description" }),
      (el) => el.setAttribute("content", description)
    );

    upsertMeta(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      (el) => el.setAttribute("href", url)
    );

    const robots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      upsertMeta(
        'meta[name="robots"]',
        () => Object.assign(document.createElement("meta"), { name: "robots" }),
        (el) => el.setAttribute("content", "noindex, nofollow")
      );
    } else if (robots) {
      robots.remove();
    }
  }, [pageTitle, description, url, noindex]);

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.shortName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={siteConfig.locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {tags?.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdList.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Head>
  );
}
