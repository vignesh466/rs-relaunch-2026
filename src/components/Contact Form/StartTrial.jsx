"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
    label: "Your Role/Designation",
    name: "role",
    placeholder: "e.g., Program Manager, CSR Director",
  },
  {
    label: "Work Email",
    name: "email",
    placeholder: "Enter your work email",
    type: "email",
  },
  {
    label: "Phone Number",
    name: "phone",
    placeholder: "Enter your phone number",
    pattern: "[0-9]{10}",
  },
];

const THEMATIC_AREAS = [
  ["Education", "Healthcare", "Agriculture"],
  ["Environment", "Livelihoods", "Women Empowerment"],
  ["Rural Development", "Disaster Relief", "Other"],
];

const ORGANIZATION_TYPES = [
  "NGO/Non-Profit",
  "Corporate Foundation",
  "CSR Division",
  "Government Agency",
  "International Development",
  "Consulting Firm",
  "Other",
];

const WORK_LOCATIONS = [
  "1-5 locations",
  "6-20 locations",
  "21-100 locations",
  "100+ locations",
  "Pan-India",
  "International",
];

const TEAM_SIZES = [
  "1-10 people",
  "11-50 people",
  "51-200 people",
  "200+ people",
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldpbylj";

const INITIAL_FORM_STATE = {
  name: "",
  organization: "",
  role: "",
  email: "",
  phone: "",
  orgType: "",
  thematicAreas: [],
  workLocations: "",
  teamSize: "",
  currentChallenges: "",
  dataCollectionMethods: "",
};

const StartTrial = () => {
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email");

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Prefill email from URL parameter
  useEffect(() => {
    if (emailFromUrl) {
      setFormData((prev) => ({ ...prev, email: emailFromUrl }));
    }
  }, [emailFromUrl]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        thematicAreas: checked
          ? [...prev.thematicAreas, value]
          : prev.thematicAreas.filter((item) => item !== value),
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append("_subject", "New Trial Request - Relific Platform");

    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formDataToSend.append(key, value.join(", "));
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
        <h2 className="text-gray-600 text-xl sm:text-[24px]">
          Start Your Free Trial
        </h2>
        <h3
          className="text-[28px] sm:text-[36px] font-bold mt-2"
          style={{ color: Colors.Primary_font }}
        >
          Get started with Relific in minutes
        </h3>
        <p className="text-gray-600 mt-2 text-lg">
          Tell us about your organization and we'll set up your personalized
          trial environment.
        </p>
      </div>

      <div
        className="w-full max-w-[1200px] rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col-reverse lg:flex-row gap-6"
        style={{ backgroundColor: Colors.Bg_color_3 }}
      >
        {/* Info Panel */}
        <div
          className="w-full lg:w-1/3 rounded-lg flex flex-col justify-between p-6"
          style={{ backgroundColor: Colors.Primary_font }}
        >
          <div className="text-white">
            <h3 className="text-xl font-bold mb-4">
              What's Included in Your Trial?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">Full Platform Access</p>
                  <p className="text-sm text-white/80">
                    Try all features of ProGran, Drive-R, and Surve-R
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">Sample Data & Templates</p>
                  <p className="text-sm text-white/80">
                    Pre-loaded with example projects and forms
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">Personal Onboarding</p>
                  <p className="text-sm text-white/80">
                    1-on-1 setup call to customize for your needs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <p className="text-sm text-white/80">
                    Email and chat support throughout your trial
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm">
                <strong>Trial Duration:</strong> 14 days
                <br />
                <strong>Setup Time:</strong> Less than 24 hours
                <br />
                <strong>No Credit Card Required</strong>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-white text-sm mt-6">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} /> <span>contact@relific.io</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} /> <span>Bengaluru, India</span>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
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
        </div>

        {/* Trial Form */}
        <form className="w-full lg:w-2/3 space-y-6" onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: Colors.Primary_font }}
            >
              Basic Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FORM_FIELDS.map(
                ({ label, name, placeholder, pattern, type = "text" }) => (
                  <div key={name} className="flex flex-col">
                    <label className="text-base font-normal mb-1">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      placeholder={placeholder}
                      className="p-3 border rounded-md text-base bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors"
                      pattern={pattern}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Organization Details */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: Colors.Primary_font }}
            >
              Organization Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="text-base font-normal mb-1">
                  Organization Type
                </label>
                <select
                  name="orgType"
                  value={formData.orgType}
                  className="p-3 border rounded-md text-base bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select organization type</option>
                  {ORGANIZATION_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-base font-normal mb-1">Team Size</label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  className="p-3 border rounded-md text-base bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select team size</option>
                  {TEAM_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-base font-normal mb-1">
                Number of Work Locations
              </label>
              <select
                name="workLocations"
                value={formData.workLocations}
                className="p-3 border rounded-md text-base bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors"
                onChange={handleChange}
                required
              >
                <option value="">Select work locations</option>
                {WORK_LOCATIONS.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Thematic Areas */}
            <div>
              <label className="text-base font-semibold mb-2 block">
                Thematic Areas (Select all that apply)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {THEMATIC_AREAS.flat().map((area) => (
                  <label
                    key={area}
                    className="flex items-center gap-2 text-sm font-normal p-2 hover:bg-gray-50 rounded"
                  >
                    <input
                      type="checkbox"
                      value={area}
                      name="thematicAreas"
                      checked={formData.thematicAreas.includes(area)}
                      onChange={handleChange}
                      className="rounded"
                    />
                    {area}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Current Challenges */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: Colors.Primary_font }}
            >
              Current Challenges
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-base font-normal mb-1">
                  What are your main data collection and reporting challenges?
                </label>
                <textarea
                  name="currentChallenges"
                  value={formData.currentChallenges}
                  placeholder="e.g., Manual data entry, delayed reporting, data quality issues..."
                  className="p-3 border rounded-md text-base bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors h-24 resize-none"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-base font-normal mb-1">
                  How do you currently collect data? (Optional)
                </label>
                <textarea
                  name="dataCollectionMethods"
                  value={formData.dataCollectionMethods}
                  placeholder="e.g., Paper forms, Excel sheets, Google Forms, other software..."
                  className="p-3 border rounded-md text-base bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors h-20 resize-none"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div className="p-4 rounded-md">
              <p
                className={`text-${
                  submitStatus === "success" ? "green" : "red"
                }-600 font-medium`}
              >
                {submitStatus === "success"
                  ? "Trial request submitted successfully! We'll set up your environment and contact you within 24 hours."
                  : "Failed to submit request. Please try again or contact support."}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-8 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-105 active:scale-95"
              style={{
                background: Colors.Primary_font,
                color: Colors.Font_4,
                boxShadow: "0px 8px 20px rgba(85, 99, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = Colors.Click;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = Colors.Primary_font;
              }}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Setting Up Your Trial..."
                : "Start My Free Trial"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartTrial;
