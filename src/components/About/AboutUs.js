import { useRef, useEffect, useState } from "react";
import FooterDark from "../GlobalComponents/FooterDark";
import Navbar from "../GlobalComponents/NavBar";
import CardCarousel from "./Marquee";
import india from "../../assets/AboutPage/siflux global and india/24.webp";
import world from "../../assets/AboutPage/siflux global and india/23.webp";

//logos
import logo1 from "../../assets/AboutPage/logos/bulb.png";
import logo2 from "../../assets/AboutPage/logos/brain.png";
import logo3 from "../../assets/AboutPage/logos/magnify.png";
import logo4 from "../../assets/AboutPage/logos/worker.png";
import logo5 from "../../assets/AboutPage/logos/certif.png";
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
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      setTimeout(() => {
        setAnimate(true);
      }, 500);
    }
  }, []);

  // Timeline data for mobile version only
  const timelineData = [
    {
      year: "1972",
      title: "Basic Siphonic Technology",
      description: "Innovated by Olavi Ebeling & Risto Lundén in Finland",
      note: "(FOR FLAT CONCRETE ROOF ONLY)",
      logo: logo1,
    },
    {
      year: "1983",
      title: "First Self-Priming Siphonic System",
      description:
        "Dr. John A. Herrero Smith developed and patented the world's first self-priming Siphonic system in the United Kingdom (UK)",
      note: "(FOR USE IN GUTTER & FLAT ROOF)",
      logo: logo2,
    },
    {
      year: "2004",
      title: "Anti-Block Finless Geometric Outlet",
      description:
        "Through continuous R&D, Dr. John pioneered the invention of the world's first Anti-Block Finless Geometric Outlet",
      logo: logo3,
    },
    {
      year: "2008",
      title: "University Testing",
      description:
        "Prototype successfully manufactured and product tested at 'University of Sheffield'",
      note: "(TO EN. STANDARDS)",
      logo: logo4,
    },
    {
      year: "2010",
      title: "UKAS Calibration",
      description:
        "Successfully completed UKAS Calibration Sand & flow empirical testing",
      logo: logo5,
    },
    {
      year: "2021",
      title: "IPO Registration",
      description:
        "IPO outlet design registration & protection successfully granted",
      logo: logo6,
    },
    {
      year: "2021",
      title: "Production Facility",
      description:
        "Production facility established in Thailand to serve the Asia - Pacific market",
      logo: logo7,
    },
  ];

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="pt-[90px] md:pt-[123px]">
        {/* Timeline Section */}
        <div
          className="bg-custom-blue text-white relative overflow-hidden"
          style={{ minHeight: "1200px" }}
        >
          {/* Mobile Timeline - Simple vertical list (unchanged) */}
          <div className="lg:hidden px-4 py-8 md:px-8 md:py-12">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="font-bold leading-tight font-['DM_Sans']">
                <span className="block text-[#07B7E0] mb-2 text-[clamp(1.5rem,5vw,2.5rem)] font-bold leading-tight">
                  EVOLUTION OF
                </span>
                <span className="block text-white text-[clamp(1.5rem,5vw,2.5rem)] font-bold leading-tight">
                  SIPHONIC SYSTEMS
                </span>
              </h1>
            </div>

            <div className="max-w-2xl mx-auto">
              {timelineData.map((item, index) => (
                <div key={index} className="flex gap-4 mb-8 md:mb-10">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#22d3ee] to-[#0891b2] rounded-full flex items-center justify-center mb-2">
                      <img
                        src={item.logo}
                        alt={`${item.year} Logo`}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      />
                    </div>
                    <div className="text-white font-bold text-sm md:text-base font-['DM_Sans']">
                      {item.year}
                    </div>
                    {index < timelineData.length - 1 && (
                      <div className="w-0.5 h-8 md:h-12 bg-gradient-to-b from-[#1565a3] to-[#0b4c82] mt-2"></div>
                    )}
                  </div>

                  <div className="flex-1 pb-6">
                    <h3 className="text-white font-bold text-base md:text-lg mb-2 font-['DM_Sans']">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-2 leading-relaxed">
                      {item.description}
                    </p>
                    {item.note && (
                      <p className="text-[#07B7E0] text-xs md:text-sm font-semibold uppercase">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline - RESTORED Original Design */}
          <div className="hidden lg:block">
            <div
              ref={timelineRef}
              className="relative py-15 px-6"
              style={{ minHeight: "1200px" }}
            >
              {/* Header - RESTORED to original position */}
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

              {/* Timeline SVG Path with positioned circles - RESTORED */}
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

              {/* Timeline SVG – ALL milestone content is inside the SVG! */}
              <svg
                className="absolute inset-0 h-full z-10"
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

                {/* 1972 */}
                <g>
                  <circle cx="680" cy="10" r="32" fill="url(#circleGradient)" />
                  <circle
                    cx="729"
                    cy="35"
                    r="10"
                    fill="url(#circleGradient)"
                    className="pointer-events-auto"
                  />
                  <image href={logo1} x={710} y={-50} width="60" height="60" />
                  <text
                    x="680"
                    y="15"
                    textAnchor="middle"
                    fill="white"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="'DM Sans', sans-serif"
                  >
                    1972
                  </text>
                  <foreignObject x="750" y="25" width="300" height="120">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        width: "300px",
                        textAlign: "left",
                        lineHeight: "1.3",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        Basic Siphonic Technology
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#b6eaff",
                          marginBottom: "4px",
                        }}
                      >
                        Innovated by Olavi Ebeling & Risto Lundén
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          color: "#07B7E0",
                        }}
                      >
                        (FOR FLAT CONCRETE ROOF ONLY)
                      </div>
                    </div>
                  </foreignObject>
                </g>

                {/* 1983 */}
                <g>
                  <circle
                    cx="300"
                    cy="193"
                    r="32"
                    fill="url(#circleGradient)"
                  />
                  <circle
                    cx="247"
                    cy="185"
                    r="10"
                    fill="url(#circleGradient)"
                    className="pointer-events-auto"
                  />
                  <image href={logo2} x={255} y={110} width="60" height="60" />
                  <text
                    x="300"
                    y="200"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="'DM Sans', sans-serif"
                  >
                    1983
                  </text>
                  <foreignObject x="-70" y="172" width="300" height="130">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        width: "300px",
                        textAlign: "right",
                        lineHeight: "1.3",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        First Self-Priming Siphonic System
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#b6eaff",
                          marginBottom: "4px",
                        }}
                      >
                        Dr. John A. Herrero Smith developed and patented the
                        world's first self-priming Siphonic system in the United
                        Kingdom (UK)
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          color: "#07B7E0",
                        }}
                      >
                        (FOR USE IN GUTTER & FLAT ROOF)
                      </div>
                    </div>
                  </foreignObject>
                </g>
                {/* 2004 */}
                <g>
                  <circle
                    cx="430"
                    cy="388"
                    r="32"
                    fill="url(#circleGradient)"
                  />{" "}
                  <circle
                    cx="385"
                    cy="415"
                    r="10"
                    fill="url(#circleGradient)"
                    className="pointer-events-auto"
                  />
                  <image href={logo3} x={410} y={312} width="60" height="60" />
                  <text
                    x="430"
                    y="395"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="'DM Sans', sans-serif"
                  >
                    2004
                  </text>
                  <foreignObject x="165" y="405" width="200" height="125">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        width: "200px",
                        textAlign: "right",
                        lineHeight: "1.3",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        Anti-Block Finless Geometric Outlet
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#b6eaff",
                          marginBottom: "4px",
                        }}
                      >
                        Through continuous R&amp;D, Dr. John pioneered the
                        invention of the world's first Anti-Block Finless
                        Geometric Outlet
                      </div>
                    </div>
                  </foreignObject>
                </g>
                {/* 2008 */}
                <g>
                  <circle
                    cx="770"
                    cy="388"
                    r="32"
                    fill="url(#circleGradient)"
                  />{" "}
                  <circle
                    cx="810"
                    cy="350"
                    r="10"
                    fill="url(#circleGradient)"
                    className="pointer-events-auto"
                  />
                  <image href={logo4} x={720} y={315} width="70" height="70" />
                  <text
                    x="770"
                    y="395"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="'DM Sans', sans-serif"
                  >
                    2008
                  </text>
                  <foreignObject x="825" y="268" width="200" height="135">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        width: "200px",
                        textAlign: "left",
                        lineHeight: "1.3",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        University Testing
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#b6eaff",
                          marginBottom: "4px",
                        }}
                      >
                        Prototype successfully manufactured and product tested
                        at 'University of Sheffield'
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          color: "#07B7E0",
                        }}
                      >
                        (TO EN. STANDARDS)
                      </div>
                    </div>
                  </foreignObject>
                </g>
                {/* 2010 */}
                <g>
                  <circle
                    cx="860"
                    cy="603"
                    r="32"
                    fill="url(#circleGradient)"
                  />{" "}
                  <circle
                    cx="872"
                    cy="655"
                    r="10"
                    fill="url(#circleGradient)"
                    className="pointer-events-auto"
                  />
                  <image href={logo5} x={840} y={530} width="60" height="60" />
                  <text
                    x="860"
                    y="609"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="'DM Sans', sans-serif"
                  >
                    2010
                  </text>
                  <foreignObject x="652" y="644" width="200" height="110">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        width: "200px",
                        textAlign: "right",
                        lineHeight: "1.3",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        UKAS Calibration
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#b6eaff",
                          marginBottom: "4px",
                        }}
                      >
                        Successfully completed UKAS Calibration Sand &amp; flow
                        empirical testing
                      </div>
                    </div>
                  </foreignObject>
                </g>
                {/* 2021 IPO */}
                <g>
                  <circle
                    cx="300"
                    cy="603"
                    r="32"
                    fill="url(#circleGradient)"
                  />{" "}
                  <circle
                    cx="337"
                    cy="640"
                    r="10"
                    fill="url(#circleGradient)"
                    className="pointer-events-auto"
                  />
                  <image href={logo6} x={290} y={540} width="50" height="50" />
                  <text
                    x="300"
                    y="609"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="'DM Sans', sans-serif"
                  >
                    2021
                  </text>
                  <foreignObject x="354" y="630" width="200" height="110">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        width: "200px",
                        textAlign: "left",
                        lineHeight: "1.3",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        IPO Registration
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#b6eaff",
                          marginBottom: "4px",
                        }}
                      >
                        IPO outlet design registration &amp; protection
                        successfully granted
                      </div>
                    </div>
                  </foreignObject>
                </g>
                {/* 2021 Production */}
                <g>
                  <circle
                    cx="150"
                    cy="818"
                    r="32"
                    fill="url(#circleGradient)"
                  />{" "}
                  <circle
                    cx="175"
                    cy="863"
                    r="10"
                    fill="url(#circleGradient)"
                    className="pointer-events-auto"
                  />
                  <image href={logo7} x={150} y={745} width="60" height="60" />
                  <image
                    href={logo8}
                    x={700}
                    y={749}
                    width="110"
                    height="110"
                  />
                  <text
                    x="150"
                    y="825"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="'DM Sans', sans-serif"
                  >
                    2021
                  </text>
                  <foreignObject x="190" y="855" width="200" height="110">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        width: "200px",
                        textAlign: "left",
                        lineHeight: "1.3",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        Production Facility
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#b6eaff",
                          marginBottom: "4px",
                        }}
                      >
                        Production facility established in Thailand to serve the
                        Asia - Pacific market
                      </div>
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* Rest of your sections remain unchanged */}
        {/* Rest of your sections remain unchanged */}
        <div className="relative bg-white py-12 md:py-16 lg:py-20">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white rounded-t-full w-[65px] h-[65px]"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:pl-[7.25rem] max-w-7xl">
                <h2 className="mb-6 md:mb-8">
                  <span className="block text-[#07B7E0] font-bold text-lg md:text-2xl lg:text-[24px] uppercase font-['DM_Sans'] leading-tight mb-1">
                    SI-FLUX
                  </span>
                  <span className="block text-[#07B7E0] font-bold text-2xl md:text-3xl lg:text-[36px] uppercase font-['DM_Sans'] leading-tight">
                    GLOBAL
                  </span>
                </h2>
                <div className="text-[#10295A] text-sm md:text-base lg:text-base font-['DM_Sans'] leading-relaxed lg:leading-[25px] text-justify max-w-[863px]">
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
            </div>
            <div className="flex-1 order-1 lg:order-2 lg:pl-5 pl-[32px] lg:pl-5">
              {" "}
              <div className="w-full max-w-sm md:max-w-md lg:max-w-none h-[400px] md:h-[500px] lg:h-[600px]">
                <img
                  src={world}
                  alt="World Map Graphic"
                  className="w-full h-full object-contain rounded-lg lg:rounded-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-100 py-12 md:py-16 lg:py-20">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gray-100 rounded-t-full w-[65px] h-[65px]"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center">
            <div className="flex-1 order-1 lg:pr-5 pl-[80px] lg:pl-0">
              {" "}
             <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center lg:block">
  <img
    src={india}
    alt="India Map Graphic"
    className="w-full h-full object-contain rounded-lg lg:rounded-none"
  />
</div>

            </div>

            <div className="flex-1 order-2">
              <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
                <div className="max-w-[863px] lg:ml-auto">
                  <div className="mb-4 md:mb-6">
                    <span className="block text-[#07B7E0] font-bold text-lg md:text-2xl lg:text-[24px] uppercase font-['DM_Sans'] leading-tight mb-1">
                      SI-FLUX
                    </span>
                    <span className="block text-[#07B7E0] font-bold text-2xl md:text-3xl lg:text-[36px] uppercase font-['DM_Sans'] leading-tight">
                      INDIA
                    </span>
                  </div>
                  <div className="text-[#10295A] text-sm md:text-base lg:text-base font-['DM_Sans'] leading-relaxed lg:leading-[25px] text-justify">
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
        <div className="w-full mb-8 md:mb-12 lg:mb-16">
          <CardCarousel />
        </div>

        <FooterDark />
      </div>
    </div>
  );
};

export default AboutUs;
