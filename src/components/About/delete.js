import React, { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Award,
  Factory,
  ThumbsUp,
  Building,
  Cog,
} from "lucide-react";
// Import your components here:
// import Navbar from "../GlobalComponents/NavBar";
// import Footer from "../GlobalComponents/Footer";

const SiphonicTimeline = () => {
  const timelineRef = useRef(null);
  const pathRef = useRef(null);
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [pathProgress, setPathProgress] = useState(0);

  const timelineData = [
    {
      year: 1972,
      title: "Basic Siphonic Technology",
      subtitle: "Innovated by Olavi Ebeling & Risto Lundén in Finland",
      detail: "(FOR FLAT CONCRETE ROOF ONLY)",
      icon: Award,
      side: "right",
      pathPosition: { x: 650, y: 9 },
    },
    {
      year: 1983,
      title: "First Self-Priming Siphonic System",
      subtitle:
        "Dr.John A. Herrero Smith developed and patented the world's first self-priming Siphonic system in the United Kingdom (UK)",
      detail: "(FOR USE IN GUTTER & FLAT ROOF)",
      icon: Lightbulb,
      side: "left",
      pathPosition: { x: 235, y: 181 },
    },
    {
      year: 2004,
      title: "Anti-Block Finless Geometric Outlet",
      subtitle:
        "Through continuous R&D, Dr. John pioneered the invention of the world's first Anti-Block Finless Geometric Outlet",
      detail: "",
      icon: Building,
      side: "left",
      pathPosition: { x: 397, y: 389 },
    },
    {
      year: 2008,
      title: "University Testing",
      subtitle:
        "Prototype successfully manufactured and product tested at 'University of Sheffield'",
      detail: "(TO EN. STANDARDS)",
      icon: Award,
      side: "right",
      pathPosition: { x: 848, y: 494 },
    },
    {
      year: 2010,
      title: "UKAS Calibration",
      subtitle:
        "Successfully completed UKAS Calibration Sand & flow empirical testing",
      detail: "",
      icon: Award,
      side: "right",
      pathPosition: { x: 848, y: 605 },
    },
    {
      year: 2021,
      title: "IPO Registration",
      subtitle:
        "IPO outlet design registration & protection successfully granted",
      detail: "",
      icon: ThumbsUp,
      side: "left",
      pathPosition: { x: 158, y: 714 },
    },
    {
      year: 2021,
      title: "Production Facility",
      subtitle:
        "Production facility established in Thailand to serve the Asia - Pacific market",
      detail: "",
      icon: Factory,
      side: "right",
      pathPosition: { x: 743, y: 820 },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prevVisible) => {
          const updated = new Set(prevVisible);
          entries.forEach((entry) => {
            const index = parseInt(entry.target.dataset.index);
            if (entry.isIntersecting) {
              updated.add(index);
            }
          });
          return updated;
        });
      },
      {
        threshold: 0.3,
      }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);


  
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (viewHeight - rect.top) / (viewHeight + rect.height))
      );
      setPathProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const convertSVGToScreenCoords = (svgX, svgY) => {
    const svgWidth = 1000;
    const svgHeight = 830;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Scale factor to fit the SVG in the container
    const scaleX = containerWidth / svgWidth;
    const scaleY = containerHeight / svgHeight;
    const scale = Math.min(scaleX, scaleY) * 0.9; // 0.9 to give some padding

    const offsetX = (containerWidth - svgWidth * scale) / 2;
    const offsetY = 120; // Account for header

    return {
      x: svgX * scale + offsetX,
      y: svgY * scale + offsetY,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Replace with your Navbar component */}
      {/* <Navbar /> */}

      <div ref={timelineRef} className="relative min-h-screen pt-20 pb-10">
        {/* Header */}
        <div className="container mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-cyan-400 mb-2">EVOLUTION OF</span>
            <span className="block text-white">SIPHONIC SYSTEMS</span>
          </h1>
        </div>

        {/* Timeline Container */}

        <div className="relative w-full h-screen">
          {/* SVG Path */}

          <svg
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            viewBox="0 0 1000 830"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0B4C82" />
                <stop offset="50%" stopColor="#07B7E0" />
                <stop offset="100%" stopColor="#0B4C82" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              ref={pathRef}
              d="M364.088 9.33459H650.631C672 9.33459 746.118 9.33459 746.118 97.5C746.118 185.665 671.5 181.275 650.631 181.275H397.074C364.088 181.275 235 175.577 235 288.5C235 401.423 364.088 389.512 397.074 389.512H848.695C896 389.512 990.342 398.5 990.342 494.825C990.342 597.5 896.5 605.049 848.695 605.049H158.894C108 605.049 9 613.5 9 714.743C9 807 108.5 820.057 158.894 820.057H743.5"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="18"
              strokeDasharray="3000"
              strokeDashoffset={3000 - pathProgress * 3000}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              className="transition-all duration-1000 ease-out"
              style={{
                filter: "drop-shadow(0 0 10px rgba(11, 76, 130, 0.5))",
              }}
            />
          </svg>

          {/* Timeline Items */}
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.has(index);
            const coords = convertSVGToScreenCoords(
              item.pathPosition.x,
              item.pathPosition.y
            );

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`absolute z-20 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{
                  left: `${coords.x}px`,
                  top: `${coords.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Timeline Point */}
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white/20 relative z-10">
                    {item.year}
                    <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Connection Line */}
                  <div
                    className={`absolute w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent ${
                      item.side === "left" ? "-right-12" : "-left-12"
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`absolute top-0 ${
                    item.side === "left" ? "-right-96" : "-left-96"
                  } w-80`}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                    {item.detail && (
                      <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>









        {/* Decorative Elements */}
        <div className="absolute top-32 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-64 left-32 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-40 right-40 w-3 h-3 bg-cyan-300 rounded-full animate-bounce opacity-50"></div>

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Replace with your Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default SiphonicTimeline;
