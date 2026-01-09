"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getPosts, getMediaUrl } from "../../lib/strapi";
import Colors from "../../constants/Color";

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getPosts()
      .then((json) => {
        if (json.data && Array.isArray(json.data)) {
          // Get only the top 3 posts
          const top3Posts = json.data.slice(0, 3);
          setBlogPosts(top3Posts);
        } else {
          setBlogPosts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setBlogPosts([]);
        setLoading(false);
      });
  }, []);

  const handlePostClick = (post) => {
    const slug = post.slug || post.documentId;
    router.push(`/blogs/${slug}`);
  };

  const handleShowAllClick = () => {
    router.push("/blogs");
  };

  return (
    <div className="p-6 text-center bg-transparent py-20">
      <div
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: Colors.Bg_color_3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: Colors.Primary_font }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Stories & Insights
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          style={{ color: Colors.Font_5 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real stories from the field and insights from our work with social
          impact organizations
        </motion.p>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-12 h-12 border-4 rounded-full"
              style={{
                borderColor: `${Colors.Primary_font} transparent`,
              }}
            />
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: Colors.Font_5 }}>
              No blog posts available at the moment.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={`blog-${post.documentId}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={
                        post.cover
                          ? getMediaUrl(post.cover)
                          : "/assets/blog_bg.jpg"
                      }
                      alt={post.title || "Blog post"}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = "/assets/blog_bg.jpg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="font-semibold text-lg mb-2 line-clamp-2"
                      style={{ color: Colors.Primary_font }}
                    >
                      {post.title || "Untitled Post"}
                    </h3>
                    <p
                      className="mb-4 line-clamp-3"
                      style={{ color: Colors.Font_5 }}
                    >
                      {post.description ||
                        post.excerpt ||
                        "New blog post from our latest insights and field work."}
                    </p>
                    <div
                      className="flex items-center justify-between text-sm"
                      style={{ color: Colors.Font_5 }}
                    >
                      <span>
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString()
                          : new Date().toLocaleDateString()}
                      </span>
                      <span
                        className="px-2 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: Colors.Bg_color_1,
                          color: Colors.Primary_font,
                        }}
                      >
                        Blog
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={handleShowAllClick}
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: Colors.Primary_font,
                  color: Colors.Font_4,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = Colors.Click;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = Colors.Primary_font;
                }}
              >
                Show All Blog Posts
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
