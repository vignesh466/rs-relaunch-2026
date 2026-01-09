export function isLikelyHTML(s?: unknown): boolean {
  return typeof s === "string" && /<\/?[a-z][\s\S]*>/i.test(s);
}

export function isLikelyMDX(s?: unknown): boolean {
  return (
    typeof s === "string" &&
    (/<[A-Z][A-Za-z0-9]*(\s|>)/.test(s) ||
      /:::\s*(note|caution|info|warning|tip)/i.test(s) ||
      /import\s+/.test(s) ||
      /export\s+/.test(s))
  );
}

export function isLikelyMarkdown(s?: unknown): boolean {
  return (
    typeof s === "string" &&
    (/^#{1,6}\s/m.test(s) ||
      /^\s*[-*+]\s+/m.test(s) ||
      /\[.+\]\(.+\)/.test(s) ||
      /^\s*\d+\.\s+/m.test(s) ||
      /\*\*.*\*\*/.test(s) ||
      /_.*_/.test(s))
  );
}

export type RichNode = {
  type?: string;
  children?: RichNode[];
  content?: RichNode[];
  text?: string;
  level?: number;
  format?: string;
  url?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  [key: string]: any;
};

export function isRichJSON(v: unknown): v is RichNode {
  return (
    typeof v === "object" &&
    v !== null &&
    (Array.isArray((v as any).children) ||
      Array.isArray((v as any).content) ||
      typeof (v as any).type === "string")
  );
}

export function renderRichJSONToHTML(node: RichNode | RichNode[]): string {
  if (Array.isArray(node)) {
    return node.map(renderRichJSONToHTML).join("");
  }

  if (!node || typeof node !== "object") {
    return String(node || "");
  }

  const {
    type,
    children,
    content,
    text,
    level,
    format,
    url,
    bold,
    italic,
    underline,
    strikethrough,
    code,
  } = node;

  // Handle text nodes
  if (type === "text" || text !== undefined) {
    let result = text || "";
    if (bold) result = `<strong>${result}</strong>`;
    if (italic) result = `<em>${result}</em>`;
    if (underline) result = `<u>${result}</u>`;
    if (strikethrough) result = `<s>${result}</s>`;
    if (code) result = `<code>${result}</code>`;
    return result;
  }

  // Get child content
  const childNodes = children || content || [];
  const childContent = childNodes.map(renderRichJSONToHTML).join("");

  // Handle different node types
  switch (type) {
    case "paragraph":
      return `<p>${childContent}</p>`;

    case "heading":
      const headingLevel = Math.min(Math.max(level || 1, 1), 6);
      return `<h${headingLevel}>${childContent}</h${headingLevel}>`;

    case "list":
      const listTag = format === "ordered" ? "ol" : "ul";
      return `<${listTag}>${childContent}</${listTag}>`;

    case "list-item":
      return `<li>${childContent}</li>`;

    case "link":
      const href = url || "#";
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${childContent}</a>`;

    case "blockquote":
      return `<blockquote>${childContent}</blockquote>`;

    case "code":
      return `<pre><code>${childContent}</code></pre>`;

    case "image":
      const src = (node as any).src || (node as any).url || "";
      const alt = (node as any).alt || (node as any).alternativeText || "";
      return `<img src="${src}" alt="${alt}" />`;

    case "break":
    case "hard-break":
      return "<br>";

    default:
      // For unknown types, just return the child content
      return childContent;
  }
}
