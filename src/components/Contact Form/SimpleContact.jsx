"use client";
import React, { useState } from "react";
import Colors from "../../constants/Color";
import {
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const SimpleContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organizationName: "",
    orgType: "",
    jobTitle: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const orgTypes = [
    { value: "", label: "Select Organization Type" },
    { value: "CSR", label: "CSR" },
    { value: "NGO", label: "NGO" },
    { value: "Other", label: "Other" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xaneajdk", {
        // Updated Formspree endpoint
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SocialLink = ({ href, icon: Icon }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110 active:scale-95"
      style={{ color: Colors.Font_4 }}
    >
      <Icon size={25} />
    </a>
  );

  return (
    <div className="min-h-screen flex flex-col items-start bg-gray-100 py-6 px-4 sm:py-8 sm:px-6 md:py-10 lg:px-[200px]">
      {/* Header - Matching contact.jsx */}
      <div className="text-left mb-6 sm:mb-8 w-full">
        <h2 className="text-gray-600 text-xl sm:text-[24px]">Contact Us</h2>
        <h3
          className="text-[28px] sm:text-[36px] font-bold mt-2"
          style={{ color: Colors.Primary_font }}
        >
          Need help or have any queries?
        </h3>
      </div>

      {/* Main Container - Matching contact.jsx */}
      <div
        className="w-full max-w-[1120px] h-auto sm:h-[686px] rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col-reverse md:flex-row gap-6"
        style={{ backgroundColor: Colors.Bg_color_3 }}
      >
        {/* Left Panel - Contact Info */}
        <div
          className="w-full md:w-1/3 rounded-lg flex flex-col justify-between p-6"
          style={{ backgroundColor: Colors.Primary_font }}
        >
          <div className="text-white text-base">
            <div className="flex items-center gap-2 mb-3 mt-14">
              <MapPin size={18} /> <span>Bengaluru Office</span>
            </div>
            <p className="mb-6 sm:mb-3">+91 63614 66735</p>

            <p className="mb-6 sm:mb-12">
              MIG 331, 3rd Cross, Suryacity, Anekal, Chandapura Bangalore 560099
            </p>
            <div className="flex items-center gap-2">
              <Mail size={18} /> <span>contact@relific.io</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <SocialLink
              href="https://x.com/i/flow/login?redirect_after_login=%2Fkrisiyukta"
              icon={Twitter}
            />
            <SocialLink
              href="https://www.linkedin.com/company/krisiyukta/posts/?feedView=all"
              icon={Linkedin}
            />
            <SocialLink
              href="https://www.facebook.com/people/Krisiyukta/61554575933728/#"
              icon={Facebook}
            />
            <SocialLink
              href="https://www.instagram.com/krisiyukta/"
              icon={Instagram}
            />
          </div>
        </div>

        {/* Right Panel - Simple Contact Form */}
        <form
          className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-base font-normal mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your full name"
              className="p-2 border rounded-md text-base bg-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-normal mb-1">
              Organization Name
            </label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              placeholder="Enter organization name"
              className="p-2 border rounded-md text-base bg-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-normal mb-1">
              Organization Type
            </label>
            <select
              name="orgType"
              value={formData.orgType}
              onChange={handleChange}
              className="p-2 border rounded-md text-base bg-gray-100"
              required
            >
              {orgTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-base font-normal mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              placeholder="Enter your job title"
              className="p-2 border rounded-md text-base bg-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-normal mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Enter your phone number"
              className="p-2 border rounded-md text-base bg-gray-100"
              pattern="[0-9]{10}"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-normal mb-1">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              className="p-2 border rounded-md text-base bg-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2">
            <label className="text-base font-normal mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Enter your message"
              rows="4"
              className="p-2 border rounded-md text-base bg-gray-100"
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="col-span-1 sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="relative overflow-hidden px-4 sm:px-5 py-2 sm:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base transform hover:scale-105 active:scale-95 inline-block text-center"
              style={{
                background: Colors.Primary_font,
                color: Colors.Font_4,
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = Colors.Click;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = Colors.Primary_font;
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleContact;
