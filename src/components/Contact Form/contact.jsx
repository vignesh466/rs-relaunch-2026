"use client";
import { useState } from "react";
import Colors from "../../constants/Color";
import {
  MapPin,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const FORM_FIELDS = [
  {
    label: "Full Name",
    name: "name",
    placeholder: "Enter your name",
  },
  {
    label: "Organization Name",
    name: "organization",
    placeholder: "Enter your organization",
  },
  {
    label: "Mobile Number",
    name: "phone",
    placeholder: "Enter your mobile number",
    pattern: "[0-9]{10}",
  },
  {
    label: "Email ID",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
  },
];

const INTEREST_OPTIONS = [
  ["ProGran", "Drive-R"],
  ["Surve-R", "All Products"],
];

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_Contact_Formspree ||
  "https://formspree.io/f/xojdkyqk";

const INITIAL_FORM_STATE = {
  name: "",
  organization: "",
  phone: "",
  email: "",
  preferredDate: "",
  preferredTime: "",
  interest: [],
};

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interest: checked
          ? [...prev.interest, value]
          : prev.interest.filter((item) => item !== value),
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formDataToSend.append(key, item));
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData(INITIAL_FORM_STATE);
        setCharCount(0);
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
      {/* Header */}
      <div className="text-left mb-6 sm:mb-8 w-full">
        <h2 className="text-gray-600 text-xl sm:text-[24px]">Contact Us</h2>
        <h3
          className="text-[28px] sm:text-[36px] font-bold mt-2"
          style={{ color: Colors.Primary_font }}
        >
          Need a demo or have any queries?
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

        {/* Contact Form */}
        <form
          className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          {FORM_FIELDS.map(
            ({ label, name, placeholder, pattern, type = "text" }) => (
              <div key={name} className="flex flex-col">
                <label className="text-base font-normal mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  placeholder={placeholder}
                  className="p-2 border rounded-md text-base bg-gray-100"
                  pattern={pattern}
                  onChange={handleChange}
                  required
                />
              </div>
            ),
          )}

          {/* Demo Schedule Fields */}
          <div className="flex flex-col">
            <label className="text-base font-normal mb-1">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              className="p-2 border rounded-md text-base bg-gray-100"
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]} // Prevents selecting past dates
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-normal mb-1">Preferred Time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              className="p-2 border rounded-md text-base bg-gray-100"
              onChange={handleChange}
              required
            >
              <option value="">Select a time slot</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Interest Checkboxes */}
          <div className="col-span-1 sm:col-span-2">
            <p className="text-base font-bold mb-2">
              Which of our tools are you interested in?
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {INTEREST_OPTIONS.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-2">
                  {column.map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 text-base font-normal"
                    >
                      <input
                        type="checkbox"
                        value={item}
                        name="interest"
                        checked={formData.interest.includes(item)}
                        onChange={handleChange}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              ))}
            </div>
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
                  ? "Demo request sent successfully! We'll confirm your slot shortly."
                  : "Failed to send request. Please try again."}
              </p>
            </div>
          )}

          {/* Submit Button Container */}
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
              {isSubmitting ? "Scheduling..." : "Schedule Demo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
