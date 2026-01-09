import React from "react";
import type { JSX } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "./mdx-components";

// Helper function to detect content type
function detectContentType(value: unknown): string {
  if (typeof value !== "string") return "unknown";

  const str = value.trim();

  // Check if it looks like HTML
  if (str.startsWith("<") && str.includes(">")) {
    return "html";
  }

  // Check if it looks like MDX (has JSX components)
  if (
    str.includes("<") &&
    str.includes(">") &&
    (str.includes("##") || str.includes("**"))
  ) {
    return "mdx";
  }

  // Check if it looks like Markdown
  if (
    str.includes("##") ||
    str.includes("**") ||
    str.includes("|") ||
    str.includes("- ") ||
    str.includes("1. ")
  ) {
    return "markdown";
  }

  // Check if it's Rich Text JSON
  try {
    const parsed = JSON.parse(str);
    if (Array.isArray(parsed) || (parsed && typeof parsed === "object")) {
      return "richtext";
    }
  } catch {
    // Not JSON
  }

  return "plain";
}

// Helper function to render Rich Text JSON
function renderRichTextJSON(data: any): React.ReactNode {
  if (!data) return null;

  if (Array.isArray(data)) {
    return data.map((item, index) => renderRichTextJSON(item));
  }

  if (typeof data === "object") {
    const { type, children, ...props } = data;

    switch (type) {
      case "paragraph":
        return (
          <p key={Math.random()} {...props}>
            {children?.map(renderRichTextJSON)}
          </p>
        );
      case "heading":
        const HeadingTag = `h${data.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={Math.random()} {...props}>
            {children?.map(renderRichTextJSON)}
          </HeadingTag>
        );
      case "list":
        const ListTag = data.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={Math.random()} {...props}>
            {children?.map(renderRichTextJSON)}
          </ListTag>
        );
      case "list-item":
        return (
          <li key={Math.random()} {...props}>
            {children?.map(renderRichTextJSON)}
          </li>
        );
      case "link":
        return (
          <a key={Math.random()} href={data.url} {...props}>
            {children?.map(renderRichTextJSON)}
          </a>
        );
      case "text":
        let text = data.text || "";
        if (data.bold) text = <strong>{text}</strong>;
        if (data.italic) text = <em>{text}</em>;
        if (data.code) text = <code>{text}</code>;
        return text;
      default:
        return children?.map?.(renderRichTextJSON) || data.text || "";
    }
  }

  return String(data);
}

export default function SmartContent({ value }: { value: unknown }) {
  if (!value) return null;

  const contentType = detectContentType(value);
  const stringValue = String(value);

  switch (contentType) {
    case "html":
      return (
        <div
          className="smart-content"
          dangerouslySetInnerHTML={{ __html: stringValue }}
        />
      );

    case "mdx":
    case "markdown":
      return (
        <div className="smart-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdxComponents}>
            {stringValue}
          </ReactMarkdown>
        </div>
      );

    case "richtext":
      try {
        const parsed = JSON.parse(stringValue);
        return (
          <div className="smart-content">{renderRichTextJSON(parsed)}</div>
        );
      } catch {
        // Fallback to plain text
        return <div className="smart-content">{stringValue}</div>;
      }

    case "plain":
    default:
      return <div className="smart-content">{stringValue}</div>;
  }
}
