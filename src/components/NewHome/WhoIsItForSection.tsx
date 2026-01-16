import React from "react";

export default function WhoIsItForSection() {
  return (
    <section className="hidden md:block py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[50px] leading-tight font-bold mb-4"
            style={{ color: "#363168" }}
          >
            Who is it for?
          </h2>
          <p className="text-[18px] mb-2" style={{ color: "#4B5563" }}>
            For grassroots <strong>NGOs</strong>,{" "}
            <strong>global foundations</strong>, <strong>CSR Teams</strong> and{" "}
            <strong>Research organization</strong>
          </p>
          <p className="text-[16px]" style={{ color: "#6B7280" }}>
            Simple UX, easy set up, and advanced customization means Relific
            scales with your impact.
          </p>
        </div>

        {/* Row 1 */}
        <div className="flex gap-6 mb-6">
          {/* Row 1 - Left Card: 640x400 */}
          <div
            style={{
              width: "640px",
              height: "400px",
              background: "#F9FAFB",
              borderRadius: "12px",
              padding: "32px",
              display: "flex",
              gap: "24px",
            }}
          >
            {/* Left side - Text content */}
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#2D1B69",
                  marginBottom: "12px",
                }}
              >
                Total Strategic Control
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4B5563",
                  lineHeight: "1.6",
                }}
              >
                Customize Relific suite using AI-R to fit your program logic.
                Define your own Theory of Change, roles, and approval workflows
                with a platform that adapts to your field reality, not the other
                way around.
              </p>
            </div>
            {/* Right side - Image */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                paddingBottom: "8px",
              }}
            >
              <img
                src="/assets/new home page assets/whoisitrow1_1.svg"
                alt="Total Strategic Control"
                style={{
                  width: "226px",
                  height: "344px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Row 1 - Right Card: 448x400 */}
          <div
            style={{
              width: "448px",
              height: "400px",
              background: "#F9FAFB",
              borderRadius: "12px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#2D1B69",
                  marginBottom: "12px",
                }}
              >
                Your Impact Operations Partner
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4B5563",
                  lineHeight: "1.6",
                }}
              >
                With program led approaches, Get dedicated, sector-aware support
                from AI and human experts who understand M&E. We don't just
                offer tech support; we offer "Impact Support" to ensure your
                field teams never skip a beat.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "16px",
              }}
            >
              <img
                src="/assets/new home page assets/whoisitrow1_2.svg"
                alt="Your Impact Operations Partner"
                style={{
                  width: "388px",
                  height: "160px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-6">
          {/* Row 2 - Left Card: 448x400 */}
          <div
            style={{
              width: "448px",
              height: "400px",
              background: "#F9FAFB",
              borderRadius: "12px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#2D1B69",
                  marginBottom: "12px",
                }}
              >
                Eliminate Information Silos
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4B5563",
                  lineHeight: "1.6",
                }}
              >
                Seamlessly connect Relific with your existing legacy data,
                financial tools, and external APIs. Sync data between the field,
                the finance office, and the boardroom.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "16px",
              }}
            >
              <img
                src="/assets/new home page assets/whoisitrow2_1.svg"
                alt="Eliminate Information Silos"
                style={{
                  width: "388px",
                  height: "160px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Row 2 - Right Card: 640x400 */}
          <div
            style={{
              width: "640px",
              height: "400px",
              background: "#F9FAFB",
              borderRadius: "12px",
              padding: "32px",
              display: "flex",
              gap: "24px",
            }}
          >
            {/* Left side - Text content */}
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#2D1B69",
                  marginBottom: "12px",
                }}
              >
                Operate everywhere
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4B5563",
                  lineHeight: "1.6",
                }}
              >
                Collect data in the most remote corners of the globe with 100%
                offline capabilities. Deploy multi-lingual forms in local
                languages. Manage multi-country portfolios from a single,
                unified command center.
              </p>
            </div>
            {/* Right side - Image */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                paddingBottom: "8px",
              }}
            >
              <img
                src="/assets/new home page assets/whoisitrow2_2.svg"
                alt="Operate everywhere"
                style={{
                  width: "226px",
                  height: "344px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
