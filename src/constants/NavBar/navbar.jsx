// Navbar.jsx

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Colors from "../Color";
import {
  productLinks,
  solutionsLinks,
  resourcesLinks,
  navLinks,
} from "../../constants/Content";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setDropdownOpen(null);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const DropdownContent = ({ items, dropdownType, isMobile = false }) => (
    <div
      className={`${
        isMobile
          ? "w-full bg-white border-t border-b"
          : "absolute left-0 top-full mt-2 shadow-lg"
      } rounded-lg ${isMobile ? "py-1" : "p-2"}`}
      style={{
        width: isMobile ? "100%" : "200px",
        height: "auto", // Removed fixed height
        overflowY: "auto",
        backgroundColor: Colors.Bg_color_3,
        borderColor: Colors.Form_outline,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map((item, i) => (
        <Link
          href={item.path}
          key={i}
          className="block w-full"
          onMouseEnter={() => setHoveredItem(`${dropdownType}-${i}`)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative">
            {hoveredItem === `${dropdownType}-${i}` && !isMobile && (
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundColor: Colors.Primary_font,
                  width: "200px",
                  height: "48px",
                  left: "-8px",
                }}
              />
            )}
            <div
              className={`w-full rounded transition-colors flex items-center relative z-10 ${
                isMobile
                  ? "py-2 text-lg font-semibold justify-center hover:bg-gray-100"
                  : "pl-3 text-left"
              }`}
              style={{
                fontSize: isMobile ? "16px" : "16px",
                width: "100%",
                height: isMobile ? "auto" : "46px",
                color: isMobile
                  ? hoveredItem === `${dropdownType}-${i}`
                    ? Colors.Primary_font
                    : Colors.Font_3
                  : hoveredItem === `${dropdownType}-${i}`
                  ? Colors.Font_4
                  : Colors.Font_3,
              }}
            >
              {item.drop}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 flex items-center justify-between px-4 md:px-20 py-6 bg-white ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: Colors.Form_outline,
        color: Colors.Font_3,
      }}
    >
      {/* Logo */}
      <Link href="/" className="md:ml-10">
        <img
          src="/logo.png"
          alt="Relific Logo"
          className="h-10 cursor-pointer"
        />
      </Link>

      {/* Desktop Menu */}
      {!isMobile && (
        <div className="hidden lg:flex gap-8 text-md items-center">
          {navLinks
            .filter(({ name }) => name !== "Solutions")
            .map(({ name, path, hasDropdown }, index) => (
              <div key={index} className="relative">
                {hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(name)}
                    className="flex items-center gap-1 transition-colors"
                    style={{
                      color:
                        pathname === path || dropdownOpen === name
                          ? Colors.Primary_font
                          : Colors.Font_3,
                      textDecoration:
                        pathname === path || dropdownOpen === name
                          ? "underline"
                          : "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = Colors.Primary_font)
                    }
                    onMouseLeave={(e) => {
                      if (pathname !== path && dropdownOpen !== name) {
                        e.currentTarget.style.color = Colors.Font_3;
                      }
                    }}
                  >
                    {name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        dropdownOpen === name ? "rotate-180" : ""
                      }`}
                      style={{
                        color:
                          dropdownOpen === name || pathname === path
                            ? Colors.Primary_font
                            : Colors.Font_3,
                      }}
                    />
                  </button>
                ) : (
                  <Link
                    href={path}
                    className="flex items-center gap-1 transition-colors"
                    style={{
                      color:
                        pathname === path ? Colors.Primary_font : Colors.Font_3,
                      textDecoration: pathname === path ? "underline" : "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = Colors.Primary_font)
                    }
                    onMouseLeave={(e) => {
                      if (pathname !== path) {
                        e.currentTarget.style.color = Colors.Font_3;
                      }
                    }}
                  >
                    {name}
                  </Link>
                )}
                {dropdownOpen === name && hasDropdown && (
                  <DropdownContent
                    items={
                      name === "Products"
                        ? productLinks
                        : name === "Resources"
                        ? resourcesLinks
                        : solutionsLinks
                    }
                    dropdownType={name}
                  />
                )}
              </div>
            ))}
        </div>
      )}

      {/* Request Demo Button */}
      {!isMobile && (
        <Link
          href="/contact"
          className="mr-5 px-6 py-3 rounded-lg shadow-lg transition-all lg:block transform hover:scale-105 active:scale-95 inline-block text-center"
          style={{
            backgroundColor: Colors.Primary_font,
            color: Colors.Font_4,
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = Colors.Click)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = Colors.Primary_font)
          }
        >
          Request Demo
        </Link>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 w-full shadow-md flex flex-col items-center py-3 px-5 lg:hidden"
          style={{ backgroundColor: Colors.Bg_color_3 }}
        >
          {navLinks
            .filter(({ name }) => name !== "Solutions")
            .map(({ name, path, hasDropdown }, index) => (
              <div key={index} className="w-full">
                {hasDropdown ? (
                  <button
                    className="py-2 text-lg font-semibold w-full text-center hover:bg-gray-100 flex items-center justify-center gap-1"
                    style={{
                      color:
                        dropdownOpen === name
                          ? Colors.Primary_font
                          : Colors.Font_3,
                    }}
                    onClick={() => toggleDropdown(name)}
                  >
                    {name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        dropdownOpen === name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={path}
                    className="py-2 text-lg font-semibold w-full text-center hover:bg-gray-100 items-center justify-center gap-1 block"
                    style={{
                      color:
                        pathname === path ? Colors.Primary_font : Colors.Font_3,
                      textDecoration: "none",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </Link>
                )}
                {dropdownOpen === name && hasDropdown && (
                  <DropdownContent
                    items={
                      name === "Products"
                        ? productLinks
                        : name === "Resources"
                        ? resourcesLinks
                        : solutionsLinks
                    }
                    dropdownType={name}
                    isMobile={true}
                  />
                )}
              </div>
            ))}

          <Link
            href="/contact"
            className="px-5 py-2 rounded-lg font-normal mt-4 w-mid transition-colors mb-2 inline-block text-center"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
              textDecoration: "none",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Request Demo
          </Link>
        </div>
      )}

      {dropdownOpen && (
        <div className="fixed inset-0" onClick={closeDropdown} />
      )}
    </nav>
  );
};

export default Navbar;
