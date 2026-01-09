import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Colors from "../../constants/Color";
import { coreValues } from "../../constants/Content";
import {
  Sparkles,
  UserCheck,
  BrainCircuit,
  Layers,
  Share2,
  ShieldCheck,
  BarChart3,
  Workflow,
  Radar,
} from "lucide-react";

/**
 * ValueShowcase — "go crazy" edition
 * Visual narrative:
 * 1) Hero: Design-first, User-first, AI-first badges over a gradient-mesh canvas.
 * 2) Relific OS Diagram: central hub + layered rings + orbiting capability nodes.
 * 3) Core Values Grid: upgraded 3D tilt cards mapped from `coreValues`.
 * 4) Closing strapline.
 */

const Badge = ({ icon: Icon, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md"
  >
    <Icon size={16} className="text-white/90" />
    <span className="text-xs font-semibold tracking-wide text-white/90">
      {label}
    </span>
  </motion.div>
);

const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`rounded-2xl shadow-lg border ${className}`}
    >
      {children}
    </motion.div>
  );
};

const ValueShowcase = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: Colors.Bg_color_1 }}
    >
      {/* Gradient mesh + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
          style={{
            background: `radial-gradient(circle, ${Colors.Primary_font}, transparent 60%)`,
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        {/* Hero */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
            style={{ color: Colors.Primary_font }}
          >
            Our Core Values
          </motion.h2>
          <div className="mt-6 max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              At Relific, we believe that meaningful social impact requires more
              than good intentions—it demands intelligent systems, transparent
              processes, and unwavering commitment to the communities we serve.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Every line of code, every user interface, and every data insight
              we create is guided by three fundamental principles: putting
              design first to ensure accessibility, putting users first to
              guarantee usability, and putting AI first to amplify human
              potential in creating lasting change.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Badge icon={Sparkles} label="Design-first" />
            <Badge icon={UserCheck} label="User-first" />
            <Badge icon={BrainCircuit} label="AI-first" />
          </div>
        </div>

        {/* Values Grid (from coreValues) */}
        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h4
              className="text-xl md:text-2xl font-semibold"
              style={{ color: Colors.Primary_font }}
            >
              Principles We Operate By
            </h4>
            <span className="text-sm text-gray-600">
              Designed for people. Powered by AI. Proven in the field.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <TiltCard key={i} className="bg-white border-white/40 p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-16 h-16 object-contain mb-4"
                    style={{ transform: "translateZ(20px)" }}
                  />
                  <h5 className="text-lg font-semibold text-gray-900">
                    {v.title}
                  </h5>
                  <p className="mt-2 text-sm text-gray-600">{v.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Closing strapline */}
        <div className="mt-14 flex items-center justify-center">
          <div className="rounded-2xl border px-5 py-3 bg-white/70 backdrop-blur shadow-sm text-center">
            <p className="text-sm md:text-base text-gray-800">
              Every pixel. Every workflow. Every model. —{" "}
              <span
                className="font-semibold"
                style={{ color: Colors.Primary_font }}
              >
                Design-first
              </span>
              ,{" "}
              <span
                className="font-semibold"
                style={{ color: Colors.Primary_font }}
              >
                User-first
              </span>
              ,{" "}
              <span
                className="font-semibold"
                style={{ color: Colors.Primary_font }}
              >
                AI-first
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueShowcase;
