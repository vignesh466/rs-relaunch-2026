"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPost, getMediaUrl, normaliseMedia } from "../../../src/lib/strapi";
import SmartContent from "../../../src/components/blog/SmartContent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Colors from "../../../src/constants/Color";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    if (slug) {
      getPost(slug as string)
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((error) => {
          if (process.env.NODE_ENV === "development") {
            console.error("Error fetching post:", error);
          }
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg" style={{ color: Colors.Primary_font }}>
          Loading...
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Post not found</h1>
        <p className="mt-4">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <motion.article
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center leading-tight"
        style={{ color: Colors.Primary_font }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {post.title}
        {process.env.NODE_ENV === "development" && (
          <button
            onClick={() => setDebug((v) => !v)}
            className="text-xs underline ml-2 text-blue-500 hover:text-blue-700"
          >
            Debug
          </button>
        )}
      </motion.h1>

      {debug && process.env.NODE_ENV === "development" && (
        <div className="mb-8">
          <pre className="text-xs bg-gray-50 p-3 rounded overflow-auto max-h-96 border">
            {JSON.stringify(post, null, 2)}
          </pre>
        </div>
      )}

      {/* Meta information */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ color: Colors.Know }}
      >
        {/* Published date */}
        {post.publishedAt && (
          <div>
            Published on{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}

        {/* Author */}
        {post.author && (
          <div className="flex items-center gap-2">
            {post.author.avatar && (
              <img
                src={getMediaUrl(post.author.avatar)}
                alt={post.author.name}
                className="w-6 h-6 rounded-full"
              />
            )}
            <span>by {post.author.name}</span>
          </div>
        )}

        {/* Category */}
        {post.category && (
          <div className="px-3 py-1 bg-gray-100 rounded-full">
            {post.category.name}
          </div>
        )}
      </motion.div>

      {/* Cover Image */}
      {(() => {
        const cover = normaliseMedia(post.cover);
        return (
          cover?.url && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={cover.url}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover transition-transform hover:scale-105 duration-700"
                  alt={post.title}
                  loading="eager"
                />
              </div>
              {cover.caption && (
                <p className="text-sm text-gray-500 mt-4 text-center italic">
                  {cover.caption}
                </p>
              )}
            </motion.div>
          )
        );
      })()}

      {/* Content */}
      <motion.div
        className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-img:rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Description/Excerpt */}
        {post.description && (
          <div
            className="text-lg leading-relaxed mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4"
            style={{
              color: Colors.Font_3,
              borderLeftColor: Colors.Primary_font,
            }}
          >
            <p className="italic font-medium">{post.description}</p>
          </div>
        )}

        {/* Blocks content (main content) */}
        {post.blocks && post.blocks.length > 0 && (
          <div className="space-y-6">
            {post.blocks.map((block, index) => (
              <motion.div
                key={index}
                className="block-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                {renderBlock(block, index)}
              </motion.div>
            ))}
          </div>
        )}

        {/* Fallback: Rich text content if no blocks */}
        {(!post.blocks || post.blocks.length === 0) && post.content && (
          <div className="prose-content mb-8" style={{ color: Colors.Font_3 }}>
            <SmartContent value={post.content} />
          </div>
        )}
      </motion.div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <motion.div
          className="mt-8 pt-6 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex flex-wrap gap-2">
            <span
              className="text-sm font-medium"
              style={{ color: Colors.Know }}
            >
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 text-xs rounded-full border"
                style={{
                  color: Colors.Primary_font,
                  borderColor: Colors.Primary_font,
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Back button */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-lg border-2 transition-all duration-300 font-semibold"
          style={{
            backgroundColor: "transparent",
            color: Colors.Primary_font,
            borderColor: Colors.Primary_font,
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = Colors.Primary_font;
            target.style.color = Colors.Font_4;
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = "transparent";
            target.style.color = Colors.Primary_font;
          }}
        >
          ← Back to Blog
        </button>
      </motion.div>
    </motion.article>
  );
}

// Helper function to get normalized media array
function getMediaArray(block: any) {
  // Check for single file (from Strapi screenshot) or multiple files
  const mediaFields =
    block.file || block.files || block.media || block.images || [];
  const arr = Array.isArray(mediaFields) ? mediaFields : [mediaFields];

  return arr
    .map((item) => {
      if (!item) return null;

      // Handle Strapi v4 format with data.attributes
      if (item.data?.attributes) {
        const attrs = item.data.attributes;
        return {
          url: attrs.url?.startsWith("http")
            ? attrs.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${attrs.url}`,
          alt: attrs.alternativeText || attrs.alt || "",
          caption: attrs.caption || "",
        };
      }

      // Handle direct format
      if (item.url) {
        return {
          url: item.url.startsWith("http")
            ? item.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`,
          alt: item.alternativeText || item.alt || "",
          caption: item.caption || "",
        };
      }

      return null;
    })
    .filter(Boolean);
}

// Helper function to render different block types
function renderBlock(block: any, index: number) {
  if (!block || !block.__component) {
    // Handle legacy blocks or unknown structure
    if (block.content) {
      return (
        <div className="rich-text-content">
          <SmartContent value={block.content} />
        </div>
      );
    }
    return (
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <p className="text-sm text-yellow-800 mb-2">Unknown content block:</p>
        <pre className="text-xs overflow-auto bg-white p-2 rounded">
          {JSON.stringify(block, null, 2)}
        </pre>
      </div>
    );
  }

  const componentType = block.__component;

  switch (componentType) {
    case "shared.rich-text":
      return (
        <div
          className="rich-text-block prose prose-lg max-w-none mb-8"
          style={{ color: Colors.Font_3 }}
        >
          <SmartContent value={block.body || block.content || block.text} />
        </div>
      );

    case "shared.media":
      const mediaArray = getMediaArray(block);

      // If no media found, show placeholder only in development
      if (mediaArray.length === 0) {
        if (process.env.NODE_ENV === "development") {
          return (
            <div className="media-block my-8">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <p className="text-gray-500 mb-2">
                  Media content (ID: {block.id})
                </p>
                <details className="mt-2">
                  <summary className="text-xs text-gray-400 cursor-pointer">
                    Debug Info
                  </summary>
                  <pre className="text-xs mt-2 text-left bg-white p-2 rounded border">
                    {JSON.stringify(block, null, 2)}
                  </pre>
                </details>
              </div>
            </div>
          );
        }
        return null; // Don't show anything in production
      }

      return (
        <div className="media-block my-12">
          {mediaArray.length === 1 ? (
            // Single image - full width
            <div className="relative">
              <img
                src={mediaArray[0].url}
                alt={mediaArray[0].alt || ""}
                className="w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-[1.02] duration-300"
                loading="lazy"
              />
              {mediaArray[0].caption && (
                <p className="text-sm text-gray-600 mt-3 text-center italic">
                  {mediaArray[0].caption}
                </p>
              )}
            </div>
          ) : (
            // Multiple images - grid layout
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaArray.map((media, i) => (
                <div key={i} className="relative">
                  <img
                    src={media.url}
                    alt={media.alt || `Image ${i + 1}`}
                    className="w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-[1.02] duration-300"
                    loading="lazy"
                  />
                  {media.caption && (
                    <p className="text-sm text-gray-600 mt-3 italic">
                      {media.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case "shared.quote":
      return (
        <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-8 pr-6 py-6 my-10 italic text-lg rounded-r-lg">
          <div
            className="text-xl leading-relaxed"
            style={{ color: Colors.Font_3 }}
          >
            <SmartContent value={block.body || block.content || block.text} />
          </div>
          {block.author && (
            <footer className="text-base text-gray-700 mt-4 not-italic font-medium">
              — {block.author}
            </footer>
          )}
        </blockquote>
      );

    case "shared.slider":
    case "shared.gallery":
      return (
        <div className="gallery-block my-8">
          {block.files && block.files.length > 0 ? (
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: Colors.Primary_font }}
              >
                Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {block.files.map((file, fileIndex) => (
                  <div key={fileIndex} className="relative group">
                    <img
                      src={getMediaUrl(file)}
                      alt={
                        file.alternativeText ||
                        file.caption ||
                        `Gallery image ${fileIndex + 1}`
                      }
                      className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                    {file.caption && (
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        {file.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-gray-500">Gallery placeholder</p>
            </div>
          )}
        </div>
      );

    case "shared.video":
      return (
        <div className="video-block my-8">
          {block.url ? (
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={block.url}
                title={block.title || "Video content"}
                className="absolute inset-0 w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-gray-500">Video placeholder</p>
            </div>
          )}
          {block.caption && (
            <p className="text-sm text-gray-500 mt-3 text-center italic">
              {block.caption}
            </p>
          )}
        </div>
      );

    case "shared.code":
      return (
        <div className="code-block my-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            {block.language && (
              <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300">
                {block.language}
              </div>
            )}
            <pre className="p-4 overflow-x-auto">
              <code className="text-green-400 text-sm">{block.code}</code>
            </pre>
          </div>
        </div>
      );

    default:
      if (process.env.NODE_ENV === "development") {
        console.log("Unknown block type:", componentType);
      }
      return (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <p className="text-sm text-blue-800 mb-2">
            Block type: {componentType}
          </p>
          <pre className="text-xs overflow-auto bg-white p-2 rounded">
            {JSON.stringify(block, null, 2)}
          </pre>
        </div>
      );
  }
}
