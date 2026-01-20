import React from "react";

export default function ProductsShowcase() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] leading-tight font-normal mb-4 text-left"
            style={{ color: "#5563FF" }}
          >
            Replace spreadsheets, forms and other
            <br className="hidden md:block" />
            point solutions with Relific's AI powered suite.
          </h2>
          <p
            className="text-[16px] md:text-[18px] lg:text-[20px] text-left"
            style={{ color: "#333333" }}
          >
            The only platform designed with AI first approach so that you can
            measure and even amplify impact.
          </p>
        </div>

        {/* 4 Product Cards - exact dimensions 256x448 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* Surve-R Card */}
          <a
            href="/surve_r"
            className="rounded-2xl p-4 lg:p-6 flex flex-col w-full lg:w-[256px] h-auto lg:h-[448px] lg:mx-auto cursor-pointer hover:shadow-lg transition-all duration-300 relative group"
            style={{
              backgroundColor: "#EFF5FB",
            }}
          >
            {/* Arrow Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 rounded-2xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
              style={{ paddingBottom: "80px" }}
            >
              <svg
                className="w-12 h-12 text-blue opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            <div className="flex-shrink-0 relative z-10">
              <h3
                className="text-[20px] font-semibold mb-2"
                style={{ color: "#5563FF" }}
              >
                Surve-R
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-3"
                style={{ color: "#4B5563" }}
              >
                Forms that build themselves from a single sentence
              </p>
            </div>
            <div className="flex-grow flex items-end justify-center mt-6 relative z-10">
              <img
                src="/assets/new home page assets/surver_snap.png"
                alt="Surve-R"
                className="w-full object-contain"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </a>

          {/* Drive-R Card */}
          <a
            href="/drive_r"
            className="rounded-2xl p-4 lg:p-6 flex flex-col w-full lg:w-[256px] h-auto lg:h-[448px] lg:mx-auto cursor-pointer hover:shadow-lg transition-all duration-300 relative group"
            style={{
              backgroundColor: "#F4F2F0",
            }}
          >
            {/* Arrow Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 rounded-2xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
              style={{ paddingBottom: "80px" }}
            >
              <svg
                className="w-12 h-12 text-blue opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            <div className="flex-shrink-0 relative z-10">
              <h3
                className="text-[20px] font-semibold mb-2"
                style={{ color: "#5563FF" }}
              >
                Drive-R
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-3"
                style={{ color: "#333333" }}
              >
                Insightworthy data on your fingertips
              </p>
            </div>
            <div className="flex-grow flex items-end justify-center mt-6 relative z-10">
              <img
                src="/assets/new home page assets/driver_snap.png"
                alt="Drive-R"
                className="w-full object-contain"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </a>

          {/* Programs Card */}
          <a
            href="/progran"
            className="rounded-2xl p-4 lg:p-6 flex flex-col w-full lg:w-[256px] h-auto lg:h-[448px] lg:mx-auto cursor-pointer hover:shadow-lg transition-all duration-300 relative group"
            style={{
              backgroundColor: "#F0F2F4",
            }}
          >
            {/* Arrow Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 rounded-2xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
              style={{ paddingBottom: "80px" }}
            >
              <svg
                className="w-12 h-12 text-blue opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            <div className="flex-shrink-0 relative z-10">
              <h3
                className="text-[20px] font-semibold mb-2"
                style={{ color: "#5563FF" }}
              >
                ProGran
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-3"
                style={{ color: "#333333" }}
              >
                Bird's eye view of all your programs
              </p>
            </div>
            <div className="flex-grow flex items-end justify-center mt-6 relative z-10">
              <img
                src="/assets/new home page assets/programs_snap.png"
                alt="Programs"
                className="w-full object-contain"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </a>

          {/* Voluntee-R Card */}
          <a
            href="/comingsoon"
            className="rounded-2xl p-4 lg:p-6 flex flex-col w-full lg:w-[256px] h-auto lg:h-[448px] lg:mx-auto cursor-pointer hover:shadow-lg transition-all duration-300 relative group"
            style={{
              backgroundColor: "#F5F5F5",
            }}
          >
            {/* Arrow Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 rounded-2xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
              style={{ paddingBottom: "80px" }}
            >
              <svg
                className="w-12 h-12 text-blue opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            <div className="flex-shrink-0 relative z-10">
              <h3
                className="text-[20px] font-semibold mb-2"
                style={{ color: "#5563FF" }}
              >
                Voluntee-R
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-3"
                style={{ color: "#333333" }}
              >
                Amplifying impact through your workforce
              </p>
            </div>
            <div className="flex-grow flex items-end justify-center mt-6 relative z-10">
              <img
                src="/assets/new home page assets/volunteer_snap.png"
                alt="Volunteer-R"
                className="w-full object-contain"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
