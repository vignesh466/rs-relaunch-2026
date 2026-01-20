"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ValuePropsSection() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleGetStarted = () => {
    if (email) {
      router.push(`/book-demo?email=${encodeURIComponent(email)}`);
    } else {
      router.push("/book-demo");
    }
  };
  return (
    <>
      {/* 
      {/* Three value props - 296x152 each */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Months→Minutes Card */}
      {/* <div 
              className="rounded-2xl p-6 text-center border flex flex-col items-center justify-center" 
              style={{
                width: '296px', 
                height: '152px',
                borderColor: '#E5E7EB',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{backgroundColor: '#C7D2FE'}}>
                <svg className="w-6 h-6" fill="none" stroke="#5563FF" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[18px] mb-1" style={{color: '#5563FF'}}>Months→Minutes</h4>
              <p className="text-[13px]" style={{color: '#6B7280'}}>From data to decision</p>
            </div> */}

      {/* Zero Coding Card */}
      {/* <div 
              className="rounded-2xl p-6 text-center border flex flex-col items-center justify-center" 
              style={{
                width: '296px', 
                height: '152px',
                borderColor: '#E5E7EB',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{backgroundColor: '#C4B5FD'}}>
                <svg className="w-6 h-6" fill="none" stroke="#7C3AED" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-semibold text-[18px] mb-1" style={{color: '#2D1B69'}}>Zero Coding</h4>
              <p className="text-[13px]" style={{color: '#6B7280'}}>AI Does the Heavy Lifting</p>
            </div> */}

      {/* 10x Impact Card */}
      {/* <div 
              className="rounded-2xl p-6 text-center border flex flex-col items-center justify-center" 
              style={{
                width: '296px', 
                height: '152px',
                borderColor: '#E5E7EB',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{backgroundColor: '#99F6E4'}}>
                <svg className="w-6 h-6" fill="none" stroke="#14B8A6" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold text-[18px] mb-1" style={{color: '#2D1B69'}}>10x Impact</h4>
              <p className="text-[13px]" style={{color: '#6B7280'}}>Amplified, Not. Just Measured</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Meet AI-R CTA Section - 1120x294 container */}
      <section className="hidden md:block py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-center">
          <div
            className="rounded-2xl text-center flex flex-col items-center justify-center px-8"
            style={{
              width: "1120px",
              height: "294px",
              backgroundColor: "#E8F4F8",
            }}
          >
            <h2
              className="text-[32px] leading-tight font-normal mb-4"
              style={{ color: "#5563FF" }}
            >
              Meet AI-R, Our team of AI agents that are industry experts
            </h2>
            <p
              className="text-[14px] leading-relaxed mb-6 max-w-[680px]"
              style={{ color: "#333333" }}
            >
              AI-R isn't a sidekick; it's the central nervous system of your
              programs. AI-R agents run autonomously—cleaning your data,
              managing your budgets, and generating strategic insights in
              real-time. It doesn't just assist your team; it amplifies your
              entire mission.
            </p>
            <div
              className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-stretch sm:items-center border-2 rounded-xl overflow-hidden max-w-[408px] bg-white"
              style={{ borderColor: "#5563ff" }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGetStarted()}
                className="flex-1 px-4 py-3 sm:py-0 text-[13px] sm:text-[14px] focus:outline-none placeholder:text-slate-400 bg-white min-w-0 sm:h-[44px]"
              />
              <button
                onClick={handleGetStarted}
                className="text-white text-[13px] sm:text-[14px] font-semibold transition-colors whitespace-nowrap hover:opacity-90 rounded-lg sm:rounded-xl m-1 py-2 sm:py-0 sm:w-[184px] sm:h-[36px]"
                style={{ backgroundColor: "#5563ff" }}
              >
                Book a demo now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
