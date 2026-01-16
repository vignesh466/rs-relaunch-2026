import React from "react";
import Image from "next/image";

const ProGranBanner = () => {
  return (
    <div className="w-full bg-[#F5F7FA] py-6 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-lg w-full lg:w-auto">
            <h1 className="font-bold text-[#2D3250] mb-4 md:mb-5 leading-tight text-[32px] md:text-[42px] lg:text-[50px]">
              Program Governance,
              <br />
              <span className="text-[#2D3250]">REIMAGINED</span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-5 md:mb-6 lg:hidden">
              AI-powered management suite to align every grant and program with
              your global mission.
            </p>

            {/* Image - Mobile Only */}
            <div className="flex justify-center lg:hidden mb-6">
              <div
                className="w-full max-w-[320px]"
                style={{
                  height: "auto",
                  aspectRatio: "435/554",
                  padding: "16px",
                }}
              >
                <Image
                  src="/assets/ProGran/Newpage/banner.svg"
                  alt="Program Governance Platform Interface"
                  width={316}
                  height={506}
                  className="rounded-lg w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            <p className="hidden lg:block text-sm md:text-base lg:text-lg text-gray-600 mb-5 md:mb-6">
              AI-powered management suite to align every grant and program with
              your global mission.
            </p>

            {/* Email Form */}
            <div className="flex justify-start">
              <div
                className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-stretch sm:items-center border-2 rounded-xl overflow-hidden max-w-[408px] bg-white"
                style={{ borderColor: "#5563ff" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 sm:py-0 text-[13px] sm:text-[14px] focus:outline-none placeholder:text-slate-400 bg-white min-w-0 sm:h-[44px]"
                />
                <button
                  className="text-white text-[13px] sm:text-[14px] font-semibold transition-colors whitespace-nowrap hover:opacity-90 rounded-lg sm:rounded-xl m-1 py-2 sm:py-0 sm:w-[184px] sm:h-[36px]"
                  style={{ backgroundColor: "#5563ff" }}
                >
                  Get started for free
                </button>
              </div>
            </div>
          </div>

          {/* Right Image - Desktop Only */}
          <div className="hidden lg:flex flex-1 justify-center lg:justify-end w-full">
            <div
              className="w-full max-w-[435px]"
              style={{
                height: "auto",
                aspectRatio: "435/554",
                padding: "24px",
              }}
            >
              <Image
                src="/assets/ProGran/Newpage/banner.svg"
                alt="Program Governance Platform Interface"
                width={316}
                height={506}
                className="rounded-lg w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProGranBanner;
