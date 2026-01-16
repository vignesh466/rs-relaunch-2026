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
import Colors from "../Color";

const Footer = () => {
  const productsLinks = [
    { name: "Drive-R", href: "/drive_r" },
    { name: "Surve-R", href: "/surve_r" },
    { name: "ProGran", href: "/progran" },
    { name: "All Products", href: "/allproducts" },
  ];

  const resourcesLinks = [
    { name: "Demo Videos", href: "/demo-videos" },
    { name: "Blogs", href: "/blogs" },
    { name: "Other Solutions", href: "/other_solutions" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/aboutus" },
    { name: "Who We Serve", href: "/whoweserve" },
    { name: "Contact Us", href: "/contact" },
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

  return (
    <footer
      className="w-full rounded-t-3xl relative z-10"
      style={{ backgroundColor: Colors.Primary_font }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="text-center space-y-6">
            {/* Company Info */}
            <div>
              <img
                src="/logo.png"
                alt="Relific Logo"
                className="w-32 mx-auto mb-3 brightness-0 invert"
              />

              <p className="text-white/90 text-sm leading-relaxed max-w-xs mx-auto">
                Empowering social impact through intelligent data solutions.
                From grassroots data collection to real-time analytics and
                SDG-aligned reporting.
              </p>
            </div>
            {/* Contact Info - Compact */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Mail size={14} className="text-white/80" />
                <a
                  href="mailto:sales@krisiyukta.com"
                  className="text-white text-sm hover:text-white/80 transition-colors duration-200"
                >
                  contact@relific.io
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} className="text-white/80" />
                <a
                  href="tel:+916361466735"
                  className="text-white text-sm hover:text-white/80 transition-colors duration-200"
                >
                  +91 63614 66735
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex justify-center gap-3">
              {socialLinks.map(({ icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:items-start md:justify-between gap-12">
          {/* Company Info - Left Side */}
          <div className="flex-1 max-w-md">
            <img
              src="/logo.png"
              alt="Relific Logo"
              className="w-40 mb-4 brightness-0 invert"
            />
            <p className="text-white/90 mb-6 leading-relaxed text-sm">
              Intelligent data solutions for social impact organizations. From
              mobile data collection to real-time dashboards and
              compliance-ready reports—helping you turn ground truth into
              measurable change.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map(({ icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links - Right Side */}
          <div className="flex-[2]">
            <div className="grid grid-cols-3 gap-12 max-w-2xl w-full">
              {/* Products */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Products
                </h3>
                <ul className="space-y-3">
                  {productsLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {resourcesLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="border-t border-white/20"
        style={{ backgroundColor: `${Colors.Primary_font}dd` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="flex justify-center items-center">
            <p className="text-white/90 text-sm text-center font-medium">
              © 2025 Relific Technologies Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
