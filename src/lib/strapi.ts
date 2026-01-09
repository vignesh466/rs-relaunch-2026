// Next.js types reference
/// <reference types="next" />

import {
  isLikelyHTML,
  isLikelyMDX,
  isLikelyMarkdown,
  isRichJSON,
  renderRichJSONToHTML,
  type RichNode,
} from "./content";
import qs from "qs";

// Next.js environment variables
const API = process.env.NEXT_PUBLIC_STRAPI_URL;
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

async function rq(path: string) {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) throw new Error(`Strapi ${res.status}`);
  return res.json();
}

export async function getPosts(page = 1, pageSize = 12) {
  if (process.env.NODE_ENV === "development") {
    console.log("Fetching posts from:", API);
    console.log("Has token:", !!TOKEN);
  }

  if (!API || !TOKEN) {
    throw new Error("Strapi URL or token not configured");
  }

  const query = qs.stringify(
    {
      populate: "*",
      sort: "publishedAt:desc",
      pagination: { page, pageSize },
      filters: { publishedAt: { $notNull: true } },
    },
    { encodeValuesOnly: true }
  );

  try {
    const result = await rq(`/api/articles?${query}`);
    return result;
  } catch (error) {
    console.error("Strapi fetch error:", error);
    throw error;
  }
}

export async function getPost(slug: string) {
  if (process.env.NODE_ENV === "development") {
    console.log("Fetching post by slug:", slug);
  }

  // Use the slug field to fetch articles
  const query = qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      populate: {
        cover: true,
        author: true,
        category: true,
        blocks: {
          populate: "*",
        },
      },
    },
    { encodeValuesOnly: true }
  );

  try {
    const json = await rq(`/api/articles?${query}`);

    if (!json?.data?.length) {
      return null;
    }

    return json.data[0];
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
} // Enhanced media URL helper
export function getMediaUrl(x: any): string {
  if (!x) return "";

  // If it's already a full URL
  if (typeof x === "string" && x.startsWith("http")) {
    return x;
  }

  // Handle direct url property
  if (x.url) {
    return x.url.startsWith("http") ? x.url : `${API}${x.url}`;
  }

  // Handle Strapi v4 format with data.attributes
  if (x.data?.attributes?.url) {
    const url = x.data.attributes.url;
    return url.startsWith("http") ? url : `${API}${url}`;
  }

  return "";
}

// Enhanced media normalizer
export function normaliseMedia(
  x: any
): { url: string; alt?: string; caption?: string } | null {
  if (!x) return null;

  const url = getMediaUrl(x);
  if (!url) return null;

  // Handle different formats
  const alt =
    x.alternativeText || x.alt || x.data?.attributes?.alternativeText || "";
  const caption = x.caption || x.data?.attributes?.caption || "";

  return { url, alt, caption };
}

// Enhanced rich text processor
export function processRichText(input: unknown): {
  kind: "html" | "md" | "mdx" | "empty";
  html?: string;
  md?: string;
} {
  if (!input) {
    return { kind: "empty" };
  }

  // Handle Rich JSON format (Strapi v4 rich text)
  if (isRichJSON(input)) {
    const html = renderRichJSONToHTML(input as RichNode);
    return { kind: "html", html };
  }

  // Handle string content
  if (typeof input === "string") {
    if (isLikelyHTML(input)) {
      return { kind: "html", html: input };
    } else if (isLikelyMDX(input)) {
      return { kind: "mdx", md: input };
    } else if (isLikelyMarkdown(input)) {
      return { kind: "md", md: input };
    } else {
      // Plain text - convert to markdown
      return { kind: "md", md: input };
    }
  }

  return { kind: "empty" };
}
