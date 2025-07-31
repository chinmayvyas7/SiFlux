import React from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="relative">
      {/* White semicircle that overlaps */}
      <div className="absolute -top-4 sm:-top-5 md:-top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white rounded-t-full w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]"></div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
            {/* Copyright Text */}
            <div className="text-center md:text-left">
              <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-relaxed uppercase text-[#9795B5] font-dm-sans">
                Copyright © Si-FLUX INDIA PVT. LTD. 
                <span className="hidden sm:inline"> | All Rights Reserved</span>
                <span className="block sm:hidden text-[10px] mt-1">All Rights Reserved</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 p-1"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-1"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200 p-1"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-700 transition-colors duration-200 p-1"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-1"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;