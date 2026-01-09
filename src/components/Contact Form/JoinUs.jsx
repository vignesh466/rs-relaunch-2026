"use client";
import React, { useState } from "react";
import Colors from "../../constants/Color";
import {
  MapPin,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    motivation: "",
    details: "",
  });
  const [motivationCharCount, setMotivationCharCount] = useState(0);
  const [detailsCharCount, setDetailsCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "motivation") {
      setMotivationCharCount(value.length);
    } else if (name === "details") {
      setDetailsCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formspreeEndpoint = "https://formspree.io/f/xdkewpao";

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          motivation: "",
          details: "",
        });
        setMotivationCharCount(0);
        setDetailsCharCount(0);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-start bg-gray-100 py-6 px-4 sm:py-8 sm:px-6 md:py-10 lg:px-[200px]">
      {/* Header */}
      <div className="text-left mb-6 sm:mb-8 w-full">
        <h2 className="text-gray-600 text-xl sm:text-[24px]">Join Us</h2>
        <h3
          className="text-[28px] sm:text-[36px] font-bold mt-2"
          style={{ color: Colors.Primary_font }}
        >
          Looking to join Krisiyukta?
        </h3>
      </div>

      <div
        className="w-full max-w-[1120px] h-auto sm:h-[686px] rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col-reverse md:flex-row gap-6"
        style={{ backgroundColor: Colors.Bg_color_3 }}
      >
        {/* Contact Info Panel */}
        <div
          className="w-full md:w-1/3 rounded-lg flex flex-col justify-between p-6"
          style={{ backgroundColor: Colors.Primary_font }}
        >
          <div className="text-white text-base">
            <div className="flex items-center gap-2 mb-3 mt-14">
              <MapPin size={18} /> <span>Bengaluru Office</span>
            </div>
            <p className="mb-6 sm:mb-12">
              {" "}
              MIG 331, 3rd Cross, Suryacity, Anekal, Chandapura Bangalore 560099
            </p>

            <p className="mb-6 sm:mb-12">+91 63614 66735</p>
            <div className="flex items-center gap-2">
              <Mail size={18} /> <span>contact@relific.io</span>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-12 mt-4">
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fkrisiyukta"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: Colors.Font_4 }}
              className="transition-transform transform hover:scale-110 active:scale-95"
            >
              <Twitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/krisiyukta/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 active:scale-95"
              style={{ color: Colors.Font_4 }}
            >
              <Linkedin size={25} />
            </a>

            <a
              href="https://www.facebook.com/people/Krisiyukta/61554575933728/#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 active:scale-95"
              style={{ color: Colors.Font_4 }}
            >
              <Facebook size={25} />
            </a>
            <a
              href="https://www.instagram.com/krisiyukta/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 active:scale-95"
              style={{ color: Colors.Font_4 }}
            >
              <Instagram size={25} />
            </a>
          </div>
        </div>
        {/* Join Us Form */}
        <form
          className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          {[
            {
              label: "Full Name",
              name: "name",
              placeholder: "Enter your name",
            },
            {
              label: "Email ID",
              name: "email",
              placeholder: "Enter your email",
              type: "email",
            },
            {
              label: "Mobile Number",
              name: "phone",
              placeholder: "Enter your mobile number",
              pattern: "[0-9]{10}",
            },
          ].map(({ label, name, placeholder, pattern, type = "text" }) => (
            <div key={name} className="flex flex-col">
              <label className="text-base font-normal mb-1">{label}</label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="p-2 border rounded-md text-base bg-gray-100"
                pattern={pattern}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="col-span-1 sm:col-span-2 flex flex-col">
            <label className="text-base font-normal mb-1">
              Motivation to Join
            </label>
            <textarea
              name="motivation"
              placeholder="Enter your motivation"
              className="p-2 border rounded-md text-base bg-gray-100 min-h-[80px]"
              rows="4"
              maxLength={200}
              onChange={handleChange}
              required
            ></textarea>
            <p className="text-right text-base text-gray-500">
              {motivationCharCount}/200
            </p>
          </div>

          <div className="col-span-1 sm:col-span-2 flex flex-col">
            <label className="text-base font-normal mb-1">
              Explain how you plan to contribute.
            </label>
            <textarea
              name="details"
              placeholder="Enter additional details"
              className="p-2 border rounded-md text-base bg-gray-100 min-h-[80px]"
              rows="4"
              maxLength={200}
              onChange={handleChange}
            ></textarea>
            <p className="text-right text-base text-gray-500">
              {detailsCharCount}/200
            </p>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div className="col-span-1 sm:col-span-2">
              <p
                className={`text-${
                  submitStatus === "success" ? "green" : "red"
                }-600`}
              >
                {submitStatus === "success"
                  ? "Message sent successfully!"
                  : "Failed to send message. Please try again."}
              </p>
            </div>
          )}

          {/* Submit Button Container */}
          <div className="col-span-1 sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="mt-4 px-4 sm:px-5 py-2 sm:py-3 border rounded-lg font-normal shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-primary hover:text-white"
              style={{
                backgroundColor: Colors.Primary_font,
                color: Colors.Font_4,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = Colors.Click)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = Colors.Primary_font)
              }
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
