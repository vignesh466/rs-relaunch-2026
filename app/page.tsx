"use client";

import React from "react";

// Import existing components
import Banner from "../src/components/Home/Banner_2";
import StartQuicklyBlock from "../src/components/Home/WhyUs";
import ClientsCarousel from "../src/components/Home/Clients";
import Testimonials from "../src/components/Home/Testimonials";
import Numbers from "../src/components/Home/Numbers";
import OurProducts from "../src/components/Home/OurProducts";
import RelificWay from "../src/components/Home/RelificWay";
import HighlightTestimonial from "../src/components/Home/Testimonial_highlight";
import FinalCTA from "../src/components/Home/FinalCTA";

const HomePage = () => {
  return (
    <>
      <Banner />
      <StartQuicklyBlock />
      <ClientsCarousel />
      <Testimonials />
      <Numbers />
      <OurProducts />
      <RelificWay />
      <HighlightTestimonial />
      <FinalCTA />
    </>
  );
};

export default HomePage;
