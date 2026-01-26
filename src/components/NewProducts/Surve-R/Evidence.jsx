import React from "react";

const Evidence = () => {
  return (
    <div className="w-full bg-[#222222] py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-bold text-white mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            Evidence-backed collection in any environment.
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg px-2">
            Let field teams capture rich data, work offline, and sync
            automatically without disrupting the mission.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
          {/* Left Card */}
          <div className="flex flex-col">
            <div
              className="bg-[#F4F4F4] rounded-2xl shadow-lg flex items-center justify-center p-6"
              style={{ width: "544px", height: "440px", maxWidth: "100%" }}
            >
              <img
                src="/assets/SurveR/Newpage/evidence_1.svg"
                alt="Geo tag and location verification"
                className="rounded-2xl object-contain w-auto h-auto max-w-full max-h-full"
              />
            </div>
            <h3 className="font-semibold text-white mt-4 md:mt-5 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Rich contextual evidence beyond text
            </h3>
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
              Go beyond simple checkboxes. Capture photos, videos, audio, and
              digital signatures. Use GPS geotagging for location verification,
              providing bulletproof visual evidence for your impact reporting.
            </p>
          </div>

          {/* Right Card */}
          <div className="flex flex-col">
            <div
              className="bg-[#F4F4F4] rounded-2xl shadow-lg flex items-center justify-center p-6"
              style={{ width: "544px", height: "440px", maxWidth: "100%" }}
            >
              <img
                src="/assets/SurveR/Newpage/evidence_2.svg"
                alt="Complex relationships capture interface"
                className="rounded-lg object-contain w-auto h-auto max-w-full max-h-full"
              />
            </div>
            <h3 className="font-semibold text-white mt-4 md:mt-5 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Capture complex relationships with ease
            </h3>
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
              Stop using multiple forms for a single unit. Capture complex
              relational data-like an entire household roster and repeated
              observations-within a single, dynamic form that adapts based on
              previous answers.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="bg-[#2D2D2D] rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-700">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-4xl md:text-5xl lg:text-6xl text-gray-500 leading-none flex-shrink-0">
                "
              </div>
              <div>
                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-3 md:mb-4">
                  As an extension worker, I previously had to visit farmers
                  fields, record the problems, and then inform scientists to
                  provide advice without thoroughly considering factors like
                  climate and the history of pesticide sprays. With Relific, I
                  can now collect detailed data directly from the field,
                  including photos and GPS locations, which allows scientists to
                  give more accurate and timely recommendations.
                </p>
                <p className="text-gray-400 text-sm md:text-base lg:text-lg font-medium">
                  — Mr. Yellappa, Kalike
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidence;
