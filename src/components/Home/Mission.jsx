import React from "react";
import Colors from "../../constants/Color";

const OurMission = () => {
  return (
    <div
      className="w-full h-auto md:h-[220px] flex flex-col justify-center items-center px-6 md:px-16 py-10 md:py-20 text-center"
      style={{ backgroundColor: Colors.Primary_font }}
    >
      <h1 className="font-bold text-white text-2xl md:text-4xl">Our Mission</h1>
      <p className="text-white font-medium mt-4 text-lg md:text-xl md:max-w-4xl">
        Our mission is to empower organizations with transformative, data-driven
        solutions that drive impact, foster resilience, and create lasting
        social change.
      </p>
    </div>
  );
};

export default OurMission;
