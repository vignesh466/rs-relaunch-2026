import React from "react";
import Image from "next/image";

const DriveRVisibility = () => {
  return (
    <div className="w-full bg-white py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-bold text-[#363168] mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            Prove your impact with evidence-based narratives.
          </h2>
          <p className="text-[#3b3b3b] text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-2">
            Go beyond "outputs" to demonstrate true social impact and
            attribution to your funders and stakeholders.
          </p>
        </div>

        {/* Top Section - Real-time impact roll-up */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#363168] mb-3">
                Calculate what matters.
              </h3>
              <p className="text-[#3b3b3b] text-sm md:text-base leading-relaxed">
                Automate the calculation of attribution, counterfactuals and
                aggregate impact indicators. Craft evidence-based reports and
                performance dashboards that showcase your organization's impact.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/drive_r/Newpage/visibility_1.svg"
                alt="Calculate impact metrics"
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
              Evidence-based storytelling.
            </h3>
            <p className="text-[#3b3b3b] leading-relaxed mb-4 md:mb-5 text-[14px] md:text-[15px] lg:text-[16px]">
              Imbed your insights into narrative-rich reports, with interactive
              graphics that surface the evidence for your greatest impact
              achievements. Track causal pathways and tell the story behind the
              change with evidence backed proof.
            </p>
            <div className="flex justify-center items-center flex-1">
              <Image
                src="/assets/drive_r/Newpage/visibility_2.svg"
                alt="Evidence-based reports"
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
              A single source of truth.
            </h3>
            <p className="text-[#3b3b3b] leading-relaxed mb-4 md:mb-5 text-[14px] md:text-[15px] lg:text-[16px]">
              Funders can be assured that the information presented has a
              consistent audit trail and is the highest fidelity representation
              of all your impact data. Dashboards and reports are underpinned by
              a versioned single source of truth centralized for your entire
              organization's impact.
            </p>
            <div className="flex justify-center items-center flex-1">
              <Image
                src="/assets/drive_r/Newpage/visibility_3.svg"
                alt="Single source of truth"
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

export default DriveRVisibility;
