import Navbar from "../GlobalComponents/NavBar";
import Footer from "../GlobalComponents/Footer";
import bg from "./../../assets/ServicesPage/BG.webp";
import pic1 from "./../../assets/ServicesPage/Design generation.webp";
import pic2 from "./../../assets/ServicesPage/Execution support.webp";
import pic3 from "./../../assets/ServicesPage/Hydraulic design calculation.webp";
import pic4 from "./../../assets/ServicesPage/Site survey.webp";
import bim from "./../../assets/ServicesPage/Bim support.mp4";

const Services = () => {
  const services = [
    { name: "DESIGN GENERATION", image: pic1, type: "image" },
    { name: "HYDRAULIC DESIGN CALCULATION", image: pic3, type: "image" },
    { name: "BIM-SUPPORT", image: bim, type: "video" },
    { name: "EXECUTION SUPPORT", image: pic2, type: "image" },
    {
      name: "SITE SURVEYS AND SITE SERVICE SUPPORT",
      image: pic4,
      type: "image",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image - Fixed position */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
        {/* Gradient Overlay on Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #2563eb 0%, #3b82f6 40%, #60a5fa 70%, #bae6fd 100%)",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 bg-[#10295A] min-h-screen">
        {/* Navbar */}
        <Navbar />
        <div className="pt-[90px] md:pt-[123px]">
          {/* Increased mobile padding */}
          {/* Content Container */}
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-8">
            {/* Title */}
            <h1
              className="text-[#07B7E0] font-bold uppercase mb-6 sm:mb-8"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontSize: "clamp(32px, 6vw, 56px)",
                lineHeight: "1.2",
              }}
            >
              SERVICES
            </h1>

            {/* Description */}
            <p
              className="text-white text-sm sm:text-base font-normal max-w-full lg:max-w-[891px] mb-8 sm:mb-12 md:mb-16"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontFeatureSettings: "'liga' off, 'clig' off",
                lineHeight: "1.6",
              }}
            >
              At Si-Flux we provide services ranging from design
              conceptualization to providing execution support at site followed
              by delivering on site service support & warranties.
            </p>

            {/* Service Cards */}
            <div className="space-y-6 sm:space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[728px] rounded-[20px] overflow-hidden bg-white"
                  style={{
                    background:
                      "linear-gradient(180deg, #2563eb 0%, #3b82f6 40%, #60a5fa 70%, #bae6fd 100%)",
                  }}
                >
                  {/* Service Image/Video */}
                  <div className="absolute inset-0">
                    {service.type === "video" ? (
                      <video
                        src={service.image}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={
                          service.image ||
                          `https://via.placeholder.com/1400x728?text=Service+Image+${
                            index + 1
                          }`
                        }
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Label Container with Gradient */}
                  {/* Blue semi-transparent label overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[100px] sm:h-[120px] md:h-[150px] lg:h-[183px] z-10 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(16, 41, 90, 0.75) 0%, rgba(16, 41, 90, 0.35) 60%, rgba(255,255,255,0.00) 100%)",
                    }}
                  >
                    <h2
                      className="text-white text-center font-bold uppercase px-4"
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        textShadow: "0px 0px 6.7px rgba(0, 0, 0, 0.82)",
                        fontSize: "clamp(20px, 4vw, 34px)",
                        lineHeight: "1.2",
                      }}
                    >
                      {service.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
