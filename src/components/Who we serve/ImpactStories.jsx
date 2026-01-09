import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { impactStories } from "../../constants/Content";
import { getPosts, getMediaUrl } from "../../lib/strapi";
import Colors from "../../constants/Color";

const ImpactStories = () => {
  const [expanded, setExpanded] = useState(false);
  const [strapiBlogPosts, setStrapiBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch Strapi blog posts on component mount
  useEffect(() => {
    const fetchStrapiBlogPosts = async () => {
      try {
        const response = await getPosts();
        setStrapiBlogPosts(response.data || []);
      } catch (error) {
        console.error("Error fetching Strapi blog posts:", error);
        setStrapiBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStrapiBlogPosts();

    // Auto-refresh every 5 minutes to check for new blog posts
    const interval = setInterval(() => {
      fetchStrapiBlogPosts();
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  // Convert Strapi blog posts to impact story format
  const convertStrapiToImpactStory = (post) => ({
    id: `strapi-${post.documentId}`,
    title: post.title,
    description:
      post.description && post.description.length > 100
        ? `${post.description.substring(0, 100)}...`
        : post.description ||
          "New blog post from our latest insights and field work.",
    image: post.cover ? getMediaUrl(post.cover) : "/placeholder-image.jpg",
    designed: true, // All Strapi posts will have designed pages
    isStrapiBlog: true,
    publishedAt: post.publishedAt,
    slug: post.slug || post.documentId, // Use custom slug field, fallback to documentId
    documentId: post.documentId,
  });

  // Combine Strapi blogs (at top) with static impact stories
  const combinedStories = [
    ...strapiBlogPosts.map(convertStrapiToImpactStory),
    ...impactStories,
  ];

  // Show only first 4 unless "Expand All" is clicked
  const visibleStories = expanded
    ? combinedStories
    : combinedStories.slice(0, 4);

  // Helper function to check if a post is new (within last 7 days)
  const isNewPost = (publishedAt) => {
    if (!publishedAt) return false;
    const postDate = new Date(publishedAt);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return postDate > sevenDaysAgo;
  };

  const handleStoryClick = (story) => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (story.isStrapiBlog) {
        // Navigate to Strapi blog post using custom slug
        router.push(`/blogs/${story.slug}`);
      } else {
        // Navigate to static impact story
        router.push(
          story.designed ? `/impact-story/${story.id}` : "/comingblog"
        );
      }
    }, 100);
  };

  return (
    <div id="impact-stories" className="p-6 text-center bg-transparent py-20">
      {/* Title with fade-in animation */}
      <h3
        className="text-[50px] md:text-[40px] sm:text-[60px] font-normal text-center mb-12"
        style={{ color: Colors.Primary_font }}
      >
        Impact Stories
      </h3>
      <motion.p
        className="text-gray-600 mb-12 text-[16px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        We don't just create platforms. We craft experiences.
      </motion.p>

      {loading && (
        <div className="flex justify-center items-center py-8">
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
            className="w-8 h-8 border-4 rounded-full"
            style={{
              borderColor: `${Colors.Primary_font} transparent`,
              borderRadius: "50%",
            }}
          />
        </div>
      )}

      {/* Grid layout */}
      {combinedStories && combinedStories.length > 0 ? (
        <>
          {strapiBlogPosts.length > 0 && (
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500">
                {strapiBlogPosts.length} new blog
                {strapiBlogPosts.length !== 1 ? "s" : ""} from our latest work •{" "}
                {impactStories.length} impact stories
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleStories.map((story, index) => {
              const isNew = story.isStrapiBlog && isNewPost(story.publishedAt);
              return (
                <motion.div
                  key={story.id}
                  className="rounded-lg p-4 text-left cursor-pointer relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleStoryClick(story)}
                >
                  {/* New badge for recent Strapi blogs */}
                  {isNew && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        NEW
                      </span>
                    </div>
                  )}
                  {/* Blog badge for Strapi posts */}
                  {story.isStrapiBlog && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        BLOG
                      </span>
                    </div>
                  )}
                  <motion.img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-40 object-cover rounded-lg mb-3 shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      e.target.src = "/placeholder-image.jpg";
                      e.target.onerror = null;
                    }}
                  />
                  <h3
                    className="text-xl font-semibold truncate"
                    style={{ color: Colors.Primary_font }}
                    title={story.title}
                  >
                    {story.title}
                  </h3>
                  <p
                    className="text-gray-500 text-sm mt-2 h-12 overflow-hidden"
                    title={story.description}
                  >
                    {story.description}
                  </p>
                  {story.publishedAt && (
                    <p className="text-xs text-gray-400 mt-3">
                      {new Date(story.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-lg">No impact stories available.</p>
      )}

      {/* Expand/Collapse Button */}
      {combinedStories.length > 4 && (
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-2 text-lg font-semibold rounded-lg border transition-all duration-300"
            style={{
              backgroundColor: "transparent",
              color: Colors.Know,
              borderColor: Colors.Know,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = Colors.Primary_font;
              e.target.style.color = Colors.Font_4;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = Colors.Know;
            }}
          >
            {expanded ? "Show Less" : `Show All (${combinedStories.length})`}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ImpactStories;
