import React, { useRef, useEffect, useState } from "react";
import { Lightbulb, Award, Factory, ThumbsUp, Building } from "lucide-react";
import FooterDark from "../GlobalComponents/FooterDark";
import Navbar from "../GlobalComponents/NavBar";
import CardCarousel from "./Marquee";
import india from "../../assets/AboutPage/siflux global and india/24.webp";
// import world from "../../assets/AboutPage/siflux global and india/23.webp";
import world from "../../assets/AboutPage/siflux global and india/21.jpg";

//logos
import logo1 from "../../assets/AboutPage/logos/bulb.png";
import logo2 from "../../assets/AboutPage/logos/brain.png";
import logo3 from "../../assets/AboutPage/logos/magnify.png";
import logo4 from "../../assets/AboutPage/logos/worker.png";
import logo5 from "../../assets/AboutPage/logos/certif.png"; // Fixed typo
import logo6 from "../../assets/AboutPage/logos/12.png";
import logo7 from "../../assets/AboutPage/logos/13.png";
import logo8 from "../../assets/AboutPage/logos/end production icon.png";

const AboutUs = () => {
  const timelineRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (pathRef.current) {
      // Get the actual path length
      const length = pathRef.current.getTotalLength();
      setPathLength(length);

      // Start animation after a brief delay
      setTimeout(() => {
        setAnimate(true);
      }, 500);
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="pt-[60px] md:pt-[123px]">
        {/* Responsive padding */}
        {/* Timeline Section */}
        <div
          className="bg-custom-blue text-white relative overflow-hidden"
          style={{ minHeight: "1200px" }}
        >
          <div
            ref={timelineRef}
            className="relative py-15 px-6"
            style={{ minHeight: "1200px" }}
          >
            {/* Header */}
            <div className="absolute top-[55px] left-[88px]">
              <h1 className="text-5xl md:text-5xl font-bold mb-4 leading-tight">
                <span
                  className="block text-cyan-400 mb-2"
                  style={{
                    color: "#07B7E0",
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "56px",
                    fontWeight: 700,
                    lineHeight: "52px",
                  }}
                >
                  EVOLUTION OF
                </span>
                <span
                  className="block text-white"
                  style={{
                    color: "#FFF",
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "56px",
                    fontWeight: 700,
                    lineHeight: "52px",
                  }}
                >
                  SIPHONIC SYSTEMS
                </span>
              </h1>
            </div>

            {/* Timeline SVG Path with positioned circles */}
            <style>
              {`
              .timeline-path {
                stroke-dasharray: ${pathLength};
                stroke-dashoffset: ${pathLength};
                transition: none;
              }
              
              .timeline-path.animate {
                stroke-dashoffset: 0;
                transition: stroke-dashoffset 4s ease-in-out;
              }
            `}
            </style>
            <svg
              className="absolute inset-0 h-full z-10 pointer-events-none"
              viewBox="-50 -50 1100 1100"
              preserveAspectRatio="xMidYMid meet"
              style={{ top: "78px", width: "104%" }}
            >
              <defs>
                <linearGradient
                  id="pathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0b4c82" />
                  <stop offset="50%" stopColor="#1565a3" />
                  <stop offset="100%" stopColor="#0b4c82" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient
                  id="circleGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
              </defs>

              <path
                ref={pathRef}
                className={`timeline-path ${animate ? "animate" : ""}`}
                d="M364.088 9.33459H650.631C672 9.33459 746.118 9.33459 746.118 97.5C746.118 185.665 671.5 181.275 650.631 181.275H397.074C364.088 181.275 235 175.577 235 288.5C235 401.423 364.088 389.512 397.074 389.512H848.695C896 389.512 990.342 398.5 990.342 494.825C990.342 597.5 896.5 605.049 848.695 605.049H158.894C108 605.049 9 613.5 9 714.743C9 807 108.5 820.057 158.894 820.057H743.5"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(11, 76, 130, 0.5))",
                }}
              />

              {/* Timeline Circles positioned on the path */}
              {/* 1972 - Start of timeline (moved inward to avoid clipping) */}
              <circle
                cx="680"
                cy="10"
                r="32"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <circle
                cx="729"
                cy="35"
                r="11"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <text
                x="680"
                y="15"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
                fontFamily='"DM Sans", sans-serif'
              >
                1972
              </text>

              {/* 1983 - First curve */}
              <circle
                cx="300"
                cy="193"
                r="32"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <circle
                cx="247"
                cy="185"
                r="11"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <text
                x="300"
                y="200"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
                fontFamily='"DM Sans", sans-serif'
              >
                1983
              </text>

              {/* 2004 - Second curve */}
              <circle
                cx="430"
                cy="388"
                r="32"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <circle
                cx="385"
                cy="415"
                r="11"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <text
                x="430"
                y="395"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
                fontFamily='"DM Sans", sans-serif'
              >
                2004
              </text>

              {/* 2008 - Third curve */}
              <circle
                cx="770"
                cy="388"
                r="32"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <circle
                cx="810"
                cy="350"
                r="11"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <text
                x="770"
                y="395"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
                fontFamily='"DM Sans", sans-serif'
              >
                2008
              </text>

              {/* 2010 - Fourth curve */}
              <circle
                cx="860"
                cy="603"
                r="32"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <circle
                cx="872"
                cy="655"
                r="11"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <text
                x="860"
                y="609"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
                fontFamily='"DM Sans", sans-serif'
              >
                2010
              </text>

              {/* 2021 IPO - Fifth curve */}
              <circle
                cx="300"
                cy="603"
                r="32"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <circle
                cx="337"
                cy="640"
                r="11"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <text
                x="300"
                y="609"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
                fontFamily='"DM Sans", sans-serif'
              >
                2021
              </text>

              {/* 2021 Production - End of timeline */}
              <circle
                cx="150"
                cy="818"
                r="32"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <circle
                cx="175"
                cy="863"
                r="11"
                fill="url(#circleGradient)"
                className="pointer-events-auto"
              />
              <text
                x="150"
                y="825"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
                fontFamily='"DM Sans", sans-serif'
              >
                2021
              </text>
            </svg>

            {/* Logo Images positioned on top of circles */}
            {/* Logo for 1972 - positioned on circle at (680, 10) */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: "68px", // 78 + 10 - 20 = 68px
                left: "985px", // 680 - 20 = 660px
                transform: "scale(1.75)", // Increased by 30%: 0.6 * 1.3 = 0.78
              }}
            >
              <img
                src={logo1}
                alt="1972 Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Logo for 1983 - positioned on circle at (300, 193) */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: "265px", // 78 + 193 - 20 = 251px
                left: "535px", // 300 - 20 = 280px
                transform: "scale(1.75)",
              }}
            >
              <img
                src={logo2}
                alt="1983 Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Logo for 2004 - positioned on circle at (430, 388) */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: "485px", // 78 + 388 - 20 = 446px
                left: "700px", // 430 - 20 = 410px
                transform: "scale(1.75)",
              }}
            >
              <img
                src={logo3}
                alt="2004 Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Logo for 2008 - positioned on circle at (770, 388) */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: "490px", // 78 + 388 - 20 = 446px
                left: "1050px", // 770 - 20 = 750px
                transform: "scale(2.0)",
              }}
            >
              <img
                src={logo4}
                alt="2008 Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Logo for 2010 - positioned on circle at (860, 603) */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: "720px", // 78 + 603 - 20 = 661px
                left: "1185px", // 860 - 20 = 840px
                transform: "scale(1.85)",
              }}
            >
              <img
                src={logo5}
                alt="2010 Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Logo for 2021 IPO - positioned on circle at (300, 603) */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: "725px", // 78 + 603 - 20 = 661px
                left: "570px", // 300 - 20 = 280px
                transform: "scale(1.5)",
              }}
            >
              <img
                src={logo6}
                alt="2021 IPO Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Logo for 2021 Production - positioned on circle at (150, 818) */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: "957px", // 78 + 818 - 20 = 876px
                left: "427px", // 150 - 20 = 130px
                transform: "scale(2)",
              }}
            >
              <img
                src={logo7}
                alt="2021 Production Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Second logo at same position (you may want to adjust this) */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: "989px", // 78 + 818 - 20 = 876px
                left: "1030px", // 150 - 20 = 130px
                transform: "scale(3)", // Increased by 30%: 0.6 * 1.3 = 0.78
              }}
            >
              <img
                src={logo8}
                alt="2021 Production Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Timeline Items - Positioned next to SVG circles */}
            {/* 1972 Milestone - positioned next to circle at (680, 10) */}
            <div
              className="absolute"
              style={{ top: "85px", left: "1070px", fontFamily: "DM Sans" }}
            >
              <div className="w-80">
                <h3 className="text-lg font-bold text-white mb-1">
                  Basic Siphonic Technology
                </h3>
                <p className="text-gray-300 text-sm mb-1">
                  Innovated by Olavi Ebeling & Risto Lundén in Finland
                </p>
                <p className="text-cyan-400 text-xs font-semibold uppercase">
                  (FOR FLAT CONCRETE ROOF ONLY)
                </p>
              </div>
            </div>

            <div
              className="absolute text-right"
              style={{ top: "230px", left: "170px", fontFamily: "DM Sans" }}
            >
              <div className="w-80">
                <h3 className="text-lg font-bold text-white mb-1">
                  First Self-Priming Siphonic System
                </h3>
                <p className="text-gray-300 text-sm mb-1">
                  Dr. John A. Herrero Smith developed and patented the world's
                  first self-priming Siphonic system in the United Kingdom (UK)
                </p>
                <p className="text-cyan-400 text-xs font-semibold uppercase">
                  (FOR USE IN GUTTER & FLAT ROOF)
                </p>
              </div>
            </div>

            {/* 2004 Milestone - positioned next to circle at (430, 390) */}
            <div
              className="absolute text-right"
              style={{ top: "570px", left: "320px", fontFamily: "DM Sans" }}
            >
              <div className="w-80">
                <h3 className="text-lg font-bold text-white mb-1">
                  Anti-Block Finless Geometric Outlet
                </h3>
                <p className="text-gray-300 text-sm">
                  Through continuous R&D, Dr. John pioneered the invention of
                  the world's first Anti-Block Finless Geometric Outlet
                </p>
              </div>
            </div>

            {/* 2008 Milestone - positioned next to circle at (770, 390) */}
            <div
              className="absolute"
              style={{ top: "430px", left: "1150px", fontFamily: "DM Sans" }}
            >
              <div className="w-80">
                <h3 className="text-lg font-bold text-white mb-1">
                  University Testing
                </h3>
                <p className="text-gray-300 text-sm mb-1">
                  Prototype successfully manufactured and product tested at
                  'University of Sheffield'
                </p>
                <p className="text-cyan-400 text-xs font-semibold uppercase">
                  (TO EN. STANDARDS)
                </p>
              </div>
            </div>

            {/* 2010 Milestone - positioned next to circle at (860, 605) */}
            <div
              className="absolute text-right"
              style={{ top: "832px", left: "1010px", fontFamily: "DM Sans" }}
            >
              <div className="w-40">
                <h3 className="text-lg font-bold text-white mb-1">
                  UKAS Calibration
                </h3>
                <p className="text-gray-300 text-sm">
                  Successfully completed UKAS Calibration Sand & flow empirical
                  testing
                </p>
              </div>
            </div>

            {/* 2021 IPO Milestone - positioned next to circle at (300, 605) */}
            <div
              className="absolute"
              style={{ top: "815px", left: "635px", fontFamily: "DM Sans" }}
            >
              <div className="w-40">
                <h3 className="text-lg font-bold text-white mb-1">
                  IPO Registration
                </h3>
                <p className="text-gray-300 text-sm">
                  IPO outlet design registration & protection successfully
                  granted
                </p>
              </div>
            </div>

            {/* 2021 Production Milestone - positioned next to circle at (150, 820) */}
            <div
              className="absolute"
              style={{ top: "1060px", left: "460px", fontFamily: "DM Sans" }}
            >
              <div className="w-80">
                <h3 className="text-lg font-bold text-white mb-1">
                  Production Facility
                </h3>
                <p className="text-gray-300 text-sm">
                  Production facility established in Thailand to serve the Asia
                  - Pacific market
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SI-FLUX GLOBAL Section - White Background */}
        <div className="relative bg-white py-20">
          {/* White pull-tab that overlaps from timeline section */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white rounded-t-full w-[65px] h-[65px]"></div>
          </div>
          <div
            className="container mx-auto "
            style={{ paddingLeft: "7.25rem" }}
          >
            <div className="grid md:grid-cols-10  tems-center">
              <div className="md:col-span-7">
                <h2 className="mb-8">
                  <span
                    style={{
                      width: "195.751px",
                      color: "#07B7E0",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "DM Sans",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "26px",
                      textTransform: "uppercase",
                      display: "block",
                      marginLeft: "2px",
                    }}
                  >
                    SI-FLUX
                  </span>
                  <span
                    style={{
                      color: "#07B7E0",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "DM Sans",
                      fontSize: "36px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "34px",
                      textTransform: "uppercase",
                      display: "block",
                    }}
                  >
                    GLOBAL
                  </span>
                </h2>
                <div
                  style={{
                    maxWidth: "863px",
                    color: "#10295A",
                    textAlign: "justify",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "DM Sans",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25px",
                  }}
                >
                  <p>
                    Si-Flux Ltd is a UK-registered global trading business. Its
                    origins are in the Research & Development of self-priming
                    Siphonic systems for customer utilization from 1983 onward.
                    Many of its pioneering developments have assisted in paving
                    the way for the international standards & guidelines that
                    exist in today's markets. Initial Siphonic research and
                    developments in 1983 pioneered the first self-priming
                    Siphonic outlet with a 3-fin anti-vortex plate. This enabled
                    full bore flow to occur whilst inhibiting vortex flow that
                    compromises full bore flow. The development of analytical
                    design software followed in conjunction with the University
                    of Sheffield that generally still underpins the global
                    industry approach. Key design concepts of a maximum -800
                    meters water column maximum negative pressure, net self
                    cleansing flows plus 10% outlet reserve built in safety
                    features that provide reliable low risk design solutions.
                    Today's Siphonic industry generally follows these principles
                    of fins or baffles in their outlet construction to create
                    vortex-free laminar flow. The downside of incorporating fins
                    or baffles can be obstructive, creating the potential for
                    blockages if not well maintained. This general disadvantage
                    is well-noted within the industry. With this disadvantage in
                    mind, Si-Flux's pioneering R&D team embarked upon an
                    in-depth study to evaluate and create a "gamechanging"
                    geometric an-vortex outlet without the use of fins or baffle
                    arrangements. Providing a safer block-resistant alternative
                    Siphonic outlet. From 2004, the same experienced and trusted
                    R&D team that developed siphonic roof drainage technology
                    for the world to benefit from has now commercialized the
                    SiFlux an-block finless siphonic outlet. The universal
                    outlet is highly robust, compatible with concrete, membrane
                    and metal roofing systems and can accommodate flows up to
                    90Lps. The outlet in conjunction with its supporting design
                    software has been rigorously tested in conjunction with the
                    University of Sheffield with UKAS calibrated and accredited
                    flow testing rigs.
                  </p>
                </div>
              </div>
              <div className="md:col-span-3">
                <img
                  src={world}
                  alt="World Map Graphic"
                  className="flex-shrink-0 object-cover w-full h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* India Section - Image 30%, Text 70% */}
        <div className="relative bg-gray-100 py-20">
          {/* Gray pull-tab that overlaps from white section */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gray-100 rounded-t-full w-[65px] h-[65px]"></div>
          </div>
          <div className="container mx-auto px-9" style={{ maxWidth: "88rem" }}>
            <div className="grid md:grid-cols-10 gap-16 items-center">
              {/* Image column - 30% */}
              <div className="md:col-span-3">
                <img
                  src={india}
                  alt="India Map Graphic"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Text column - 70% */}
              <div className="md:col-span-7 text-right">
                <div className="max-w-[863px] ml-auto text-left">
                  <div className="mb-4">
                    <span className="block text-[#07B7E0] font-bold text-2xl uppercase font-[DM Sans] leading-[26px] mb-1">
                      SI-FLUX
                    </span>
                    <span className="block text-[#07B7E0] font-bold text-[36px] uppercase font-[DM Sans] leading-[34px]">
                      INDIA
                    </span>
                  </div>
                  <div className="text-[#10295A] text-justify font-[DM Sans] text-base font-normal leading-[25px]">
                    <p>
                      Si-Flux India began operations in 2024, laying the
                      groundwork for future success. Following its official
                      incorporation and registration in India in 2025, the
                      company set up its headquarters in Gurugram, Haryana.
                      Through strategic collaborations with partners and
                      dealers, Si-Flux India now has a widespread presence in
                      all major cities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Marquee Placeholder Section - Full Width */}
        <div className="w-full mb-16">
          <div className="text-center text-gray-500">
            <CardCarousel />
          </div>
        </div>
        <FooterDark />
      </div>
    </div>
  );
};

export default AboutUs;



{/* 1972 */}
<g>
  <circle cx="680" cy="10" r="32" fill="url(#circleGradient)" />
  <circle cx="729" cy="35" r="11" fill="url(#circleGradient)" className="pointer-events-auto" />
  <image href={logo1} x={710} y={-50} width="60" height="60" />
  <foreignObject x="615" y="35" width="200" height="120">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{
      color: "#fff", fontFamily: "'DM Sans', sans-serif",
      width: "200px", textAlign: "left", lineHeight: "1.3"
    }}>
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>Basic Siphonic Technology</div>
      <div style={{ fontSize: "12px", color: "#b6eaff", marginBottom: "4px" }}>Innovated by Olavi Ebeling & Risto Lundén</div>
      <div style={{ fontSize: "11px", fontWeight: "bold", color: "#07B7E0" }}>(FOR FLAT CONCRETE ROOF ONLY)</div>
    </div>
  </foreignObject>
</g>

{/* 1983 */}
<g>
  <circle cx="300" cy="193" r="32" fill="url(#circleGradient)" />
  <circle cx="247" cy="185" r="11" fill="url(#circleGradient)" className="pointer-events-auto" />
  <image href={logo2} x={255} y={110} width="60" height="60" />
  <foreignObject x="235" y="210" width="200" height="130">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{
      color: "#fff", fontFamily: "'DM Sans', sans-serif",
      width: "200px", textAlign: "left", lineHeight: "1.3"
    }}>
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>First Self-Priming Siphonic System</div>
      <div style={{ fontSize: "12px", color: "#b6eaff", marginBottom: "4px" }}>
        Dr. John A. Herrero Smith developed and patented the world's first self-priming Siphonic system in the United Kingdom (UK)
      </div>
      <div style={{ fontSize: "11px", fontWeight: "bold", color: "#07B7E0" }}>(FOR USE IN GUTTER & FLAT ROOF)</div>
    </div>
  </foreignObject>
</g>

{/* 2004 */}
<g>
  <circle cx="430" cy="388" r="32" fill="url(#circleGradient)" />
  <circle cx="385" cy="415" r="11" fill="url(#circleGradient)" className="pointer-events-auto" />
  <image href={logo3} x={410} y={312} width="60" height="60" />
  <foreignObject x="375" y="405" width="200" height="125">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{
      color: "#fff", fontFamily: "'DM Sans', sans-serif",
      width: "200px", textAlign: "left", lineHeight: "1.3"
    }}>
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>Anti-Block Finless Geometric Outlet</div>
      <div style={{ fontSize: "12px", color: "#b6eaff", marginBottom: "4px" }}>
        Through continuous R&amp;D, Dr. John pioneered the invention of the world's first Anti-Block Finless Geometric Outlet
      </div>
    </div>
  </foreignObject>
</g>

{/* 2008 */}
<g>
  <circle cx="770" cy="388" r="32" fill="url(#circleGradient)" />
  <circle cx="810" cy="350" r="11" fill="url(#circleGradient)" className="pointer-events-auto" />
  <image href={logo4} x={720} y={315} width="70" height="70" />
  <foreignObject x="715" y="405" width="200" height="135">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{
      color: "#fff", fontFamily: "'DM Sans', sans-serif",
      width: "200px", textAlign: "left", lineHeight: "1.3"
    }}>
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>University Testing</div>
      <div style={{ fontSize: "12px", color: "#b6eaff", marginBottom: "4px" }}>
        Prototype successfully manufactured and product tested at 'University of Sheffield'
      </div>
      <div style={{ fontSize: "11px", fontWeight: "bold", color: "#07B7E0" }}>(TO EN. STANDARDS)</div>
    </div>
  </foreignObject>
</g>

{/* 2010 */}
<g>
  <circle cx="860" cy="603" r="32" fill="url(#circleGradient)" />
  <circle cx="872" cy="655" r="11" fill="url(#circleGradient)" className="pointer-events-auto" />
  <image href={logo5} x={840} y={530} width="60" height="60" />
  <foreignObject x="815" y="620" width="200" height="110">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{
      color: "#fff", fontFamily: "'DM Sans', sans-serif",
      width: "200px", textAlign: "left", lineHeight: "1.3"
    }}>
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>UKAS Calibration</div>
      <div style={{ fontSize: "12px", color: "#b6eaff", marginBottom: "4px" }}>
        Successfully completed UKAS Calibration Sand &amp; flow empirical testing
      </div>
    </div>
  </foreignObject>
</g>

{/* 2021 – IPO Registration */}
<g>
  <circle cx="300" cy="603" r="32" fill="url(#circleGradient)" />
  <circle cx="337" cy="640" r="11" fill="url(#circleGradient)" className="pointer-events-auto" />
  <image href={logo6} x={290} y={540} width="50" height="50" />
  <foreignObject x="245" y="620" width="200" height="110">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{
      color: "#fff", fontFamily: "'DM Sans', sans-serif",
      width: "200px", textAlign: "left", lineHeight: "1.3"
    }}>
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>IPO Registration</div>
      <div style={{ fontSize: "12px", color: "#b6eaff", marginBottom: "4px" }}>
        IPO outlet design registration &amp; protection successfully granted
      </div>
    </div>
  </foreignObject>
</g>

{/* 2021 – Production Facility */}
<g>
  <circle cx="150" cy="818" r="32" fill="url(#circleGradient)" />
  <circle cx="175" cy="863" r="11" fill="url(#circleGradient)" className="pointer-events-auto" />
  <image href={logo7} x={150} y={745} width="60" height="60" />
  <image href={logo8} x={700} y={749} width="110" height="110" />
  <foreignObject x="85" y="835" width="200" height="110">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{
      color: "#fff", fontFamily: "'DM Sans', sans-serif",
      width: "200px", textAlign: "left", lineHeight: "1.3"
    }}>
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>Production Facility</div>
      <div style={{ fontSize: "12px", color: "#b6eaff", marginBottom: "4px" }}>
        Production facility established in Thailand to serve the Asia - Pacific market
      </div>
    </div>
  </foreignObject>
</g>
