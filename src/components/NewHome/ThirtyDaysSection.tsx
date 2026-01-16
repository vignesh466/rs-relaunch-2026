import React from "react";

export default function ThirtyDaysSection() {
  return (
    <section className="hidden md:block py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[24px] mb-3" style={{ color: "#6B7280" }}>
            Impact shouldn't wait six months for a dashboard.
          </p>
          <h2
            className="text-[50px] leading-tight font-normal mb-4"
            style={{ color: "#2D1B69" }}
          >
            Here's what you can achieve with
            <br className="hidden md:block" /> Relific in just 30 days.
          </h2>
        </div>

        {/* Timeline with Week markers */}
        <div className="mb-10 mt-10">
          <div className="flex justify-center items-center gap-[200px] mb-6">
            <button
              className="border text-[24px] font-medium flex items-center justify-center"
              style={{
                borderColor: "#7985FF",
                color: "#7985FF",
                width: "180px",
                height: "48px",
                borderWidth: "1px",
                borderRadius: "10px",
              }}
            >
              Week 0
            </button>
            <button
              className="border text-[24px] font-medium flex items-center justify-center"
              style={{
                borderColor: "#7985FF",
                color: "#7985FF",
                width: "180px",
                height: "48px",
                borderWidth: "1px",
                borderRadius: "10px",
              }}
            >
              Week 2
            </button>
            <button
              className="border text-[24px] font-medium flex items-center justify-center"
              style={{
                borderColor: "#7985FF",
                color: "#7985FF",
                width: "180px",
                height: "48px",
                borderWidth: "1px",
                borderRadius: "10px",
              }}
            >
              Week 4
            </button>
          </div>
          {/* Timeline line with dots */}
          <div className="relative flex items-center justify-center mb-8">
            <div
              className="absolute w-[700px] h-[2px]"
              style={{ backgroundColor: "#E5E7EB" }}
            ></div>
            <div className="absolute w-[700px] flex justify-between">
              <div
                className="w-3 h-3 rounded-full bg-white border-2"
                style={{ borderColor: "#D1D5DB" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-white border-2"
                style={{ borderColor: "#D1D5DB" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#7985FF" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Three Cards - 352x252 each */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Week 0 Card */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              width: "352px",
              height: "252px",
              backgroundColor: "#F2F3FF",
              borderColor: "#7985FF",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#5563FF" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h4
              className="font-semibold text-[16px] mb-2"
              style={{ color: "#2D1B69" }}
            >
              Get started.
            </h4>
            <p
              className="text-[14px] leading-relaxed"
              style={{ color: "#4B5563" }}
            >
              Upload your MoUs and Program Proposals. AI-R instantly builds your
              LFA, TOC, models, KPIs, and budget trackers.
            </p>
          </div>

          {/* Week 2 Card */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              width: "352px",
              height: "252px",
              backgroundColor: "#F2F3FF",
              borderColor: "#7985FF",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#5563FF" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4
              className="font-semibold text-[16px] mb-2"
              style={{ color: "#2D1B69" }}
            >
              Get comfortable.
            </h4>
            <p
              className="text-[14px] leading-relaxed"
              style={{ color: "#4B5563" }}
            >
              Deploy custom, multi-lingual forms to your field teams via
              Surve-R. Start collecting offline data with zero training lag.
            </p>
          </div>

          {/* Week 4 Card */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              width: "352px",
              height: "252px",
              backgroundColor: "#F2F3FF",
              borderColor: "#7985FF",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#5563FF" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4
              className="font-semibold text-[16px] mb-2"
              style={{ color: "#2D1B69" }}
            >
              Go live
            </h4>
            <p
              className="text-[14px] leading-relaxed"
              style={{ color: "#4B5563" }}
            >
              Present your first live, board-ready impact report. Total
              visibility from beneficiary to community, powered by AI-R.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[14px] mb-6" style={{ color: "#6B7280" }}>
            Switch to Relific (Implementation in 2-4 weeks. Not quarters.)
          </p>
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
    </section>
  );
}
