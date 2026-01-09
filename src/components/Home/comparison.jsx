import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileSpreadsheet,
  TimerReset,
  BarChart2,
  Zap,
  LayoutDashboard,
  Target,
  Brain,
  RefreshCw,
  Share2,
} from "lucide-react";

const Colors = {
  primary: "#4f46e5", // indigo-600
  secondary: "#7c3aed", // violet-600
  textOnDark: "rgba(255,255,255,0.92)",
  textMutedOnDark: "rgba(255,255,255,0.75)",
};

const states = [
  {
    title: "Traditional Impact",
    subtitle: "Manual & Time-Intensive",
    shortTitle: "Traditional",
    color: "#dc2626",
    bgColor: "rgba(220, 38, 38, 0.03)",
    borderColor: "rgba(220, 38, 38, 0.25)",
    features: [
      {
        icon: FileSpreadsheet,
        title: "Manual Data Collection",
        description:
          "Teams spend weeks gathering data from fragmented sheets and exports.",
        impact: "Weeks Lost",
      },
      {
        icon: TimerReset,
        title: "Delayed Reporting",
        description:
          "Board decks take months, missing critical decision windows.",
        impact: "Months Delay",
      },
      {
        icon: BarChart2,
        title: "Limited Visibility",
        description:
          "Stakeholders wait indefinitely for portfolio performance insights.",
        impact: "Low Clarity",
      },
    ],
    quote:
      "Our best program managers are becoming spreadsheet experts instead of change makers.",
    author: "CSR Director, Fortune 500",
  },
  {
    title: "With Relific",
    subtitle: "AI-Powered Intelligence",
    shortTitle: "Relific",
    color: "#16a34a",
    bgColor: "rgba(22, 163, 74, 0.04)",
    borderColor: "rgba(22, 163, 74, 0.25)",
    features: [
      {
        icon: Zap,
        title: "Automated Data Flows",
        description:
          "AI handles ingestion and transformation across all platforms.",
        impact: "80% Faster",
      },
      {
        icon: LayoutDashboard,
        title: "Real-time Dashboards",
        description: "Board-ready, verifiable reports in minutes.",
        impact: "Minutes",
      },
      {
        icon: Target,
        title: "Impact Amplification",
        description:
          "Prove outcomes and secure larger grants with audit-ready trails.",
        impact: "3× Growth",
      },
    ],
    quote: "We tripled program reach while reporting time dropped by 85%.",
    author: "Impact Director using Relific",
  },
  {
    title: "Future Vision",
    subtitle: "Predictive Impact Ecosystem",
    shortTitle: "Future",
    color: "#7c3aed",
    bgColor: "rgba(124, 58, 237, 0.05)",
    borderColor: "rgba(124, 58, 237, 0.25)",
    features: [
      {
        icon: Brain,
        title: "Predictive Modelling",
        description: "Forecast outcomes pre-deployment to optimise allocation.",
        impact: "Predictive",
      },
      {
        icon: RefreshCw,
        title: "Autonomous Operations",
        description:
          "Self-adapting programs driven by real-time feedback loops.",
        impact: "Self-Optimising",
      },
      {
        icon: Share2,
        title: "Global Impact Network",
        description:
          "Secure, shared learning that compounds across organisations.",
        impact: "Network Effect",
      },
    ],
    quote: "Imagine programs that continuously learn and improve themselves.",
    author: "Vision for 2030",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Comparison = () => {
  const [activeState, setActiveState] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(
      () => setActiveState((p) => (p + 1) % states.length),
      5200
    );
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  const current = states[activeState];

  const handleStateChange = (index) => {
    setActiveState(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 9000);
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% -10%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%), linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      }}
    >
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="px-4 sm:px-8 lg:px-16 py-16 lg:py-20 relative">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: Colors.textOnDark }}
            >
              Impact Intelligence Evolution
            </span>
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Unleash the Power of{" "}
            <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
              Impact Intelligence
            </span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: Colors.textMutedOnDark }}>
            Transform from manual processes to AI-powered impact operations.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeState}
              initial={{ opacity: 0, x: -40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="p-8 lg:p-10 rounded-3xl shadow-2xl bg-white/60 backdrop-blur border"
              style={{ borderColor: current.borderColor }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="h-10 w-10 rounded-lg"
                  style={{ background: current.color }}
                />
                <div>
                  <h3
                    className="text-2xl lg:text-3xl font-bold"
                    style={{ color: current.color }}
                  >
                    {current.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {current.features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.12 }}
                      className="group p-5 rounded-xl bg-white border hover:shadow-lg transition-all"
                      style={{ borderColor: `${current.color}22` }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="rounded-lg p-2 border"
                          style={{ borderColor: `${current.color}33` }}
                        >
                          <Icon
                            className="h-5 w-5"
                            style={{ color: current.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="font-semibold text-gray-900">
                              {f.title}
                            </h4>
                            <span
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                              style={{
                                backgroundColor: `${current.color}15`,
                                color: current.color,
                              }}
                            >
                              {f.impact}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {f.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quote */}
              <div
                className="mt-7 rounded-2xl p-6 border"
                style={{
                  borderColor: `${current.color}22`,
                  backgroundColor: `${current.color}0D`,
                }}
              >
                <p className="italic text-gray-800 mb-2">{current.quote}</p>
                <p
                  className="text-sm font-bold"
                  style={{ color: current.color }}
                >
                  — {current.author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Radial Hub + Orbiting Nodes */}
          <motion.div
            variants={itemVariants}
            className="relative h-[520px] flex items-center justify-center"
          >
            {/* glow */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 440,
                height: 440,
                background: `radial-gradient(circle, ${current.color}22, transparent 70%)`,
                filter: "blur(6px)",
              }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* central hub */}
            <div className="relative w-80 h-80 rounded-full border-4 border-white/35 bg-white/10 backdrop-blur flex items-center justify-center shadow-xl">
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="w-36 h-36 rounded-full bg-white shadow-2xl flex items-center justify-center text-center"
              >
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: Colors.primary }}
                  >
                    Relific
                  </p>
                  <p
                    className="text-xl font-bold"
                    style={{ color: Colors.primary }}
                  >
                    Impact OS
                  </p>
                </div>
              </motion.div>

              {/* orbiting nodes */}
              {[
                { label: "Data Ingestion" },
                { label: "Validation" },
                { label: "Dashboards" },
                { label: "NLP Query" },
                { label: "Workflows" },
                { label: "Integrations" },
              ].map((n, i) => {
                const angle = (i / 6) * 360;
                const radius = 150;
                return (
                  <motion.div
                    key={n.label}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 rounded-full bg-white shadow-lg border text-sm font-medium">
                      {n.label}
                    </div>
                  </motion.div>
                );
              })}

              {/* subtle ticks */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-1 h-8 rounded"
                  style={{
                    top: 8,
                    left: "50%",
                    transformOrigin: "50% 152px",
                    transform: `translateX(-50%) rotate(${deg}deg)`,
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* State selectors */}
        <div className="mt-12 flex justify-center gap-6">
          {states.map((s, i) => (
            <button
              key={s.shortTitle}
              onClick={() => handleStateChange(i)}
              className="group relative"
            >
              <motion.span
                className="block h-2 w-2 rounded-full"
                animate={{
                  backgroundColor:
                    i === activeState
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.45)",
                  scale: i === activeState ? 1.6 : 1,
                }}
                style={{
                  boxShadow:
                    i === activeState
                      ? "0 0 18px rgba(255,255,255,0.85)"
                      : "none",
                }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              />
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1 text-xs font-medium text-gray-800 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {s.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Comparison;
