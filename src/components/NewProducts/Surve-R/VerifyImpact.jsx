import React from "react";

const VerifyImpact = () => {
  return (
    <div className="w-full bg-[#1C1C1C] py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-semibold text-white mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            Verify impact before data is captured.
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg px-2">
            Give field teams tools with validation built in, so you can prevent
            poor data quality at the source.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col items-center space-y-5">
          {/* Top Large Card */}
          <div className="bg-[#F4F4F4] rounded-2xl shadow-lg w-full max-w-[1120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-4 md:p-6 lg:p-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
                  Stay compliant with built-in logic.
                </h3>
                <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
                  Set mandatory fields, range checks, and skip logic all before
                  the survey begins. Reach diverse communities in their own
                  language-eliminating translation bias and ensuring cleaner
                  data with fewer N/As.
                </p>
              </div>
              <div className="flex justify-center items-center min-h-[200px] md:min-h-[280px] lg:min-h-[320px]">
                <img
                  src="/assets/SurveR/Newpage/impact_1.svg"
                  alt="Built-in logic compliance interface"
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
                  Automate form creation at scale with AI
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-[14px] md:text-[15px] lg:text-[16px]">
                  Create forms using natural language or reusable templates.
                  Whether it's a household roster or a community assessment,
                  Surve R cuts form creation time by 75%, allowing you to deploy
                  in one click.
                </p>
                <div className="flex justify-center items-center mt-4 min-h-[180px] md:min-h-[200px]">
                  <img
                    src="/assets/SurveR/Newpage/impact_left.svg"
                    alt="AI form creation interface"
                    className="rounded-lg object-contain w-full h-auto max-w-[444px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#F4F4F4] rounded-2xl shadow-lg w-full">
              <div className="flex flex-col p-4 md:p-6">
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
                  Speed up data approvals with Maker-Checker workflows
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-[14px] md:text-[15px] lg:text-[16px]">
                  All submissions come with automated quality checks. Route
                  forms for approval based on custom criteria, allowing
                  supervisors to review and validate evidence without risking
                  the integrity of the raw data.
                </p>
                <div className="flex justify-center items-center mt-4 min-h-[180px] md:min-h-[200px]">
                  <img
                    src="/assets/SurveR/Newpage/impact_right.svg"
                    alt="Maker-Checker workflow interface"
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

export default VerifyImpact;
