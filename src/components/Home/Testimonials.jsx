import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Colors from "../../constants/Color";
import { testimonials } from "../../constants/Content";

const CARD_WIDTH = 256;
const GAP = 16;
const VISIBLE_CARDS = 4;
const TOTAL_WIDTH = VISIBLE_CARDS * (CARD_WIDTH + GAP) - GAP;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(VISIBLE_CARDS);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setTestimonialsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2);
      } else {
        setTestimonialsPerPage(VISIBLE_CARDS);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Modified navigation logic for continuous scrolling
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Create a circular array for visible testimonials
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < testimonialsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="flex items-center w-full gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronLeft
            size={32}
            className="text-gray-600 hover:text-gray-800"
          />
        </button>

        <div className="flex-1">
          <div
            className={`grid gap-6 ${
              testimonialsPerPage === 1
                ? "grid-cols-1"
                : testimonialsPerPage === 2
                ? "grid-cols-2"
                : "grid-cols-4"
            }`}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="flex flex-col justify-between p-6 rounded-lg shadow-lg bg-white"
                style={{
                  backgroundColor: Colors.Bg_color_4,
                  minHeight: "376px",
                }}
              >
                <div className="flex flex-col gap-4 flex-grow">
                  <Image
                    src="/assets/icons/quotes.svg"
                    alt="Quote"
                    width={48}
                    height={48}
                    className="w-10 lg:w-12"
                  />
                  <p
                    className="text-base lg:text-lg font-normal text-left flex-grow"
                    style={{ color: Colors.Font_3 }}
                  >
                    {testimonial.text.split(" ").slice(0, 35).join(" ")}
                    {testimonial.text.split(" ").length > 35 ? "..." : ""}
                  </p>
                </div>
                <div className="mt-4">
                  <p
                    className="text-base font-bold"
                    style={{ color: Colors.Font_3 }}
                  >
                    {testimonial.person}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronRight
            size={32}
            className="text-gray-600 hover:text-gray-800"
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
