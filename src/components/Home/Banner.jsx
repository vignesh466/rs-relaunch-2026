import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Colors from "../../constants/Color.js";
import SocialIcons from "./SocialIcons";

const Banner = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSocial, setShowSocial] = useState(true);
  const bannerRef = useRef(null);

  const slides = [
    {
      heading: `Transforming Social Impact<br />with Smarter Tech`,
      subheading: `A SaaS suite for NGOs and CSR: aligned for grants, data, and field delivery.<br />Also supporting agriculture, health, education, and climate initiatives.`,
      image: "/assets/images_home/banner_new1.svg",
    },
    {
      heading: `Scale Your Social Program<br />with Smart SaaS`,
      subheading: `Built for NGOs and CSR teams managing grants, beneficiaries, and compliance<br />plus full support for agri, health, education, environment and vocational initiatives.`,
      image: "/assets/images_home/banner_new3.svg",
    },
    {
      heading: `Purpose-Built SaaS for<br />Social Good`,
      subheading: `Trusted by NGOs, CSR teams, and government partners to digitize agriculture,<br />monitor programs, and amplify community outcomes.`,
      image: "/assets/images_home/banner_new2.svg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowSocial(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div
      ref={bannerRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#f4f3ef" }}
    >
      {showSocial && (
        <div className="hidden lg:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-20">
          <SocialIcons className="gap-5" />
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Mobile */}
        <div className="md:hidden w-full px-4 pt-8 pb-4">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center w-full"
          >
            <h1
              className="mb-6 leading-tight font-normal px-2"
              style={{ color: Colors.Primary_font, fontWeight: 400 }}
            >
              <span
                className="block text-[28px] xs:text-[32px] sm:text-[36px] break-words"
                dangerouslySetInnerHTML={{
                  __html: slides[currentSlide].heading,
                }}
              />
            </h1>

            <div className="w-full flex justify-center mb-8 px-2">
              <Image
                src={slides[currentSlide].image}
                alt="Banner Visual"
                width={800}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.12))",
                  maxWidth: "100%",
                  maxHeight: "45vh",
                  minHeight: "280px",
                }}
              />
            </div>

            {/* Description hidden on mobile */}
          </motion.div>

          <div className="text-center w-full">
            <button
              className="relative overflow-hidden px-8 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-lg transform hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: isClicked
                  ? `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`
                  : Colors.Primary_font,
                color: Colors.Font_4,
                boxShadow: "0px 8px 20px rgba(85, 99, 255, 0.2)",
              }}
              onClick={(e) => {
                setIsClicked(true);
                router.push("/contact");
              }}
            >
              Request Demo
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex container mx-auto flex-row items-center w-full px-8 lg:px-20 pt-16">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto mt-4 sm:mt-10 md:mt-12 lg:mt-12 xl:mt-16 px-2 sm:px-4">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h1
                  className="mb-3 sm:mb-4 leading-tight font-normal"
                  style={{ color: Colors.Primary_font, fontWeight: 400 }}
                >
                  <span
                    className="block text-[40px] lg:text-[54px] xl:text-[60px] break-words"
                    dangerouslySetInnerHTML={{
                      __html: slides[currentSlide].heading,
                    }}
                  />
                </h1>
                <p
                  className="mb-6 sm:mb-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-normal"
                  style={{ color: Colors.Font_3, fontWeight: 400 }}
                >
                  <span
                    className="block text-[16px] xl:text-[18px] break-words"
                    dangerouslySetInnerHTML={{
                      __html: slides[currentSlide].subheading.replace(
                        /,?\s*<br \/>/g,
                        "<br />"
                      ),
                    }}
                  />
                </p>
              </motion.div>
            </div>

            <div className="text-center w-full mt-2">
              <button
                className="relative overflow-hidden px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-base sm:text-lg transform hover:scale-105 active:scale-95 cursor-pointer"
                style={{
                  background: isClicked
                    ? `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`
                    : Colors.Primary_font,
                  color: Colors.Font_4,
                  boxShadow: "0px 8px 20px rgba(85, 99, 255, 0.2)",
                }}
                onClick={(e) => {
                  setIsClicked(true);
                  router.push("/contact");
                }}
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex mt-10 flex-1 items-center justify-center px-4 md:px-8 lg:px-20 pb-20">
          <div className="relative w-full max-w-[800px] h-[300px] flex justify-center items-center overflow-hidden bg-transparent">
            <motion.img
              key={`image-${currentSlide}`}
              src={slides[currentSlide].image}
              alt="Dashboard Preview"
              className="w-full h-full object-contain"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 h-3 rounded-full"
                  : "w-3 h-3 rounded-full hover:scale-125"
              }`}
              style={{
                backgroundColor:
                  index === currentSlide ? Colors.Primary_font : "#D1D5DB",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* SEO fallback */}
      <noscript>
        <h1>Transforming Social Impact with Smarter Tech</h1>
        <p>
          A SaaS suite for NGOs and CSR: aligned for grants, data, and field
          delivery.
        </p>
      </noscript>
    </div>
  );
};

export default Banner;
