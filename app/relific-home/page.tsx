import React from 'react'
import NavBar2 from './NavBar2'
import ChatbotBubble from './ChatbotBubble'
import ScrollingLogos from './ScrollingLogos'
import ProductsShowcase from './ProductsShowcase'
import ValuePropsSection from './ValuePropsSection'
import ThirtyDaysSection from './ThirtyDaysSection'
import ThreeWaysSection from './ThreeWaysSection'
import WhoIsItForSection from './WhoIsItForSection'
import RelificWaySection from './RelificWaySection'
import TrustedBySection from './TrustedBySection'

export const metadata = {
  title: 'Relific — The most intelligent impact management platform',
  description: 'Replace spreadsheets, forms and other point solutions with Relific\'s AI powered suite.'
}

export default function RelificHomePage(){
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NavBar2 />
      <div className="pt-20">
        {/* Hero Banner Section */}
        <section className="relative overflow-hidden bg-white pt-16 pb-20">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[640px_1fr] gap-16 items-start">
              <div className="space-y-12">
                {/* Heading container aligned with top of image */}
                <div>
                  <h1 className="text-[68px] leading-[1.05] font-bold" style={{color: '#2D1B69', letterSpacing: '-0.015em'}}>
                    The most intelligent<br />
                    impact<br />
                    management<br />
                    platform. Period.
                  </h1>
                </div>
                
                {/* Description container aligned with bottom of image */}
                <div className="space-y-8">
                  <p className="text-[18px] leading-[1.65]" style={{color: '#4B5563'}}>
                    AI powered Grant and Program management, Data Collection and impact analytics.
                  </p>
                  
                  {/* Email input container - 408x44 */}
                  <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-stretch sm:items-center border-2 rounded-xl overflow-hidden max-w-[408px] bg-white" style={{borderColor: '#5563ff'}}>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-3 sm:py-0 text-[13px] sm:text-[14px] focus:outline-none placeholder:text-slate-400 bg-white min-w-0 sm:h-[44px]"
                    />
                    <button className="text-white text-[13px] sm:text-[14px] font-semibold transition-colors whitespace-nowrap hover:opacity-90 rounded-lg sm:rounded-xl m-1 py-2 sm:py-0 sm:w-[184px] sm:h-[36px]" style={{backgroundColor: '#5563ff'}}>
                      Get started for free
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end lg:-mr-12 xl:-mr-20">
                <img 
                  src="/assets/new home page assets/bannergroup.png" 
                  alt="Relific Platform Dashboard" 
                  className="w-full max-w-[750px] lg:max-w-[850px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Logos - No heading */}
        <ScrollingLogos />

        {/* Products Showcase */}
        <ProductsShowcase />

        {/* Value Props and AI-R Section */}
        <ValuePropsSection />

        {/* 30 Days Achievement Section */}
        <ThirtyDaysSection />

        {/* Three Ways Section */}
        <ThreeWaysSection />

        {/* Who is it for? */}
        <WhoIsItForSection />

        {/* The Relific Way */}
        <RelificWaySection />

        {/* Trusted by Section */}
        <TrustedBySection />

      </div>
      <ChatbotBubble />
    </main>
  )
}
