import React from "react";
import Link from "next/link";
import Colors from "../constants/Color";

const ComingSoonBlog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1
          className="text-4xl font-semibold mb-4"
          style={{ color: Colors.Primary_font }}
        >
          Coming Soon
        </h1>
        <p className="text-lg mb-8" style={{ color: Colors.Font_3 }}>
          We are working hard to bring you this content. Stay tuned!
        </p>
        <Link
          href="/whoweserve"
          className="mt-6 px-6 py-3 border rounded-lg font-normal shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: Colors.Primary_font,
            color: Colors.Font_4,
          }}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonBlog;
