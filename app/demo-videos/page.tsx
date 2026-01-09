"use client";

import React from "react";
import { motion } from "framer-motion";

// Import existing component
import DemoVideos from "../../src/components/VideoDemo/DemoVideos";

const VideoDemoPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DemoVideos />
    </motion.div>
  );
};

export default VideoDemoPage;
