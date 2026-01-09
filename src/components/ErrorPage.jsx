import React from "react";
import Colors from "../constants/Color";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  const handleGoHomeClick = () => {
    router.push("/");
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
        404 - Page Not Found
      </h1>
      <p
        className="text-lg mb-6"
        style={{ color: Colors.Font_3, maxWidth: "600px" }}
      >
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <button
        className="mt-4 px-6 py-3 border rounded-lg font-medium shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: "#ffffff",
          borderColor: Colors.Primary_font,
          color: Colors.Primary_font,
        }}
        onClick={handleGoHomeClick}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
