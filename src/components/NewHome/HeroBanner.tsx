"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroBanner() {
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
        <div className="grid grid-cols-1 lg:grid-cols-[640px_1fr] gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-10 sm:space-y-12">
            {/* Heading container aligned with top of image */}
            <div>
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

            {/* Description container aligned with bottom of image */}
            <div className="space-y-6 sm:space-y-8 max-w-xl">
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

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end ">
            <img
              src="/assets/new home page assets/banner_home.svg"
              alt="Relific Platform Dashboard"
              className="w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
