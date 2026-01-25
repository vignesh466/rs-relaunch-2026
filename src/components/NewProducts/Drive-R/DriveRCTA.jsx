import React from "react";

const DriveRCTA = () => {
  return (
    <div className="w-full bg-white py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2
            className="font-bold text-[#363168] mb-3"
            style={{ fontSize: "50px" }}
          >
            Turn your impact into intelligence.
          </h2>

          {/* Subtext */}
          <p
            className="text-[#3b3b3b] mb-6 max-w-3xl mx-auto"
            style={{ fontSize: "16px" }}
          >
            Automate the heavy lifting of cleaning, unifying and analyzing your
            data, and focus on the insights that scale your mission.
          </p>

          {/* Email Input */}
          <div className="flex justify-center">
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
      </div>
    </div>
  );
};

export default DriveRCTA;
