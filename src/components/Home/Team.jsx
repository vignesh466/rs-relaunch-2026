import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Colors from "../../constants/Color";
import { teamMembers } from "../../constants/Content";
import Link from "next/link";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TeamMember = ({ member }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center w-full max-w-[300px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      {/* Circular Image */}
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-4">
        <Image
          src={member.image || "https://via.placeholder.com/200"}
          alt={member.name || "Team Member"}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Designation */}
      <h4
        className="text-[24px] font-semibold"
        style={{ color: Colors.Font_3 }}
      >
        {member.name || "Name Not Available"}
      </h4>
      <p className="text-[16px]" style={{ color: Colors.Font_3 }}>
        {member.designation || "Designation Not Available"}
      </p>

      {/* LinkedIn Icon */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-[40px] h-[40px] mt-4 rounded-full transition-all duration-300"
          style={{
            backgroundColor: Colors.Icon_hover_2,
            color: Colors.Icon_default,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = Colors.Primary_font;
            e.currentTarget.style.color = Colors.Font_4;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = Colors.Icon_hover_2;
            e.currentTarget.style.color = Colors.Icon_default;
          }}
        >
          <Linkedin size={24} />
        </a>
      )}
    </motion.div>
  );
};

const OurTeam = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="w-full max-w-[1440px] mx-auto py-16 px-[30px] text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      {/* Title & Tagline */}
      <h3
        className="text-3xl font-normal mb-4"
        style={{ color: Colors.Primary_font }}
      >
        Our Team
      </h3>
      <p
        className="text-md max-w-[800px] mx-auto mb-12"
        style={{ color: Colors.Font_5 }}
      >
        Our team of experts are united by their passion for the social sector
        and providing resources and support to the organizations implementing
        welfare programs.
      </p>

      {/* Team Members Grid */}
      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.length === 3 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center md:justify-end">
              <TeamMember member={teamMembers[0]} />
            </div>
            <div className="flex justify-center">
              <TeamMember member={teamMembers[1]} />
            </div>
            <div className="flex justify-center md:justify-start">
              <TeamMember member={teamMembers[2]} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        )}
      </div>

      {/* Join Us Section */}
      <h4
        className="text-[24px] font-semibold mt-20"
        style={{ color: Colors.Font_3 }}
      >
        Do you connect with the mission?
      </h4>

      {/* Join Us Button */}
      <motion.a
        href="/apply"
        className="relative overflow-hidden mt-6 px-4 sm:px-5 py-2 sm:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base transform hover:scale-105 active:scale-95 inline-block text-center"
        style={{
          background: isClicked
            ? `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`
            : Colors.Primary_font,
          color: Colors.Font_4,
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
          textDecoration: "none",
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
        Join Us
      </motion.a>
    </motion.div>
  );
};

export default OurTeam;
