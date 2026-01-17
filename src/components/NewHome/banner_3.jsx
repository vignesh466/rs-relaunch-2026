"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner3() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleGetStarted = () => {
    if (email) {
      router.push(`/start-trial?email=${encodeURIComponent(email)}`);
    } else {
      router.push("/start-trial");
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[640px_1fr] lg:grid-rows-[auto_auto] gap-12 lg:gap-16 items-center">
          {/* Heading - Mobile: order-1, Desktop: col-1 row-1 */}
          <div className="order-1 lg:row-start-1 lg:col-start-1">
            <h1
              className="text-[clamp(32px,3.5vw,60px)] sm:text-[clamp(34px,3.5vw,60px)] leading-[1.05] font-bold"
              style={{ color: "#2D1B69", letterSpacing: "-0.015em" }}
            >
              The most intelligent
              <br />
              impact management
              <br />
              platform. Period.
            </h1>
          </div>

          {/* Video - Mobile: order-2, Desktop: col-2 row-span-2 */}
          <div className="order-2 lg:row-start-1 lg:row-span-2 lg:col-start-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]">
              {/* Tablet frame */}
              <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] p-[8px] sm:p-[12px] shadow-2xl">
                {/* Inner bezel */}
                <div className="relative rounded-[24px] sm:rounded-[28px] bg-[#0d0d0d] p-[3px] sm:p-[4px]">
                  {/* Camera notch */}
                  <div className="absolute top-[6px] sm:top-[8px] left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1a1a1a] border border-[#333] z-10" />

                  {/* Screen */}
                  <div className="rounded-[21px] sm:rounded-[24px] overflow-hidden bg-black">
                    <div className="aspect-video">
                      <img
                        src="/assets/new home page assets/banner.gif"
                        alt="Product demo"
                        className="w-full h-full object-contain bg-black"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description and CTA - Mobile: order-3, Desktop: col-1 row-2 */}
          <div className="order-3 lg:row-start-2 lg:col-start-1 space-y-6 sm:space-y-8 max-w-xl">
            <p
              className="text-[clamp(15px,1.1vw,18px)] leading-[1.65]"
              style={{ color: "#4B5563" }}
            >
              AI powered Grant and Program management, Data Collection and
              impact analytics.
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
                Get started for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
