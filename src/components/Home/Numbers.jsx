import React, { useEffect } from "react";
import Colors from "../../constants/Color";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Numbers = () => {
  const pathname = usePathname();

  // Scroll to top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-8 lg:py-12"
      style={{ backgroundColor: Colors.Primary_font, minHeight: "314px" }}
    >
      {/* Left Section */}
      <div className="w-full lg:w-2/5 px-4 lg:ml-10 lg:pr-8 mb-8 lg:mb-0">
        <p
          className="text-sm sm:text-md text-center lg:text-left"
          style={{ color: Colors.Font_4 }}
        >
          Relific, started in 2023, provides smart digital solutions to enhance
          efficiency and impact. Our platform serves as a central hub where
          organizations can access insights, manage data, collaborate, and drive
          meaningful change across key sectors.
        </p>
        <div className="hidden sm:flex justify-center lg:justify-start">
          <Link
            href="/aboutus"
            className="mt-6 px-6 py-3 border rounded-lg font-normal shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block text-center"
            style={{
              backgroundColor: Colors.Font_4,
              color: Colors.Primary_font,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = Colors.Click;
              e.currentTarget.style.color = "#ffffff"; // Swap text color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = Colors.Font_4;
              e.currentTarget.style.color = Colors.Primary_font; // Revert text color
            }}
          >
            More about us
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-between items-center lg:mr-12 gap-8 sm:gap-4">
        {[
          { number: "3000+", text: "Lives impacted" },
          { number: "8+", text: "Successful Projects" },
          { number: "100%", text: "Digitisation!" },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-center">
              <p
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2 sm:mb-4 -mt-2 sm:-mt-4"
                style={{ color: Colors.Font_4 }}
              >
                {item.number}
              </p>
              <p
                className="text-sm sm:text-md font-normal"
                style={{ color: Colors.Font_4 }}
              >
                {item.text}
              </p>
            </div>
            {index < 2 && (
              <div
                className="hidden sm:block h-20 lg:h-40 w-px mx-2 lg:mx-6 -mt-4 lg:-mt-8"
                style={{ backgroundColor: Colors.Font_4 }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Button for small screens */}
      <div className="sm:hidden flex justify-center mt-6">
        <Link
          href="/aboutus"
          className="mt-6 px-6 py-3 border rounded-lg font-normal shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block text-center"
          style={{
            backgroundColor: Colors.Font_4,
            color: Colors.Primary_font,
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = Colors.Click;
            e.currentTarget.style.color = "#ffffff"; // Swap text color
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = Colors.Font_4;
            e.currentTarget.style.color = Colors.Primary_font; // Revert text color
          }}
        >
          More about us
        </Link>
      </div>
    </div>
  );
};

export default Numbers;
