"use client";
import React, { useState, useCallback } from "react";
import Colors from "../../constants/Color";

const TellusMore = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    needs: "",
    thematicArea: "",
    otherThematicArea: "",
    additionalInfo: "",
  });

  const [isClicked, setIsClicked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      const formspreeEndpoint = "https://formspree.io/f/mldgydww"; // Updated Formspree endpoint

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
            organization: "",
            needs: "",
            thematicArea: "",
            otherThematicArea: "",
            additionalInfo: "",
          });
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <div className="bg-gray-100 py-14 flex justify-center">
      <div className="max-w-2xl mx-auto bg-white p-10 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-left text-primary">
          Tell Us More
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Name", type: "text", name: "name" },
              { label: "Email", type: "email", name: "email" },
            ].map(({ label, type, name }) => (
              <div key={name}>
                <label className="block text-gray-600 mb-2">{label}:</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
          </div>

          {[
            { label: "Phone Number", type: "tel", name: "phone" },
            { label: "Organization Name", type: "text", name: "organization" },
          ].map(({ label, type, name }) => (
            <div key={name}>
              <label className="block text-gray-600 mb-2">{label}:</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
          ))}

          <div>
            <label className="block text-gray-600 mb-2">
              What are your needs?
            </label>
            <textarea
              name="needs"
              value={formData.needs}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">
              Which thematic area do you work in?
            </label>
            <select
              name="thematicArea"
              value={formData.thematicArea}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
            >
              <option value="">Select an option</option>
              {[
                "Education",
                "Health",
                "Environment",
                "Technology",
                "Agri Livelihoods",
                "Other",
              ].map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {formData.thematicArea === "other" && (
            <div>
              <label className="block text-gray-600 mb-2">
                Please specify:
              </label>
              <input
                type="text"
                name="otherThematicArea"
                value={formData.otherThematicArea}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-600 mb-2">
              Additional Information:
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div>
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

          <button
            type="submit"
            className={`mt-6 px-6 py-3 border rounded-lg font-normal shadow-lg transition-all duration-300 transform ${
              isClicked ? "scale-95" : "hover:scale-105"
            } hover:bg-primary hover:text-white`}
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
            onClick={() => setIsClicked(true)}
            disabled={isSubmitting}
            aria-label="Submit Form"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TellusMore;
