import React from "react";

const ProGranVerifyImpact = () => {
  return (
    <div className="w-full bg-[#1C1C1C] py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-semibold text-white mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            Cleanse and unify data with AI.
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg px-2">
            Stop toggling between tabs. Get total visibility into every program,
            grant, and KPI on a single, unified dashboard.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col items-center space-y-5">
          {/* Top Large Card */}
          <div className="bg-[#F4F4F4] rounded-2xl shadow-lg w-full max-w-[1120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-4 md:p-6 lg:p-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
                  Strategic clarity on every impact pathway.
                </h3>
                <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
                  Create, visualize, and track your Theory of Change (TOC)
                  across all programs. Monitor assumptions and outcomes in
                  real-time, ensuring your portfolio stays aligned with your
                  mission and the UN SDGs.
                </p>
              </div>
              <div className="flex justify-center items-center min-h-[200px] md:min-h-[280px] lg:min-h-[320px]">
                <img
                  src="/assets/ProGran/Newpage/impact_1.svg"
                  alt="Strategic clarity interface"
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
                  Democratize program intelligence.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-[14px] md:text-[15px] lg:text-[16px]">
                  Interactive graphics. Whether you need to know what's
                  happening in each village, at each programme stage, or for
                  each specific activity—just speak in plain English and AI-R
                  will fetch the insights you need.
                </p>
                <div className="flex justify-center items-center mt-4 min-h-[180px] md:min-h-[200px]">
                  <img
                    src="/assets/ProGran/Newpage/impact_2.svg"
                    alt="Program intelligence interface"
                    className="rounded-lg object-contain w-full h-auto max-w-[444px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#F4F4F4] rounded-2xl shadow-lg w-full">
              <div className="flex flex-col p-4 md:p-6">
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
                  Seamlessly link planning to measurement.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-[14px] md:text-[15px] lg:text-[16px]">
                  Once you plan between program activities and actual
                  outcomes—data is captured, you see dashboards for each KPI
                  tagged to that activity. Reporting is automatically built
                  without a single extra line of Excel formulas.
                </p>
                <div className="flex justify-center items-center mt-4 min-h-[180px] md:min-h-[200px]">
                  <img
                    src="/assets/ProGran/Newpage/impact_3.svg"
                    alt="Planning and measurement interface"
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

export default ProGranVerifyImpact;
