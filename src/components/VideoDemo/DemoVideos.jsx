"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { X, AlertCircle } from "lucide-react";
import Colors from "../../constants/Color";

const DemoVideos = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoError, setVideoError] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const demoVideos = [
    {
      id: 1,
      title: "Drive-R: AI-Powered Data Intelligence",
      description:
        "Transform your data into actionable insights with natural language queries and predictive analytics.",
      youtubeUrl: "https://youtu.be/kaiX8DPBV04",
      videoId: "kaiX8DPBV04",
      category: "Data Intelligence",
      duration: "3:45",
      available: true,
    },
    {
      id: 2,
      title: "Surve-R: Enterprise Data Collection",
      description:
        "Mobile-first data collection platform with offline sync capabilities and enterprise-grade security.",
      youtubeUrl: "https://youtu.be/0z00jrKyKpY",
      videoId: "0z00jrKyKpY",
      category: "Data Collection",
      duration: "4:20",
      available: true,
    },
    {
      id: 3,
      title: "ProGran: Comprehensive Grant Management",
      description:
        "End-to-end grant management solution from application tracking to impact reporting.",
      youtubeUrl: "https://youtu.be/dQw4w9WgXcQ", // Placeholder URL
      videoId: "dQw4w9WgXcQ",
      category: "Grant Management",
      duration: "5:12",
      available: false, // Set to false for demonstration
    },
  ];

  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleVideoClick = (video) => {
    if (!video.available) {
      setVideoError(
        `Sorry, the ${video.title} demo is currently unavailable. Please try again later or contact our support team for assistance.`,
      );
      setSelectedVideo(null);
      return;
    }

    setVideoError(null);
    setVideoLoading(true);
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setVideoError(null);
    setVideoLoading(false);
  };

  const handleVideoLoad = () => {
    setVideoLoading(false);
  };

  // Fallback content for unavailable videos
  const renderFallbackContent = () => (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-100 rounded-lg">
      <AlertCircle className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-600 mb-2">
        Video Currently Unavailable
      </h3>
      <p className="text-gray-500 text-center max-w-md">
        We're working to restore this demo video. In the meantime, you can
        schedule a live demo or contact our team for more information.
      </p>
      <div className="flex gap-4 mt-6">
        <Link
          href="/contact"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </Link>
        <Link
          href="/book-demo"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Book Demo
        </Link>
      </div>
    </div>
  );

  return (
    <div
      className="relative min-h-screen flex flex-col overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "#f4f3ef" }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10 px-4 sm:px-8 lg:px-16"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-8 leading-tight"
            style={{ color: Colors.Primary_font, fontWeight: 400 }}
          >
            Product Demo Videos
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto"
            style={{ color: Colors.Font_6 }}
          >
            Discover how Relific's intelligent platform transforms impact
            measurement and data operations. Watch comprehensive demonstrations
            of our flagship products in action.
          </motion.p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16"
        >
          {demoVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative rounded-xl transition-all duration-500 hover:shadow-2xl bg-white overflow-hidden"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={getYouTubeThumbnail(video.videoId)}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleVideoClick(video)}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: Colors.Primary_font }}
                    >
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Unavailable Overlay */}
                {!video.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: Colors.Primary_font,
                    color: Colors.Font_4,
                  }}
                >
                  {video.category}
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4 leading-tight"
                  style={{ color: Colors.Font_3 }}
                >
                  {video.title}
                </h3>

                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  {video.description}
                </p>

                {/* Watch Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleVideoClick(video)}
                  disabled={!video.available}
                  className={`w-full px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 ${
                    !video.available
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  style={{
                    backgroundColor:
                      hoveredVideo === video.id && video.available
                        ? Colors.Primary_font
                        : "transparent",
                    color:
                      hoveredVideo === video.id && video.available
                        ? Colors.Font_4
                        : Colors.Primary_font,
                    border: `2px solid ${Colors.Primary_font}`,
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                  </svg>
                  {video.available ? "Watch Demo" : "Coming Soon"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <h2
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ color: Colors.Font_3 }}
          >
            Ready to Transform Your Impact Operations?
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            See how these powerful tools can work together to revolutionize your
            data collection, analysis, and impact reporting workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book-demo"
              className="inline-block px-8 py-4 rounded-lg shadow-lg transition-all duration-300 text-lg font-semibold cursor-pointer hover:shadow-xl"
              style={{
                backgroundColor: Colors.Primary_font,
                color: Colors.Font_4,
                boxShadow: "0px 8px 20px rgba(85, 99, 255, 0.2)",
                textDecoration: "none",
              }}
            >
              Book Your Demo
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border-2 transition-all duration-300 text-lg font-semibold cursor-pointer hover:shadow-lg"
              style={{
                borderColor: Colors.Primary_font,
                color: Colors.Primary_font,
                backgroundColor: "transparent",
              }}
            >
              Schedule Live Demo
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600">{selectedVideo.description}</p>
              </div>

              {/* Video Content */}
              <div className="relative">
                {videoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 aspect-video">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  </div>
                )}

                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full aspect-video"
                  onLoad={handleVideoLoad}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gray-50 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {selectedVideo.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    Duration: {selectedVideo.duration}
                  </span>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/book-demo"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer"
                  >
                    Book Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message Modal */}
      <AnimatePresence>
        {videoError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={() => setVideoError(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-xl p-8 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoError(null)}
                className="absolute top-4 right-4 w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-full h-full" />
              </button>

              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Video Unavailable
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{videoError}</p>

              <div className="flex gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer"
                  onClick={() => setVideoError(null)}
                >
                  Contact Support
                </Link>
                <button
                  onClick={() => setVideoError(null)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DemoVideos;
