"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "../src/constants/NavBar/navbar";
import Footer from "../src/constants/Footer/footer";
import Colors from "../src/constants/Color";
import LoadingComponent from "./components/Loading";

const LoadingScreen = () => <LoadingComponent />;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const pathname = usePathname();

  // Initial app load
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // Route change loading - only show if not initial load
  useEffect(() => {
    if (!loading) {
      // Only show route loading after initial load is complete
      setRouteLoading(true);
      const timer = setTimeout(() => {
        setRouteLoading(false);
      }, 600); // Shorter delay for route changes

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Navbar />
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
