import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Colors from "../../constants/Color";

const GenericSolutionPage = ({
  solutionName = "Coming Soon",
  solutionDescription = "Our innovative platform is being developed to transform how organizations operate through intuitive interfaces, powerful analytics, and seamless system integration. We're creating a solution designed specifically for your industry's unique challenges.",
  keyFeatures = [
    "AI-powered analytics for data-driven decision making",
    "Cross-platform functionality for desktop and mobile access",
    "Customizable dashboards reflecting your organization's priorities",
    "Workflow automation to reduce manual processes",
    "Comprehensive reporting for stakeholders",
  ],
}) => {
  const router = useRouter();

  return (
    <div
      className="min-h-screen py-12 px-6 md:px-12"
      style={{ backgroundColor: Colors.Bg_color_3 }}
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="mb-8 p-5 rounded-lg text-center"
          style={{
            backgroundColor: Colors.More_bg,
            borderLeft: `4px solid ${Colors.Primary_font}`,
          }}
        >
          <p
            className="text-lg font-semibold"
            style={{ color: Colors.Primary_font }}
          >
            We're actively developing this solution
          </p>
          <p className="mt-2" style={{ color: Colors.Font_3 }}>
            While we put the finishing touches on this product, we'd love to
            hear what you need
          </p>
        </div>

        <div className="mb-8">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: Colors.Primary_font }}
          >
            What We're Building
          </h2>
          <p className="mb-4" style={{ color: Colors.Font_3 }}>
            {solutionDescription}
          </p>
          <p style={{ color: Colors.Font_3 }}>
            Instead of rushing to market with an incomplete solution, we're
            taking the time to get it right. Our development process
            incorporates feedback from industry experts and potential users like
            you.
          </p>
        </div>

        <div className="mb-8">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: Colors.Primary_font }}
          >
            Planned Features
          </h2>
          <ul className="space-y-2">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span
                  className="mr-2 flex-shrink-0"
                  style={{ color: Colors.Primary_font }}
                >
                  •
                </span>
                <p style={{ color: Colors.Font_3 }}>{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: Colors.Primary_font }}
          >
            Help Shape Our Solution
          </h2>
          <p className="mb-3" style={{ color: Colors.Font_3 }}>
            The most effective solutions are built with input from the people
            who will use them. Your feedback now will directly influence our
            development priorities.
          </p>
          <p style={{ color: Colors.Font_3 }}>
            Tell us about your specific challenges and what would make this
            solution valuable to your organization. Early participants may
            receive priority access when we launch.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/tellmore"
            className="relative overflow-hidden px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base transform hover:scale-105 active:scale-95 inline-block text-center"
            style={{
              backgroundColor: Colors.Font_4,
              color: Colors.Primary_font,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = Colors.Click;
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = Colors.Font_4;
              e.currentTarget.style.color = Colors.Primary_font;
            }}
          >
            Tell Us What You Need
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenericSolutionPage;
