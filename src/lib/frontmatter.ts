// Minimal frontmatter parser for this project's fixed, simple shape
// (quoted strings, string arrays, booleans). Avoids pulling a full YAML
// parser (gray-matter + js-yaml, ~50kb gzip) into the client bundle.

function stripQuotes(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function parseValue(raw: string): unknown {
  const value = raw.trim();
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((item) => stripQuotes(item.trim()));
  }
  if (value === "true") return true;
  if (value === "false") return false;
  return stripQuotes(value);
}

export function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const [, frontmatterBlock, content] = match;
  const data: Record<string, unknown> = {};

  for (const line of frontmatterBlock.split(/\r?\n/)) {
    const lineMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!lineMatch) continue;
    const [, key, rawValue] = lineMatch;
    data[key] = parseValue(rawValue);
  }

  return { data, content: content.trim() };
}
