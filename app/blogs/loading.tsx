"use client";

import { motion } from "framer-motion";
import Colors from "../../src/constants/Color";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-white"
    >
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
          borderRadius: "50%",
        }}
      />
    </motion.div>
  );
}
