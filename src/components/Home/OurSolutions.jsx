import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Colors from "../../constants/Color";
import { solutions, solutionsLinks } from "../../constants/Content";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OurSolutions = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  return (
    <section
      className="py-10 md:py-15 sm:py-20"
      style={{ backgroundColor: Colors.Bg_color_3 }}
    >
      <div className="container mx-auto px-4">
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-[40px] font-normal text-center mb-8"
          style={{ color: Colors.Primary_font }}
        >
          Our Solutions
        </motion.h3>
        {/* SEO Fallback for Crawlers */}
        <noscript>
          <h2>Our Solutions</h2>
        </noscript>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => {
            // Find the matching path from solutionsLinks based on the title/drop
            const matchingLink = solutionsLinks.find(
              (link) => link.drop === solution.title
            );
            const solutionPath = matchingLink
              ? matchingLink.path
              : "/comingsoon";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-left p-4 flex flex-col items-center"
              >
                {/* Clickable Image with Page Reload */}
                <Link href={solutionPath}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full max-w-[352px] mr-10 sm:ml-3 aspect-[1.5] bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={352}
                      height={235}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </Link>

                {/* Title */}
                <motion.h3
                  variants={itemVariants}
                  className="mt-4 ml-4 font-semibold self-start"
                  style={{ fontSize: "30px", color: Colors.Font_3 }}
                >
                  {solution.title}
                </motion.h3>

                {/* SEO Fallback for Crawlers */}
                <noscript>
                  <h3>{solution.title}</h3>
                </noscript>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="mt-2 text-lg px-4"
                  style={{ fontSize: "16px", color: Colors.Font_3 }}
                >
                  {solution.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Request Demo Button (Only Visible on Small Screens) */}
        <motion.button
          className="relative overflow-hidden mt-6 px-4 sm:px-5 py-2 sm:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base block sm:hidden mx-auto ml-7 transform hover:scale-105 active:scale-95"
          style={{
            background: isClicked
              ? `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`
              : Colors.Primary_font,
            color: Colors.Font_4,
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = Colors.Click;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isClicked
              ? `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`
              : Colors.Primary_font;
          }}
          onClick={(e) => {
            setIsClicked(true);
            router.push("/contact");

            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
            const rect = e.currentTarget.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            e.currentTarget.appendChild(ripple);

            setTimeout(() => {
              ripple.remove();
            }, 600);
          }}
        >
          Request Demo
        </motion.button>
      </div>
    </section>
  );
};

export default OurSolutions;
