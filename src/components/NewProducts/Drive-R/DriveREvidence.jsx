import React from "react";

const DriveREvidence = () => {
  return (
    <div className="w-full bg-[#222222] py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-bold text-white mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            Visualize impact with drag-and-drop simplicity.
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg px-2">
            Transform complex datasets into compelling narratives and visual
            dashboards using AI in seconds, not days.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8 md:mb-12">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div
              className="bg-[#F4F4F4] rounded-2xl shadow-lg flex items-center justify-center p-6"
              style={{ width: "100%", height: "440px", maxWidth: "360px" }}
            >
              <img
                src="/assets/drive_r/Newpage/evidence_1.svg"
                alt="Coding is now optional"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-white mt-4 md:mt-5 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Coding is now optional.
            </h3>
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
              Create professional-grade charts and dashboards using a simple
              drag-and-drop interface. Your teams can design custom visual
              representations that everyone on your team can understand at a
              glance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <div
              className="bg-[#F4F4F4] rounded-2xl shadow-lg flex items-center justify-center p-6"
              style={{ width: "100%", height: "440px", maxWidth: "360px" }}
            >
              <img
                src="/assets/drive_r/Newpage/evidence_2.svg"
                alt="Democratize advanced analytics"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-white mt-4 md:mt-5 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Democratize advanced analytics.
            </h3>
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
              Ask complex questions to our AI using a conversational interface.
              From trend analysis to predictive modeling, Drive R makes
              sophisticated analytics accessible to every stakeholder,
              regardless of their technical background.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <div
              className="bg-[#F4F4F4] rounded-2xl shadow-lg flex items-center justify-center p-6"
              style={{ width: "100%", height: "440px", maxWidth: "360px" }}
            >
              <img
                src="/assets/drive_r/Newpage/evidence_3.svg"
                alt="Real-time benchmarking"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-white mt-4 md:mt-5 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Real-time benchmarking.
            </h3>
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
              Compare and benchmark performance across multiple programs
              simultaneously. Identify best practices and underperforming areas
              instantly with portfolio-wide dashboards that drive strategic
              resource allocation.
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
                  We reduced our data processing time from 2 weeks to 2 hours
                  while expanding our reach to 600% more beneficiaries. The AI
                  insights helped us discover that our literacy programs work
                  best when combined with nutrition support.
                </p>
                <p className="text-gray-400 text-sm md:text-base lg:text-lg font-medium">
                  — Rural Education Foundation, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveREvidence;
