import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pic1 from "../../assets/pic1.jpg"; // Adjust the path as necessary
import worldcup from "../../assets/HomePage/WORLD CUP STADIUM, DOHA, QATAR.webp"; // Adjust the path as necessary
import wellington from "../../assets/HomePage/WELLINGTON HEALTH, BOX HILL, AUSTRALIA.webp"; // Adjust the path as necessary
import kapsarc from "../../assets/HomePage/KAPSARC RESEARCH PROJECT, SAUDI ARABIA.webp"; // Adjust the path as necessary
import blueplanet from "../../assets/HomePage/BLUE PLANET, CHATTERLEY VALLEY, STOKE.webp"; // Adjust the path as necessary
import Navbar from "./../GlobalComponents/NavBar";
import Footer from "./../GlobalComponents/Footer";
import FooterDark from "../GlobalComponents/FooterDark";

const SiFluxHomepage = () => {
  // Add this to the top of any suspect components
  // console.log("Component rendering:", Date.now());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "HANIMAADHOO INTERNATIONAL AIRPORT",
      subtitle: "MALDIVES",
      image: pic1,
    },
    {
      title: "WORLD CUP STADIUM",
      subtitle: "DOHA, QATAR",
      image: worldcup,
    },
    {
      title: "WELLINTON HEALTH",
      subtitle: "BOX HILL, AUSTRALIA",
      image: wellington,
    },
    {
      title: "KAPSARC RESEARCH PROJECT",
      subtitle: "SAUDI ARABIA",
      image: kapsarc,
    },
    {
      title: "BLUE PLANET",
      subtitle: "CHATTERLEY VALLEY, STOKE",
      image: blueplanet,
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Header */}
      <Navbar />
      <div className="pt-[60px] md:pt-[123px]">
        {" "}
        {/* Responsive padding */} {/* Add this wrapper */}
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 z-20"
                      : "opacity-0 z-10"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt="Airport aerial view"
                    className="w-full h-full object-cover object-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)",
                    }}
                  />
                  {/* Dark Blue Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-blue-700/10 via-blue-700/10 to-slate-950/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-custom-overlay mix-blend-multiply pointer-events-none opacity-90" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className={`absolute left-8 sm:left-12 md:left-16 lg:left-20 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className={`absolute right-8 sm:right-12 md:right-16 lg:right-20 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Content - Moved towards bottom */}
{/* Content - Moved towards bottom */}
<div className="absolute bottom-80 sm:bottom-40 md:bottom-48 left-0 right-0 z-30">            <div className="text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
              <h1 className="text-white text-center font-dm-sans text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase tracking-wider leading-snug mb-0 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] shadow-black/80">
                {slides[currentSlide].title}
              </h1>

              <p className="text-white text-center font-dm-sans text-sm sm:text-base md:text-lg lg:text-[20px] font-normal uppercase tracking-wider opacity-90 leading-normal drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)] shadow-black/70">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-40">
            <div className="flex space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/60"
                  } ${isTransitioning ? "cursor-not-allowed opacity-70" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SiFluxHomepage;
