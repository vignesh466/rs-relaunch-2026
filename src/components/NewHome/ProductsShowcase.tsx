import React from "react";

export default function ProductsShowcase() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] leading-tight font-normal mb-4 text-left"
            style={{ color: "#2D1B69" }}
          >
            Replace spreadsheets, forms and other
            <br className="hidden md:block" />
            point solutions with Relific's AI powered suite.
          </h2>
          <p
            className="text-[16px] md:text-[18px] lg:text-[20px] text-left"
            style={{ color: "#4B5563" }}
          >
            The only platform designed with AI first approach so that you can
            measure and even amplify impact.
          </p>
        </div>

        {/* 4 Product Cards - exact dimensions 256x448 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* Surve-R Card */}
          <div
            className="rounded-2xl p-4 lg:p-6 flex flex-col w-full lg:w-[256px] h-auto lg:h-[448px] lg:mx-auto"
            style={{
              backgroundColor: "#EFF5FB",
            }}
          >
            <div className="flex-shrink-0">
              <h3
                className="text-[20px] font-semibold mb-2"
                style={{ color: "#2D1B69" }}
              >
                Surve-R
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-3"
                style={{ color: "#4B5563" }}
              >
                Forms that build themselves from a single sentence
              </p>
              <a
                href="/surve_r"
                className="text-[14px] inline-flex items-center gap-1 font-medium"
                style={{ color: "#5563FF" }}
              >
                Learn more →
              </a>
            </div>
            <div className="flex-grow flex items-end justify-center mt-6">
              <img
                src="/assets/new home page assets/surver_snap.png"
                alt="Surve-R"
                className="w-full object-contain"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>

          {/* Drive-R Card */}
          <div
            className="rounded-2xl p-4 lg:p-6 flex flex-col w-full lg:w-[256px] h-auto lg:h-[448px] lg:mx-auto"
            style={{
              backgroundColor: "#F5F5F5",
            }}
          >
            <div className="flex-shrink-0">
              <h3
                className="text-[20px] font-semibold mb-2"
                style={{ color: "#2D1B69" }}
              >
                Drive-R
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-3"
                style={{ color: "#4B5563" }}
              >
                Insightworthy data on your fingertips
              </p>
              <a
                href="/drive_r"
                className="text-[14px] inline-flex items-center gap-1 font-medium"
                style={{ color: "#5563FF" }}
              >
                Learn more →
              </a>
            </div>
            <div className="flex-grow flex items-end justify-center mt-6">
              <img
                src="/assets/new home page assets/driver_snap.png"
                alt="Drive-R"
                className="w-full object-contain"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>

          {/* Programs Card */}
          <div
            className="rounded-2xl p-4 lg:p-6 flex flex-col w-full lg:w-[256px] h-auto lg:h-[448px] lg:mx-auto"
            style={{
              backgroundColor: "#F5F5F5",
            }}
          >
            <div className="flex-shrink-0">
              <h3
                className="text-[20px] font-semibold mb-2"
                style={{ color: "#2D1B69" }}
              >
                Programs
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-3"
                style={{ color: "#4B5563" }}
              >
                Bird's eye view of all your programs
              </p>
              <a
                href="/progran"
                className="text-[14px] inline-flex items-center gap-1 font-medium"
                style={{ color: "#5563FF" }}
              >
                Learn more →
              </a>
            </div>
            <div className="flex-grow flex items-end justify-center mt-6">
              <img
                src="/assets/new home page assets/programs_snap.png"
                alt="Programs"
                className="w-full object-contain"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>

          {/* Voluntee-R Card */}
          <div
            className="rounded-2xl p-4 lg:p-6 flex flex-col w-full lg:w-[256px] h-auto lg:h-[448px] lg:mx-auto"
            style={{
              backgroundColor: "#F5F5F5",
            }}
          >
            <div className="flex-shrink-0">
              <h3
                className="text-[20px] font-semibold mb-2"
                style={{ color: "#2D1B69" }}
              >
                Voluntee-R
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-3"
                style={{ color: "#4B5563" }}
              >
                Amplifying impact through your workforce
              </p>
              <a
                href="/comingsoon"
                className="text-[14px] inline-flex items-center gap-1 font-medium"
                style={{ color: "#5563FF" }}
              >
                Learn more →
              </a>
            </div>
            <div className="flex-grow flex items-end justify-center mt-6">
              <img
                src="/assets/new home page assets/volunteer_snap.png"
                alt="Volunteer-R"
                className="w-full object-contain"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
