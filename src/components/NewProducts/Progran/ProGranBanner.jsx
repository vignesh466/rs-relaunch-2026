"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProGranBanner() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleGetStarted = () => {
    if (email) {
      router.push(`/book-demo?email=${encodeURIComponent(email)}`);
    } else {
      router.push("/book-demo");
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pb-16 md:pt-16 md:pb-40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Heading */}
          <div className="order-1 lg:order-1">
            <h1
              className="text-[clamp(32px,3.5vw,60px)] sm:text-[clamp(34px,3.5vw,60px)] leading-[1.05] font-normal"
              style={{ color: "#5563FF", letterSpacing: "-0.015em" }}
            >
              Program Governance,
              <br />
              REIMAGINED
            </h1>
          </div>

          {/* GIF - shows after heading on mobile, spans right column on desktop */}
          <div className="order-2 lg:order-2 lg:row-span-2 relative flex justify-center lg:justify-end">
            {/* Fixed aspect ratio container to prevent layout shift */}
            <div
              className="relative w-full max-w-[720px] lg:max-w-[860px]"
              style={{ aspectRatio: "16 / 9" }}
            >
              <img
                src="/assets/ProGran/Newpage/banner.svg"
                alt="Program Governance Platform Interface"
                width="860"
                height="484"
                fetchPriority="high"
                decoding="async"
                className="
                  absolute inset-0
                  w-full h-full
                  object-contain
                  lg:scale-[1.15]
                  xl:scale-[1.25]
                  origin-center
                "
              />
            </div>
          </div>

          {/* Description and CTA */}
          <div className="order-3 lg:order-3 space-y-6 sm:space-y-8">
            <p
              className="text-[clamp(15px,1.1vw,18px)] leading-[1.65] max-w-xl"
              style={{ color: "#333333" }}
            >
              AI-powered management suite to align every grant and program with
              your global mission.
            </p>

            {/* Email input container - 408x44 */}
            <div
              className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-stretch sm:items-center border-2 rounded-xl overflow-hidden max-w-[408px] bg-white"
              style={{ borderColor: "#5563ff" }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGetStarted()}
                className="flex-1 px-4 py-3 sm:py-0 text-[13px] sm:text-[14px] focus:outline-none placeholder:text-slate-400 bg-white min-w-0 sm:h-[44px]"
              />
              <button
                onClick={handleGetStarted}
                className="text-white text-[13px] sm:text-[14px] font-semibold transition-colors whitespace-nowrap hover:opacity-90 rounded-lg sm:rounded-xl m-1 py-2 sm:py-0 sm:w-[184px] sm:h-[36px]"
                style={{ backgroundColor: "#5563ff" }}
              >
                Book a demo now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
