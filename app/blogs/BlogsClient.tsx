"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getPosts, getMediaUrl } from "../../src/lib/strapi";
import Colors from "../../src/constants/Color";

export default function BlogsClient() {
  const [strapiBlogPosts, setStrapiBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getPosts()
      .then((json) => {
        if (json.data && Array.isArray(json.data)) {
          setStrapiBlogPosts(json.data);
        } else {
          setStrapiBlogPosts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setStrapiBlogPosts([]);
        setLoading(false);
      });
  }, []);

  // Convert Strapi blog posts to consistent format
  const convertStrapiToPost = (post) => {
    return {
      id: `strapi-${post.documentId}`,
      title: post.title || "Untitled Post",
      description:
        post.description ||
        post.excerpt ||
        "New blog post from our latest insights and field work.",
      image: post.cover ? getMediaUrl(post.cover) : "/assets/blog_bg.jpg",
      isStrapiBlog: true,
      publishedAt: post.publishedAt || post.createdAt,
      slug: post.slug || post.documentId, // Use actual slug for URL, fallback to documentId
      documentId: post.documentId,
      category: post.category,
      tags: post.tags,
      author: post.author?.name || "Relific Team",
    };
  };

  // Only use Strapi blog posts
  const allPosts = strapiBlogPosts.map(convertStrapiToPost);
  const displayPosts = expanded ? allPosts : allPosts.slice(0, 6);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
          className="w-16 h-16 border-4 rounded-full"
          style={{
            borderColor: `${Colors.Primary_font} transparent`,
          }}
        />
      </div>
    );
  }

  // Show message if no posts are available
  if (allPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: Colors.Primary_font }}
            >
              Our Stories & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from the field, insights from our work with NGOs and
              social organizations, and thoughts on the future of impact
              technology.
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              No blog posts available at the moment. Please check back later!
            </p>
            <p className="text-sm text-gray-500 mt-2">
              If this is unexpected, please check your Strapi CMS configuration.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: Colors.Primary_font }}
          >
            Our Stories & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from the field, insights from our work with NGOs and
            social organizations, and thoughts on the future of impact
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => {
                if (post.isStrapiBlog) {
                  router.push(`/blogs/${post.slug}`);
                } else {
                  router.push(`/impact-story/${post.id}`);
                }
              }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  {post.isStrapiBlog && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      Blog
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {allPosts.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {expanded ? "Show Less" : `Show All ${allPosts.length} Stories`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
