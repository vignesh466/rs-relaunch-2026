import React from "react";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Drive-R", href: "/drive_r" },
    { name: "Surve-R", href: "/surve_r" },
    { name: "ProGran", href: "/progran" },
    { name: "Other Solutions", href: "/other_solutions" },
    { name: "Blogs", href: "/blogs" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const socialLinks = [
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/i/flow/login?redirect_after_login=%2Fkrisiyukta",
      label: "Twitter",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/krisiyukta/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/people/Krisiyukta/61554575933728/#",
      label: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/krisiyukta/",
      label: "Instagram",
    },
  ];

  const certifications = [
    { src: "/assets/certifications/iso_new.svg", alt: "ISO Certified" },
  ];

  const titleClass = "font-semibold text-gray-900" + " text-[18px]";
  const bodyTextClass = "text-gray-700" + " text-[15px]";
  const certWrapperStyle = { width: "4.85rem", height: "4.85rem" };
  const certLogoStyle = { width: "4.85rem", height: "4.85rem" };

  return (
    <footer className="w-full relative z-10 bg-[#F5F5F5]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-4">
        <div className="space-y-8">
          {/* Mobile Essentials */}
          <div className="md:hidden space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Relific Technologies Private Limited
            </h3>

            {/* Email */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
              <a
                href="mailto:contact@relific.io"
                className="text-base text-gray-700"
              >
                contact@relific.io
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Let's connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 bg-[#6D6AFF] rounded-[12px] flex items-center justify-center text-white shadow-sm border border-white/40"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Certifications
              </p>
              <div className="flex gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100"
                    style={certWrapperStyle}
                  >
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className={`${index === 0 ? "rounded-full" : ""} object-contain`}
                      style={certLogoStyle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_1.1fr] gap-10 lg:gap-16 items-start">
            {/* Left Column - Company Info */}
            <div className="space-y-5">
              <h3 className={titleClass}>
                Relific Technologies Private Limited
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin
                    size={18}
                    className="text-[#5563FF] mt-1 flex-shrink-0"
                  />
                  <div>
                    <p
                      className={`${bodyTextClass} font-semibold text-gray-900`}
                    >
                      Bangalore office
                    </p>
                    <p className={`${bodyTextClass} leading-relaxed`}>
                      MIG 331, 3rd Cross, Surayacity,
                      <br />
                      Anekal Road, Chandapura,
                      <br />
                      Bangalore 560099.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#5563FF] flex-shrink-0" />
                    <div>
                      <span
                        className={`${bodyTextClass} font-semibold text-gray-900`}
                      >
                        Phone
                      </span>
                      <p className={bodyTextClass}>+91 63614 66735</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#5563FF] flex-shrink-0" />
                    <div>
                      <span
                        className={`${bodyTextClass} font-semibold text-gray-900`}
                      >
                        Email
                      </span>
                      <p className={bodyTextClass}>contact@relific.io</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div>
              <h3 className={`${titleClass} mb-5`}>Quick links</h3>
              <ul className="space-y-1">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`${bodyTextClass} hover:text-[#5563FF] transition-colors duration-200`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Social & Certifications */}
            <div className="space-y-6">
              <div>
                <h3 className={`${titleClass} mb-4`}>Let's connect</h3>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-12 h-12 bg-[#6D6AFF] rounded-[12px] flex items-center justify-center text-white shadow-sm border border-white/40 hover:-translate-y-0.5 transition-transform duration-200"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`${titleClass} mb-4`}>Certifications</h3>
                <div className="flex gap-4 items-center flex-wrap">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100"
                      style={certWrapperStyle}
                    >
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className={`${index === 0 ? "rounded-full" : ""} object-contain`}
                        style={certLogoStyle}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#5563FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-white text-xs text-center">
            © 2026 Relific Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
