import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Layers, Workflow, Radar, ShieldCheck } from "lucide-react";

// Mock Colors object - replace with your actual import
const Colors = {
  Primary_font: "#6366f1",
  Font_6: "#64748b",
};

const RelificWay = () => {
  const router = useRouter();

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #f9fafb 0%, #f1f5f9 100%)",
      }}
    >
      {/* Enhanced decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-64 w-64 sm:h-80 sm:w-80 rounded-full blur-3xl opacity-30"
          style={{ background: `${Colors.Primary_font}` }}
        />
        <div
          className="absolute top-1/2 right-0 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ background: "#7c3aed" }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-80 w-80 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-25"
          style={{ background: "#8b5cf6" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2
            className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[54px] xl:text-[60px] font-bold mb-4 sm:mb-6 px-4"
            style={{ color: Colors.Primary_font }}
          >
            Why We Build Different
          </h2>
          <p
            className="text-[16px] xl:text-[18px] max-w-3xl mx-auto leading-relaxed px-4"
            style={{ color: Colors.Font_6 }}
          >
            Relific is built on three uncompromising principles:{" "}
            <span className="font-semibold text-gray-900">Design-first</span>,{" "}
            <span className="font-semibold text-gray-900">User-first</span>, and{" "}
            <span className="font-semibold text-gray-900">AI-first</span>.
            They're not add-ons—they're the foundation of everything we deliver.
          </p>
        </motion.div>

        {/* Diagram + Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h3
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-4 sm:mb-6"
              style={{ color: Colors.Primary_font }}
            >
              The Relific Way
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-[16px] xl:text-[18px]">
              We design with empathy, not assumptions. We obsess over real-world
              user workflows. And we weave AI into the core, making data
              cleaner, insights sharper, and decisions faster.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 sm:mb-10 text-[16px] xl:text-[18px]">
              The outcome? Fewer clicks, faster adoption, and trusted
              intelligence from field staff to board members.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {[
                {
                  icon: Layers,
                  title: "Design Systems",
                  sub: "Consistency at scale",
                },
                {
                  icon: Workflow,
                  title: "User Workflows",
                  sub: "Jobs-to-be-Done mapping",
                },
                {
                  icon: Radar,
                  title: "AI Everywhere",
                  sub: "Validation, routing, insights",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust by Default",
                  sub: "Audit trails & controls",
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-start gap-3 rounded-xl border bg-white/80 backdrop-blur-sm p-4 hover:shadow-lg hover:bg-white transition-all duration-300"
                  style={{ borderColor: `${Colors.Primary_font}22` }}
                >
                  <feature.icon
                    className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 mt-0.5"
                    style={{ color: Colors.Primary_font }}
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-[14px] sm:text-[16px] mb-0.5">
                      {feature.title}
                    </p>
                    <p className="text-[12px] sm:text-[14px] text-gray-600">
                      {feature.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Better placement below features */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all text-[14px] sm:text-[16px]"
                style={{
                  background: `linear-gradient(135deg, ${Colors.Primary_font} 0%, #7c3aed 100%)`,
                }}
                onClick={() => {
                  router.push("/allproducts");
                }}
              >
                Learn More About Our Platform
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Relific OS Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] sm:h-[480px] lg:h-[540px] xl:h-[580px] flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Enhanced soft glow */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "clamp(240px, 70vw, 340px)",
                  height: "clamp(240px, 70vw, 340px)",
                  background: `radial-gradient(circle, ${Colors.Primary_font}33, transparent 70%)`,
                  filter: "blur(40px)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main orbital ring - enhanced styling */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "clamp(240px, 70vw, 320px)",
                  height: "clamp(240px, 70vw, 320px)",
                  border: `2.5px solid ${Colors.Primary_font}`,
                  opacity: 0.8,
                  boxShadow: `0 0 20px ${Colors.Primary_font}33`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner dashed ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "clamp(180px, 55vw, 260px)",
                  height: "clamp(180px, 55vw, 260px)",
                  border: "2px dashed #d4d4d8",
                  opacity: 0.35,
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Outer dashed ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "clamp(300px, 85vw, 380px)",
                  height: "clamp(300px, 85vw, 380px)",
                  border: "2px dashed #d4d4d8",
                  opacity: 0.35,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Centre hub - enhanced */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
                style={{
                  width: "clamp(120px, 28vw, 160px)",
                  height: "clamp(120px, 28vw, 160px)",
                  border: `3px solid ${Colors.Primary_font}11`,
                }}
              >
                <div className="text-center px-2">
                  <p
                    className="text-[10px] sm:text-[12px] font-semibold"
                    style={{ color: Colors.Primary_font }}
                  >
                    Relific
                  </p>
                  <p
                    className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold"
                    style={{ color: Colors.Primary_font }}
                  >
                    Impact OS
                  </p>
                </div>
              </motion.div>

              {/* Drive-R - responsive positioning */}
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  left: "clamp(15%, 50% - 170px, 50% - 190px)",
                  top: "clamp(15%, 50% - 85px, 50% - 95px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0 },
                  y: {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.12, y: -10 }}
                onClick={() => router.push("/drive_r")}
              >
                <div
                  className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md border-2 border-white/50 hover:border-white/80 transition-all shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                >
                  <img
                    src="/assets/product_logos/DriveR_small.png"
                    alt="Drive-R"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-md"
                  />
                  <span className="text-[8px] sm:text-[10px] font-bold text-gray-800 whitespace-nowrap">
                    Drive-R
                  </span>
                </div>
              </motion.div>

              {/* ProGran - responsive positioning */}
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  left: "clamp(65%, 50% + 120px, 50% + 150px)",
                  top: "clamp(15%, 50% - 75px, 50% - 85px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.4 },
                  y: {
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.12, y: -10 }}
                onClick={() => router.push("/progran")}
              >
                <div
                  className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md border-2 border-white/50 hover:border-white/80 transition-all shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                >
                  <img
                    src="/assets/product_logos/ProGran_small.png"
                    alt="ProGran"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-md"
                  />
                  <span className="text-[8px] sm:text-[10px] font-bold text-gray-800 whitespace-nowrap">
                    ProGran
                  </span>
                </div>
              </motion.div>

              {/* Surve-R - responsive positioning */}
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  left: "clamp(40%, 50% - 30px, 50% - 45px)",
                  top: "clamp(70%, 50% + 120px, 50% + 145px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.2 },
                  y: {
                    duration: 3.0,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.12, y: -10 }}
                onClick={() => router.push("/surve_r")}
              >
                <div
                  className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md border-2 border-white/50 hover:border-white/80 transition-all shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                >
                  <img
                    src="/assets/product_logos/SurveR_small.png"
                    alt="Surve-R"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-md"
                  />
                  <span className="text-[8px] sm:text-[10px] font-bold text-gray-800 whitespace-nowrap">
                    Surve-R
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RelificWay;
