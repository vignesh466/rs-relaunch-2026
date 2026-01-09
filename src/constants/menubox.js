import React from "react";
import Colors from "./Color.js";

const MenuBox = ({ options }) => {
  return (
    <div
      className="w-64 p-4 rounded-[10px] shadow-md transition-all"
      style={{
        backgroundColor: Colors.Font_4, // White background
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft drop shadow
      }}
    >
      {options.map((option, index) => (
        <div
          key={index}
          className="p-2 text-lg font-semibold rounded-md transition-colors cursor-pointer"
          style={{
            color: Colors.Font_3, // Default text color
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = Colors.Icon_hover_2)
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default MenuBox;
