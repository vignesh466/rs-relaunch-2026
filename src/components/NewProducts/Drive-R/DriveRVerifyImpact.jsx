import React from "react";

const DriveRVerifyImpact = () => {
  return (
    <div className="w-full bg-[#1C1C1C] py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-semibold text-white mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            Cleanse and unify data with AI.
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg px-2">
            Connect your entire ecosystem to a single source of truth, so you
            can stop cleaning data and start using it.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col items-center space-y-5">
          {/* Top Large Card */}
          <div className="bg-[#F4F4F4] rounded-2xl shadow-lg w-full max-w-[1120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-4 md:p-6 lg:p-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
                  Break down silos with a unified view.
                </h3>
                <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
                  Connect directly to Surve R, ProGran, and your external
                  databases. Drive R merges field data, program metrics, and
                  global benchmarks into one holistic narrative—no technical
                  schema knowledge required.
                </p>
              </div>
              <div className="flex justify-center items-center min-h-[200px] md:min-h-[280px] lg:min-h-[320px]">
                <img
                  src="/assets/drive_r/Newpage/impact_1.svg"
                  alt="Unified data view interface"
                  className="rounded-lg object-contain w-full h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 w-full max-w-[1120px]">
            {/* Left Card */}
            <div className="bg-[#F4F4F4] rounded-2xl shadow-lg w-full">
              <div className="flex flex-col p-4 md:p-6">
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
                  Faster data preparation.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-[14px] md:text-[15px] lg:text-[16px]">
                  Use natural language instructions to clean and transform your
                  data. Non-technical users can independently prepare datasets
                  for analysis, eliminating the bottleneck between the data and
                  the decision.
                </p>
                <div className="flex justify-center items-center mt-4 min-h-[180px] md:min-h-[200px]">
                  <img
                    src="/assets/drive_r/Newpage/impact_2.svg"
                    alt="Data preparation interface"
                    className="rounded-lg object-contain w-full h-auto max-w-[444px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#F4F4F4] rounded-2xl shadow-lg w-full">
              <div className="flex flex-col p-4 md:p-6">
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
                  Trustworthy data with automated validation.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-[14px] md:text-[15px] lg:text-[16px]">
                  Let Drive R be your first line of defense. Built-in anomaly
                  detection and automated validation rules catch errors and
                  outliers before they propagate through your analysis, ensuring
                  every decision is backed by high-fidelity data.
                </p>
                <div className="flex justify-center items-center mt-4 min-h-[180px] md:min-h-[200px]">
                  <img
                    src="/assets/drive_r/Newpage/impact_3.svg"
                    alt="Data validation interface"
                    className="rounded-lg object-contain w-full h-auto max-w-[444px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveRVerifyImpact;
