import React from "react";
import Navbar from "../GlobalComponents/NavBar";
import FooterDark from "../GlobalComponents/FooterDark";
import gif from "../../assets/SiphonicTechPage/siphonic system/ezgif.com-overlay.gif";
import comp from "../../assets/SiphonicTechPage/siphonic system/COMPONENTS OF A MULTI OUTLET SIPHONIC SYSTEM@.webp";
import gravityflow from "../../assets/SiphonicTechPage/4 steps/gravity.webp";
import plugflow from "../../assets/SiphonicTechPage/4 steps/plug flow.webp";
import bubbleflow from "../../assets/SiphonicTechPage/4 steps/bubble flow.webp";
import fullflow from "../../assets/SiphonicTechPage/4 steps/full bore flow.webp";
import gravity1 from "../../assets/SiphonicTechPage/gravity vs siflux/gravity 1.webp";
import gravity2 from "../../assets/SiphonicTechPage/gravity vs siflux/gravity 2.webp";
import siphonic1 from "../../assets/SiphonicTechPage/gravity vs siflux/siphonic 1.webp";
import siphonic2 from "../../assets/SiphonicTechPage/gravity vs siflux/siphonic 2.webp";

const SiphonicTech = () => {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <div className="pt-[60px] md:pt-[123px]">
        {" "}
        {/* Responsive padding */}
        {/* Hero Section */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-8 sm:pt-12 md:pt-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left lg:-ml-8 mt-8 sm:mt-16 lg:mt-[100px]">
              <h1 className="mb-6 sm:mb-8 max-w-full lg:max-w-[574px]">
                <span
                  className="block"
                  style={{
                    color: "#07B7E0",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(32px, 6vw, 56px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  SI-FLUX
                </span>
                <span
                  className="block"
                  style={{
                    color: "#10295A",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(32px, 6vw, 56px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  SIPHONIC SYSTEM
                </span>
              </h1>

              <p
                className="max-w-full lg:max-w-[480px] mx-auto lg:mx-0 text-sm sm:text-base"
                style={{
                  color: "#10295A",
                  fontFeatureSettings: '"liga" off, "clig" off',
                  fontFamily: '"DM Sans"',
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.6",
                }}
              >
                Si-Flux is based on the same principle as a siphon. The siphon
                is in general a reversed U shaped pipe full of liquid used to
                Siphon fluid from one container to another located in a lower
                position.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full max-w-[526px] lg:-ml-20 lg:mr-20">
              <img
                src={gif}
                alt="gif"
                className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Large Image Section */}
          {/* Large Image Section */}
        <div className="container mx-auto px-4 mb-8 sm:mb-12 md:mb-16 mt-8 sm:mt-12">
          <div className="max-w-[998px] mx-auto">
            <img
              src={comp}
              alt="components of a multi outlet siphonic system"
              className="w-full h-auto object-contain"
            />
          
          </div>
       
        </div>
        {/* Video/iFrame Section */}
        <div className="container mx-auto px-4 mb-8 sm:mb-12 md:mb-16">
          <div className="max-w-[1080px] mx-auto bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full aspect-video flex items-center justify-center text-gray-500">
              [Video/iFrame Placeholder]
            </div>
          </div>
        </div>
        {/* 4 Steps Flow Section */}
        <div className="relative bg-[#10295A] py-12 sm:py-16 md:py-20">
          {/* Blue semicircle that overlaps */}
          <div className="absolute -top-4 sm:-top-5 md:-top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-[#10295A] rounded-t-full w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]"></div>
          </div>

          <div className="container mx-auto px-4">
            <h2
              className="text-center mb-8 sm:mb-12"
              style={{
                color: "#07B7E0",
                fontFeatureSettings: '"liga" off, "clig" off',
                fontFamily: '"DM Sans"',
                fontSize: "clamp(24px, 5vw, 34px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "1.4",
                textTransform: "uppercase",
              }}
            >
              4 Steps Of Flow For A Siphonic System
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-24 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[248px] h-[193px] bg-white rounded-[20px] mb-4 p-4 flex items-center justify-center">
                  <img
                    src={gravityflow}
                    alt="gravity"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-center mb-4"
                  style={{
                    color: "#07B7E0",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(18px, 4vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  Gravity Flow
                  <br />
                  (light rain events)
                </h3>
                <p
                  className="text-center max-w-[248px]"
                  style={{
                    color: "#FFF",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.4",
                  }}
                >
                  Air carried above water.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[248px] h-[193px] bg-white rounded-[20px] mb-4 p-4 flex items-center justify-center">
                  <img
                    src={plugflow}
                    alt="plug flow"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-center mb-4"
                  style={{
                    color: "#07B7E0",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(18px, 4vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  Plug Flow
                  <br />
                  (moderate rain events)
                </h3>
                <p
                  className="text-center max-w-[248px]"
                  style={{
                    color: "#FFF",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.4",
                  }}
                >
                  Air pockets driven down pipe with water 'plugs' to ensure
                  self-cleaning.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[248px] h-[193px] bg-white rounded-[20px] mb-4 p-4 flex items-center justify-center">
                  <img
                    src={bubbleflow}
                    alt="bubble flow"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-center mb-4"
                  style={{
                    color: "#07B7E0",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(18px, 4vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  Bubble Flow
                  <br />
                  (heavy rain events)
                </h3>
                <p
                  className="text-center max-w-[248px]"
                  style={{
                    color: "#FFF",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.4",
                  }}
                >
                  Water fills pipe and carries bubbles in suspension.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[248px] h-[193px] bg-white rounded-[20px] mb-4 p-4 flex items-center justify-center">
                  <img
                    src={fullflow}
                    alt="full bore flow"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-center mb-4"
                  style={{
                    color: "#07B7E0",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(18px, 4vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  Full Bore Flow
                  <br />
                  (ultimate flow design rain events)
                </h3>
                <p
                  className="text-center max-w-[248px]"
                  style={{
                    color: "#FFF",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.4",
                  }}
                >
                  Water fills the pipe with air purged & excluded, delivering
                  far greater capacity & flow rates.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Gravity VS Si-Flux Systems Section */}
        <div className="relative bg-[#F4F5F9] py-12 sm:py-16 md:py-20">
          {/* Gray semicircle that overlaps */}
          <div className="absolute -top-4 sm:-top-5 md:-top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-[#F4F5F9] rounded-t-full w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]"></div>
          </div>

          <h2
            className="text-center mb-8 sm:mb-12"
            style={{
              color: "#07B7E0",
              fontFeatureSettings: '"liga" off, "clig" off',
              fontFamily: '"DM Sans"',
              fontSize: "clamp(24px, 5vw, 34px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "1.4",
              textTransform: "uppercase",
            }}
          >
            Gravity VS Si-Flux Systems
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4 max-w-7xl mx-auto">
            {/* Gravity System Card */}
            <div className="w-full max-w-[587px] mx-auto lg:mx-0 bg-white rounded-[20px] overflow-hidden shadow-lg">
              {/* Upper portion */}
              <div className="w-full h-[300px] sm:h-[400px] md:h-[462px] bg-[#10295A]">
                <img
                  src={gravity1}
                  alt="gravity system"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Lower portion */}
              <div className="p-6 sm:p-8 text-center flex flex-col items-center">
                <h3
                  className="mb-4"
                  style={{
                    color: "#10295A",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(20px, 4vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "1.4",
                    textTransform: "uppercase",
                  }}
                >
                  Gravity System
                </h3>

                <p
                  className="mb-6 text-sm sm:text-base"
                  style={{
                    maxWidth: "523px",
                    color: "#10295A",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.6",
                  }}
                >
                  In gravity systems, water adheres to the wall of the pipe.
                  Typically only 30% of the pipework is filled with water - 70%
                  is air.
                </p>

                <div className="w-full max-w-[469px] mb-4">
                  <img
                    src={gravity2}
                    alt="gravity diagram"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <p
                  style={{
                    color: "#07B7E0",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(18px, 4vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "1.4",
                    textTransform: "capitalize",
                  }}
                >
                  Underground Pipe Required
                </p>
              </div>
            </div>

            {/* Siphonic Drainage Card */}
            <div className="w-full max-w-[587px] mx-auto lg:mx-0 bg-white rounded-[20px] overflow-hidden shadow-lg">
              {/* Upper portion */}
              <div className="w-full h-[300px] sm:h-[400px] md:h-[462px] bg-[#10295A]">
                <img
                  src={siphonic1}
                  alt="siphonic system"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Lower portion */}
              <div className="p-6 sm:p-8 text-center flex flex-col items-center">
                <h3
                  className="mb-4"
                  style={{
                    color: "#10295A",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(20px, 4vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "1.4",
                    textTransform: "uppercase",
                  }}
                >
                  Siphonic Drainage
                </h3>

                <p
                  className="mb-6 text-sm sm:text-base"
                  style={{
                    maxWidth: "523px",
                    color: "#10295A",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.6",
                  }}
                >
                  In a primed & working Siphonic system, 100% of the pipe is
                  filled with water. Pipework can therefore be significantly
                  smaller.
                </p>

                <div className="w-full max-w-[457px] mb-4">
                  <img
                    src={siphonic2}
                    alt="siphonic diagram"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <p
                  style={{
                    color: "#07B7E0",
                    fontFeatureSettings: '"liga" off, "clig" off',
                    fontFamily: '"DM Sans"',
                    fontSize: "clamp(18px, 4vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "1.4",
                    textTransform: "capitalize",
                  }}
                >
                  No Underground Pipe Required
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterDark />
      </div>
    </div>
  );
};

export default SiphonicTech;
