"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "../src/constants/NavBar/navbar";
import Footer from "../src/constants/Footer/footer";
import Colors from "../src/constants/Color";
import LoadingComponent from "./components/Loading";
import ChatbotBubble from "../src/chatbot/ChatbotBubble";

const LoadingScreen = () => <LoadingComponent />;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const pathname = usePathname();

  // Initial app load - render immediately
  useEffect(() => {
    setLoading(false);
  }, []);

  // Route change loading - reduced delay
  useEffect(() => {
    if (!loading) {
      setRouteLoading(true);
      const timer = setTimeout(() => {
        setRouteLoading(false);
      }, 150); // Reduced from 600ms to 150ms

      return () => clearTimeout(timer);
    }
  }, [pathname, loading]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen />
      ) : routeLoading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <Navbar />
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.div>
          <Footer />
          <ChatbotBubble />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
