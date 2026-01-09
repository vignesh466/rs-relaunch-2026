"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";
import { clients } from "../../constants/Content";

const ClientsCarousel = () => {
  const [position, setPosition] = useState(0);

  // Duplicate the clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const moveCarousel = () => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        // Reset position when all original items have scrolled
        if (Math.abs(newPosition) >= clients.length * 200) {
          return 0;
        }
        return newPosition;
      });
    };

    const interval = setInterval(moveCarousel, 50);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="w-full pt-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h3
          className="text-[30px] md:text-[40px] sm:text-[60px] font-normal text-center mb-12"
          style={{ color: Colors.Primary_font }}
        >
          Trusted by Leading Organizations
        </h3>

        {/* Center the logos on Y-axis */}
        <div className="relative w-full overflow-hidden flex items-center h-[120px]">
          <motion.div
            className="flex items-center"
            style={{
              x: position,
              transition: "transform 0.05s linear",
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-[160px] h-[80px] mx-4 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-[120px] h-[60px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;
