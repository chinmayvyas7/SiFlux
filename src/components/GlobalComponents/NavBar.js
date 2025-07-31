import React, { useState, useEffect } from "react";
import logo from "../../assets/siflux white logo4x 1.png"; // Adjust the path as necessary
import NavigationTabs from "./NavigationTabs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-custom-blue backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "h-auto md:h-[80px] shadow-lg" : "h-auto md:h-[123px]"
      }`}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-9 transition-all duration-300 ${
          scrolled ? "py-2 pb-3" : "py-4"
        }`}
        style={{ maxWidth: "88rem" }}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "pt-0" : "pt-2 md:pt-[10px]"
          }`}
        >
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              className={`transition-all duration-300 ${
                scrolled
                  ? "w-20 sm:w-24 md:w-28 lg:w-32"
                  : "w-32 sm:w-40 md:w-48 lg:w-auto"
              } h-auto`}
              alt="Siflux Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationTabs />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <NavigationTabs
              mobile={true}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
