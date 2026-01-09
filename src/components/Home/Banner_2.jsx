import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Colors from "../../constants/Color";

const Banner_2 = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f4f3ef" }}
      aria-label="Relific Impact OS hero"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30"
          style={{ background: Colors.Primary_font }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20"
          style={{ background: "#7c3aed" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-12 md:pt-16 pb-8">
        {/* heading + copy */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p
            className="inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-widest uppercase mb-3"
            style={{
              borderColor: `${Colors.Primary_font}33`,
              color: Colors.Primary_font,
            }}
          >
            AI-first Impact Platform
          </p>

          <h1
            className="leading-tight font-semibold"
            style={{ color: Colors.Primary_font }}
          >
            <span className="block text-[30px] sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px]">
              Put AI to Work for Impact
            </span>
          </h1>

          <p
            className="mt-3 max-w-2xl mx-auto text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed"
            style={{ color: Colors.Font_3 }}
          >
            Plan, operate, and report programmes in minutes—not months. Turn
            fragmented spreadsheets into real-time intelligence with AI.
          </p>
        </motion.div>

        {/* CTAs */}
        <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Link
            href="/start-trial"
            className="px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 inline-block text-center"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
              border: `2px solid ${Colors.Primary_font}`,
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = Colors.Click)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = Colors.Primary_font)
            }
          >
            Start Your Free Trial
          </Link>

          <Link
            href="/demo-videos"
            className="px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 inline-block text-center"
            style={{
              backgroundColor: "transparent",
              color: Colors.Primary_font,
              border: `2px solid ${Colors.Primary_font}`,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = Colors.Primary_font;
              e.currentTarget.style.color = Colors.Font_4;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = Colors.Primary_font;
            }}
          >
            Watch Our Demos
          </Link>
        </div>

        <p className="mt-2 text-center text-xs md:text-sm text-black/60">
          Free for trials · No credit card required
        </p>

        {/* key badges - moved closer */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {[
            "AI Validation",
            "Offline Collection",
            "Real-time Dashboards",
            "Audit-ready",
          ].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-semibold border bg-white/70 backdrop-blur"
              style={{
                borderColor: `${Colors.Primary_font}22`,
                color: Colors.Primary_font,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* video frame - moved up */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-6 md:mt-8"
        >
          <div className="relative mx-auto w-full max-w-6xl">
            {/* bezel / gradient border */}
            <div className="relative rounded-[22px] p-[2px] bg-gradient-to-br from-black/10 via-black/5 to-white/0 shadow-2xl">
              <div className="rounded-[20px] bg-black overflow-hidden">
                {/* top bar mock */}
                <div className="h-9 bg-gradient-to-b from-black/60 to-black/30 flex items-center px-4 text-white/70 text-xs">
                  <div className="flex gap-1.5 mr-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span>Relific · Impact OS</span>
                </div>

                <div className="aspect-video">
                  <video
                    className="w-full h-full object-contain bg-black"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="Product demo video"
                  >
                    <source
                      src="/assets/SurveR/Surve_r_AI_nobg_02.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* trust strip (optional logos placeholders) */}
        <div className="mt-6 md:mt-8">
          <p className="text-center text-xs md:text-sm text-black/60 mb-2">
            Trusted by CSR teams, NGOs, and foundations delivering programmes at
            scale
          </p>
          <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 opacity-80">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-8 rounded-md bg-black/5 border"
                style={{ borderColor: `${Colors.Primary_font}11` }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_2;
