import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Colors from "../../constants/Color";

const PRODUCTS = {
  surver: {
    name: "Surve-R",
    tagline: "Mobile-first data collection. Offline, multilingual, role-aware.",
    chip: "Surve-R",
    video: "/Surve_r_AI_nobg_02.mp4",
  },
  driver: {
    name: "Drive-R",
    tagline: "AI validation & transformations. Connect sources, trust outputs.",
    chip: "Drive-R",
    // video: DriveRVideo,
  },
  progran: {
    name: "ProGran",
    tagline:
      "Programme & grant tracking. KPIs, SDGs, audit trails—board-ready.",
    chip: "ProGran",
    // video: ProGranVideo,
  },
};

const Tab = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active ? "bg-white shadow" : "bg-white/60 hover:bg-white"
    }`}
    style={{
      color: active ? Colors.Primary_font : "#0f172a",
      border: `1px solid ${Colors.Primary_font}22`,
    }}
  >
    {children}
  </button>
);

const Banner_2 = () => {
  const [active, setActive] = useState("surver");
  const product = PRODUCTS[active];

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f4f3ef" }}
      aria-label="Relific AI-first suite hero"
    >
      {/* Subtle corner glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-[24rem] w-[24rem] rounded-full blur-3xl opacity-20"
          style={{ background: Colors.Primary_font }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-15"
          style={{ background: "#7c3aed" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 md:pt-24 pb-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1
            className="leading-tight font-semibold"
            style={{ color: Colors.Primary_font }}
          >
            <span className="block text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px]">
              Relific — AI-First Impact Suite
            </span>
          </h1>
          <p
            className="mt-3 max-w-3xl mx-auto text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed"
            style={{ color: Colors.Font_3 }}
          >
            Purpose-built for NGOs, CSR teams, foundations and social
            enterprises. Collect on the ground, transform with AI, and report
            with confidence—end to end.
          </p>
        </motion.div>

        {/* CTAs */}
        <div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Link
            href="/allproducts"
            className="w-full sm:w-auto px-7 md:px-9 py-3.5 md:py-4 rounded-lg shadow-lg text-sm md:text-base lg:text-lg font-medium transform hover:scale-[1.02] active:scale-95"
            style={{
              background: Colors.Primary_font,
              color: Colors.Font_4,
              boxShadow: "0 10px 22px rgba(85,99,255,0.22)",
              textDecoration: "none",
            }}
          >
            Explore the Suite
          </Link>

          <Link
            href="/demo-videos"
            className="w-full sm:w-auto px-7 md:px-9 py-3.5 md:py-4 rounded-lg border-2 text-sm md:text-base lg:text-lg font-medium transform hover:scale-[1.02] active:scale-95"
            style={{
              borderColor: Colors.Primary_font,
              color: Colors.Primary_font,
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
          >
            Watch Demos
          </Link>
        </div>

        {/* AI value line */}
        <p className="mt-3 text-center text-xs md:text-sm text-black/65">
          AI validation · Natural-language insights · Predictive KPIs · Offline
          collection
        </p>

        {/* Product Tabs */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
          <Tab active={active === "surver"} onClick={() => setActive("surver")}>
            Surve-R
          </Tab>
          <Tab active={active === "driver"} onClick={() => setActive("driver")}>
            Drive-R
          </Tab>
          <Tab
            active={active === "progran"}
            onClick={() => setActive("progran")}
          >
            ProGran
          </Tab>
        </div>

        {/* Product Subline */}
        <div className="mt-3 text-center">
          <p className="text-sm md:text-base text-black/75">
            {product.tagline}
          </p>
        </div>

        {/* Media frame (minimal, shared for all products) */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-9 md:mt-11"
        >
          <div className="relative mx-auto w-full max-w-6xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 left-4 z-10">
              <span
                className="text-[11px] md:text-xs font-medium px-3 py-1.5 rounded-full shadow"
                style={{
                  backgroundColor: Colors.Primary_font,
                  color: Colors.Font_4,
                }}
              >
                {product.chip}
              </span>
            </div>

            <div className="aspect-video bg-black flex items-center justify-center">
              {product.video ? (
                <video
                  className="w-full h-full object-contain bg-black"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${product.name} demo`}
                >
                  <source src={product.video} type="video/mp4" />
                </video>
              ) : (
                <div className="text-white/70 text-sm sm:text-base px-6">
                  {product.name} demo coming soon
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Social/Impact reassurance */}
        <p className="mt-8 text-center text-xs md:text-sm text-black/60">
          Built for the social & impact sector · SDG/IRIS+ alignment ·
          Audit-ready by design
        </p>
      </div>
    </section>
  );
};

export default Banner_2;
