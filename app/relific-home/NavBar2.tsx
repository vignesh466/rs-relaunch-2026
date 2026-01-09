"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X } from "lucide-react"
import Link from "next/link"

const Colors = {
  Primary_font: "#5563FF",
  Font_4: "#FFFFFF",
  Font_3: "#363636",
  Bg_color_3: "#FFFFFF",
  Form_outline: "#CCCCCC",
  Click: "#2435FB",
}

export default function NavBar2() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
          <span 
            className="cursor-pointer transition-colors"
            style={{ color: Colors.Font_3 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = Colors.Primary_font)}
            onMouseLeave={(e) => (e.currentTarget.style.color = Colors.Font_3)}
          >
            Platform
          </span>
          <span 
            className="cursor-pointer transition-colors"
            style={{ color: Colors.Font_3 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = Colors.Primary_font)}
            onMouseLeave={(e) => (e.currentTarget.style.color = Colors.Font_3)}
          >
            Solutions
          </span>
          <span 
            className="cursor-pointer transition-colors"
            style={{ color: Colors.Font_3 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = Colors.Primary_font)}
            onMouseLeave={(e) => (e.currentTarget.style.color = Colors.Font_3)}
          >
            About
          </span>
          <span 
            className="cursor-pointer transition-colors"
            style={{ color: Colors.Font_3 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = Colors.Primary_font)}
            onMouseLeave={(e) => (e.currentTarget.style.color = Colors.Font_3)}
          >
            Pricing
          </span>
        </div>
      )}

      {/* Desktop Buttons */}
      {!isMobile && (
        <div className="hidden lg:flex items-center gap-3 mr-5">
          <button 
            className="px-4 py-2 border rounded-lg transition-colors"
            style={{
              borderColor: "#5563FF",
              backgroundColor: "#EAECFF",
              color: "#5563FF",
            }}
          >
            Log in
          </button>
          <button 
            className="px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = Colors.Click)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = Colors.Primary_font)}
          >
            Schedule demo
          </button>
        </div>
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
          <span 
            className="py-2 text-lg font-semibold w-full text-center hover:bg-gray-100 cursor-pointer"
            style={{ color: Colors.Font_3 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Platform
          </span>
          <span 
            className="py-2 text-lg font-semibold w-full text-center hover:bg-gray-100 cursor-pointer"
            style={{ color: Colors.Font_3 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Solutions
          </span>
          <span 
            className="py-2 text-lg font-semibold w-full text-center hover:bg-gray-100 cursor-pointer"
            style={{ color: Colors.Font_3 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </span>
          <span 
            className="py-2 text-lg font-semibold w-full text-center hover:bg-gray-100 cursor-pointer"
            style={{ color: Colors.Font_3 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </span>
          
          <button 
            className="px-4 py-2 border rounded-lg transition-colors mt-3 w-full"
            style={{
              borderColor: "#5563FF",
              backgroundColor: "#EAECFF",
              color: "#5563FF",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </button>
          <button 
            className="px-5 py-2 rounded-lg font-normal mt-3 w-full transition-colors mb-2"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Schedule demo
          </button>
        </div>
      )}
    </nav>
  )
}
