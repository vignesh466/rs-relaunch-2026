import React from "react";

const ProGranEvidence = () => {
  return (
    <div className="w-full bg-[#222222] py-12 md:py-18">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-bold text-white mb-3 text-[28px] md:text-[38px] lg:text-[50px] leading-tight">
            Governance that runs on autopilot.
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg px-2">
            Ensure financial discipline and timely commitments across your
            entire organization without the manual follow-ups.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8 md:mb-12">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div
              className="bg-[#F4F4F4] rounded-2xl shadow-lg flex items-center justify-center p-6"
              style={{ width: "100%", height: "440px", maxWidth: "360px" }}
            >
              <img
                src="/assets/ProGran/Newpage/evidence_1.svg"
                alt="Real-time budget monitoring"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-white mt-4 md:mt-5 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Real-time budget vs. actuals monitoring.
            </h3>
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
              Maintain total financial discipline. Monitor spend against budgets
              in real-time to prevent overspending and enable proactive
              reallocation of funds across programs when needs change.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <div
              className="bg-[#F4F4F4] rounded-2xl shadow-lg flex items-center justify-center p-6"
              style={{ width: "100%", height: "440px", maxWidth: "360px" }}
            >
              <img
                src="/assets/ProGran/Newpage/evidence_2.svg"
                alt="Automated reminders and tracking"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-white mt-4 md:mt-5 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Automated reminders and progress tracking.
            </h3>
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
              Eliminate the "chasing" of status updates. Automated workflows
              monitor progress and send reminders for key commitments, providing
              an early warning system for potential delays before they impact
              your results.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <div
              className="bg-[#F4F4F4] rounded-2xl shadow-lg flex items-center justify-center p-6"
              style={{ width: "100%", height: "440px", maxWidth: "360px" }}
            >
              <img
                src="/assets/ProGran/Newpage/evidence_3.svg"
                alt="Role-based views"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-white mt-4 md:mt-5 mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px]">
              Role-based views for every stakeholder.
            </h3>
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
              Give everyone the right level of detail. From the Board and
              funders to program teams, each stakeholder gets a tailored view of
              the metrics that matter most—reducing reporting burden while
              maintaining absolute transparency.
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

export default ProGranEvidence;
