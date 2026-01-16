import React from "react";
import Image from "next/image";

const ProGranVisibility = () => {
  return (
    <div className="w-full bg-white py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-bold text-[#363168] mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            The Operating System for high-impact grants.
          </h2>
          <p className="text-[#3b3b3b] text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-2">
            Move from fragmented files to real-time, comprehensive tracking that
            drives accountability and demonstrates results.
          </p>
        </div>

        {/* Top Section - Real-time impact roll-up */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#363168] mb-3">
                SDG and KPI alignment built-in.
              </h3>
              <p className="text-[#3b3b3b] text-sm md:text-base leading-relaxed">
                Automatically map your programs, outcomes and indicators to the
                Sustainable Development Goals (SDGs) that actually link to the
                data—no manual tagging needed.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/ProGran/Newpage/visibility_1.svg"
                alt="SDG and KPI alignment interface"
                width={480}
                height={320}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Bottom Two Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Card */}
          <div
            className="bg-[#F4F2F0] rounded-2xl p-6 flex flex-col"
            style={{ width: "544px", height: "463px", maxWidth: "100%" }}
          >
            <h3 className="font-bold text-[#363168] mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Evidence-based program documentation.
            </h3>
            <p className="text-[#3b3b3b] leading-relaxed mb-4 md:mb-5 text-[14px] md:text-[15px] lg:text-[16px]">
              Easily discover & collect the best-verified data to convincingly
              justify every intervention, activity or programme. Synthesise your
              own KPIs, build comprehensive case studies that link input spend
              to impact—without spending months on research.
            </p>
            <div className="flex justify-center items-center flex-1">
              <Image
                src="/assets/ProGran/Newpage/visibility_2.svg"
                alt="Evidence-based documentation interface"
                width={274}
                height={243}
                className="rounded-lg shadow-md object-contain w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>

          {/* Right Card */}
          <div
            className="bg-[#F4F2F0] rounded-2xl p-6 flex flex-col"
            style={{ width: "544px", height: "463px", maxWidth: "100%" }}
          >
            <h3 className="font-bold text-[#363168] mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Audit-ready transparency.
            </h3>
            <p className="text-[#3b3b3b] leading-relaxed mb-4 md:mb-5 text-[14px] md:text-[15px] lg:text-[16px]">
              Safeguard your impact. Verifiable record of every program's
              lifecycle. With user-specific permissions and read-only exports.
              No one edits numbers or cherry-picks data after the fact.
            </p>
            <div className="flex justify-center items-center flex-1">
              <Image
                src="/assets/ProGran/Newpage/visibility_3.svg"
                alt="Audit-ready transparency interface"
                width={435}
                height={305}
                className="rounded-lg shadow-md object-contain w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProGranVisibility;
