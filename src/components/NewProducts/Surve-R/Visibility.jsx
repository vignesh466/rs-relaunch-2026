import React from "react";

const Visibility = () => {
  return (
    <div className="w-full bg-white py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-bold text-[#363168] mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            Total visibility from person to ecosystem.
          </h2>
          <p className="text-[#3b3b3b] text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-2">
            Roll up data automatically to see the impact created for a
            particular beneficiary and the community at large.
          </p>
        </div>

        {/* Top Section - Real-time impact roll-up */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#363168] mb-3">
                Real-time impact roll-up
              </h3>
              <p className="text-[#3b3b3b] text-sm md:text-base leading-relaxed">
                Eliminate the lag between the field and the boardroom. Watch
                individual beneficiary data roll up into community and
                ecosystem-level insights the second it is validated.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/SurveR/Newpage/visibility_1.svg"
                alt="Real-time impact roll-up interface"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Bottom Two Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Card - Eliminate manual data cleaning */}
          <div
            className="bg-[#F4F2F0] rounded-2xl p-6 flex flex-col"
            style={{ width: "544px", height: "463px", maxWidth: "100%" }}
          >
            <h3 className="font-bold text-[#363168] mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Eliminate manual data cleaning.
            </h3>
            <p className="text-[#3b3b3b] leading-relaxed mb-4 md:mb-5 text-[14px] md:text-[15px] lg:text-[16px]">
              By enforcing high-quality data at the point of entry, Surve R
              removes the need for weeks of manual cleaning. Upload multiple
              records or legacy data at once to maintain a single, clean source
              of truth.
            </p>
            <div className="flex justify-center items-center flex-1">
              <img
                src="/assets/SurveR/Newpage/visibility_2.svg"
                alt="Data cleaning interface"
                className="rounded-lg shadow-md object-contain w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>

          {/* Right Card - End-to-end beneficiary tracking */}
          <div
            className="bg-[#F4F2F0] rounded-2xl p-6 flex flex-col"
            style={{ width: "544px", height: "463px", maxWidth: "100%" }}
          >
            <h3 className="font-bold text-[#363168] mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              End-to-end beneficiary tracking.
            </h3>
            <p className="text-[#3b3b3b] leading-relaxed mb-4 md:mb-5 text-[14px] md:text-[15px] lg:text-[16px]">
              Establish permanent relationships between beneficiaries,
              households, and communities. Eliminate duplicates and track
              longitudinal progress to see the full, long-term impact of your
              intervention.
            </p>
            <div className="flex justify-center items-center flex-1">
              <img
                src="/assets/SurveR/Newpage/visibility_3.svg"
                alt="Beneficiary tracking interface"
                className="rounded-lg shadow-md object-contain w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
