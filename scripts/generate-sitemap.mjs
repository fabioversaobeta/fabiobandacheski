import { readdirSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(rootDir, "..");
const blogDir = path.join(projectRoot, "src/content/blog");
const outDir = path.join(projectRoot, "dist");

const SITE_URL = "https://fabiobandacheski.com";

const staticRoutes = ["/", "/about", "/projects", "/blog", "/contact"];

const postSlugs = readdirSync(blogDir)
  .filter((file) => file.endsWith(".md"))
  .filter((file) => {
    const raw = readFileSync(path.join(blogDir, file), "utf-8");
    const frontmatter = raw.slice(0, raw.indexOf("\n---", 3));
    return !/^draft:\s*true\s*$/m.test(frontmatter);
  })
  .map((file) => `/blog/${file.replace(/\.md$/, "")}`);

const urls = [...staticRoutes, ...postSlugs];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${SITE_URL}${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf-8");
console.log(`Generated sitemap.xml with ${urls.length} URLs`);

// SPA fallback: most static hosts (Netlify, GitHub Pages, S3/CloudFront, Cloudflare
// Pages) serve dist/404.html for unmatched paths. Since it's a full SSG shell, React
// Router hydrates and renders the app's own NotFound route for the requested URL.
copyFileSync(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
console.log("Generated 404.html fallback");
