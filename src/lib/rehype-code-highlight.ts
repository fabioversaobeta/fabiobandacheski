import { createLowlight } from "lowlight";
import { toText } from "hast-util-to-text";
import { visit } from "unist-util-visit";
import type { Element, Root } from "hast";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import php from "highlight.js/lib/languages/php";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

// Only registers the languages this blog actually uses, instead of
// rehype-highlight's default `common` set (~35 languages, ~300kb).
const lowlight = createLowlight({ javascript, typescript, bash, json, css, xml, php });
lowlight.registerAlias({
  javascript: ["js"],
  typescript: ["ts"],
  bash: ["sh", "shell"],
  xml: ["html"],
});

function getLanguage(node: Element): string | undefined {
  const className = node.properties?.className;
  const classes = Array.isArray(className) ? className : [];
  const languageClass = classes.find((c) => typeof c === "string" && c.startsWith("language-"));
  return typeof languageClass === "string" ? languageClass.slice("language-".length) : undefined;
}

export function rehypeCodeHighlight() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, _index, parent) => {
      if (node.tagName !== "code" || !parent || (parent as Element).tagName !== "pre") return;

      const language = getLanguage(node);
      if (!language || !lowlight.registered(language)) return;

      const result = lowlight.highlight(language, toText(node), { prefix: "hljs-" });
      node.children = result.children as Element["children"];

      const className = Array.isArray(node.properties.className) ? node.properties.className : [];
      node.properties.className = [...className, "hljs"];
    });
  };
}
