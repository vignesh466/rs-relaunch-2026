"use client";
import React, { useEffect, useRef } from "react";

export default function ThreeWaysSection() {
  const gif1Ref = useRef<HTMLImageElement>(null);
  const gif2Ref = useRef<HTMLImageElement>(null);
  const gif3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createObserver = (ref: React.RefObject<HTMLImageElement>) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const img = entry.target as HTMLImageElement;
            if (entry.isIntersecting) {
              // Reload the GIF to restart animation
              const src = img.src;
              img.src = "";
              img.src = src;
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref.current);
      observers.push(observer);
    };

    createObserver(gif1Ref);
    createObserver(gif2Ref);
    createObserver(gif3Ref);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: "#222222" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] leading-tight font-normal mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Three Ways We Can Give Your Impact
            <br className="hidden md:block" />
            Management Super Powers
          </h2>
        </div>

        <div className="space-y-20 mt-16">
          {/* Way 1 - Turn Static Documents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-[22px] md:text-[28px] lg:text-[32px] leading-tight font-normal mb-4"
                style={{ color: "#FFFFFF" }}
              >
                Turn Static Documents into
                <br className="hidden md:block" />
                Live Programs instantly.
              </h3>
              <p
                className="text-[14px] md:text-[16px] leading-relaxed mb-6"
                style={{ color: "#D1D5DB" }}
              >
                Stop building frameworks from scratch. Simply upload your MoU,
                proposal, or program document, and watch AI work. It
                automatically extracts and structures your entire intervention
                logic-creating programs, budgets, and KPIs for you in minutes.
              </p>
              <a
                href="/progran"
                className="text-[14px] md:text-[16px] inline-flex items-center gap-1 font-medium"
                style={{ color: "#FFFFFF" }}
              >
                Learn more →
              </a>
            </div>
            <div className="flex justify-center">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  width: "544px",
                  height: "328px",
                  backgroundColor: "#374151",
                }}
              >
                <img
                  ref={gif1Ref}
                  src="/assets/new home page assets/gif1.gif"
                  alt="Turn Documents into Programs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Way 2 - Build Complex Forms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  width: "544px",
                  height: "328px",
                  backgroundColor: "#374151",
                }}
              >
                <img
                  ref={gif2Ref}
                  src="/assets/new home page assets/gif2.gif"
                  alt="Build Complex Forms"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3
                className="text-[22px] md:text-[28px] lg:text-[32px] leading-tight font-normal mb-4"
                style={{ color: "#FFFFFF" }}
              >
                Build Complex Forms with a<br className="hidden md:block" />
                Simple Sentence.
              </h3>
              <p
                className="text-[14px] md:text-[16px] leading-relaxed mb-6"
                style={{ color: "#D1D5DB" }}
              >
                Forget tedious drag-and-drop builders. Just describe what you
                need and our AI builds it in seconds. It handles multi-lingual
                support and validation logic automatically, reducing setup time
                by 75%.
              </p>
              <a
                href="surve_r"
                className="text-[14px] md:text-[16px] inline-flex items-center gap-1 font-medium"
                style={{ color: "#FFFFFF" }}
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Way 3 - Chat With Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-[22px] md:text-[28px] lg:text-[32px] leading-tight font-normal mb-4"
                style={{ color: "#FFFFFF" }}
              >
                Don't Just Analyze Data.
                <br className="hidden md:block" />
                Chat With It
              </h3>
              <p
                className="text-[14px] md:text-[16px] leading-relaxed mb-6"
                style={{ color: "#D1D5DB" }}
              >
                Your personal data analyst is always available. Interact with
                our AI to instantly generate charts, run complex data
                transformations, or uncover hidden trends. From cleaning messy
                data to visualizing impact, just chat with AI and get answers
                instantly.
              </p>
              <a
                href="/drive_r"
                className="text-[14px] md:text-[16px] inline-flex items-center gap-1 font-medium"
                style={{ color: "#FFFFFF" }}
              >
                Learn more →
              </a>
            </div>
            <div className="flex justify-center">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  width: "544px",
                  height: "328px",
                  backgroundColor: "#374151",
                }}
              >
                <img
                  ref={gif3Ref}
                  src="/assets/new home page assets/gif3.gif"
                  alt="Chat with Data"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
