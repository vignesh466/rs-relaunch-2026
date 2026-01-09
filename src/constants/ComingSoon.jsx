import React from "react";
import Colors from "./Color";
import { useRouter } from "next/navigation";

const ComingSoon = () => {
  const router = useRouter();

  const handleTellMoreClick = () => {
    router.push("/tellmore");
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
      style={{ backgroundColor: Colors.bg_3 }}
    >
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: Colors.Primary_font }}
      >
        We're Almost There!
      </h1>
      <p
        className="text-lg mb-6"
        style={{ color: Colors.Font_4, maxWidth: "600px" }}
      >
        We're building something exciting for you! While we put the finishing
        touches, we'd love to hear from you. What are you looking for? How can
        we help?
      </p>
      <button
        className="mt-4 px-6 py-3 border rounded-lg font-medium shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: "#ffffff",
          borderColor: Colors.Primary_font,
          color: Colors.Primary_font,
        }}
        onClick={handleTellMoreClick}
      >
        Tell Us What You Need
      </button>
    </div>
  );
};

export default ComingSoon;
