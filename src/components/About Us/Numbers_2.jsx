"use client";
import React, { useEffect, useCallback } from "react";
import Colors from "../../constants/Color";
import { useRouter, usePathname } from "next/navigation";

const Button = ({ isMobile = false }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/allproducts");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [router]);

  return (
    <div
      className={`${isMobile ? "sm:hidden" : "hidden sm:flex"} justify-center ${
        !isMobile && "lg:justify-start"
      }`}
    >
      <button
        className="mt-6 px-4 sm:px-5 py-2 sm:py-3 border rounded-lg font-normal shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-primary hover:text-white"
        style={{
          backgroundColor: "#ffffff",
          borderColor: Colors.Primary_font,
          color: Colors.Primary_font,
        }}
        onClick={handleClick}
      >
        View our Products
      </button>
    </div>
  );
};

const StatItem = ({ number, text, showBorder }) => (
  <div
    className={`flex flex-col items-center text-center ${
      showBorder ? "sm:border-r sm:pr-4 sm:border-gray-400" : ""
    }`}
  >
    <p
      className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2 sm:mb-4 -mt-2 sm:-mt-4"
      style={{ color: Colors.Font_4 }}
    >
      {number}
    </p>
    <p
      className="text-sm sm:text-md font-normal"
      style={{ color: Colors.Font_4 }}
    >
      {text}
    </p>
  </div>
);

const Numbers_2 = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/allsolutions") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  const stats = [
    { number: "3000+", text: "Beneficiaries impacted" },
    { number: "8+", text: "Successful Projects" },
    { number: "100%", text: "Digitisation!" },
  ];

  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-8 lg:py-12"
      style={{ backgroundColor: Colors.Primary_font, minHeight: "314px" }}
    >
      <div className="w-full lg:w-2/5 px-4 lg:ml-10 lg:pr-8 mb-8 lg:mb-0">
        <p
          className="text-sm sm:text-md text-center lg:text-left"
          style={{ color: Colors.Font_4 }}
        >
          Relific provides smart digital solutions to enhance efficiency and
          impact. Our platform serves as a central hub where organizations can
          access insights, manage data, collaborate, and drive meaningful change
          across key sectors.
        </p>
        <Button />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-between items-center lg:mr-12 gap-4 sm:gap-8">
        {stats.map((item, index) => (
          <StatItem
            key={item.text}
            number={item.number}
            text={item.text}
            showBorder={index < 2}
          />
        ))}
      </div>

      <Button isMobile />
    </div>
  );
};

export default Numbers_2;
