import React, { useState } from "react";
import { MapPin, Mail, Globe } from "lucide-react";
import Navbar from "../GlobalComponents/NavBar";
import FooterDark from "../GlobalComponents/FooterDark";
import bg from "../../assets/ContactUsPage/BGwhite.jpg"; // Adjust the path as necessary

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
  };

  return (
    <div>
      <Navbar />

      {/* Contact Form Section */}
      <div className="min-h-screen bg-white relative overflow-hidden pt-[80px] md:pt-[123px]">
        {/* Background Image */}
        <div className="absolute inset-0 hidden lg:block">
          {/* Background image container */}
          <div
            className="absolute left-0 bottom-0"
            style={{
              top: "0px",
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              width: "65%",
              minHeight: "100vh",
            }}
          ></div>

          {/* White gradient overlay for smooth transition */}
          <div
            className="absolute left-0 bottom-0"
            style={{
              top: "0px",
              background: `linear-gradient(to right, 
                transparent 0%, 
                transparent 85%, 
                rgba(255,255,255,0.3) 90%, 
                rgba(255,255,255,0.7) 95%, 
                rgba(255,255,255,1) 100%)`,
              width: "65%",
              minHeight: "100vh",
            }}
          ></div>
        </div>

        {/* Mobile/Tablet Background */}
        <div className="lg:hidden absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-9 py-8 sm:py-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start justify-items-center">
              {/* Left Side - Contact Information */}
              <div className="space-y-6 sm:space-y-8 w-full lg:w-auto">
                <div>
                  <p
                    className="uppercase mb-2 text-left"
                    style={{
                      color: "#10295A",
                      fontFamily: '"DM Sans"',
                      fontSize: "clamp(18px, 4vw, 24px)",
                      fontWeight: 700,
                      lineHeight: "1.2",
                      letterSpacing: "2.4px",
                    }}
                  >
                    CONTACT US
                  </p>
                  <h1
                    className="uppercase text-left"
                    style={{
                      color: "#07B7E0",
                      fontFamily: '"DM Sans"',
                      fontSize: "clamp(28px, 6vw, 56px)",
                      fontWeight: 700,
                      lineHeight: "1.1",
                      textTransform: "uppercase",
                    }}
                  >
                    GET IN TOUCH TODAY
                  </h1>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h2
                    className="text-left"
                    style={{
                      color: "#10295A",
                      fontFamily: '"DM Sans"',
                      fontSize: "clamp(24px, 5vw, 32px)",
                      fontWeight: 700,
                      lineHeight: "1.2",
                    }}
                  >
                    Si-Flux India Pvt. Ltd.
                  </h2>

                  <div className="space-y-4 max-w-sm mx-0">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                      <div
                        style={{
                          color: "#10295A",
                          fontFamily: '"DM Sans"',
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "1.8",
                        }}
                      >
                        <p>402, Qutub Plaza, DLF Phase 1,</p>
                        <p>Gurugram, Haryana -122002</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <a
                        href="mailto:info@si-flux.in"
                        className="hover:opacity-80 transition-opacity"
                        style={{
                          color: "#10295A",
                          fontFamily: '"DM Sans"',
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "18px",
                        }}
                      >
                        info@si-flux.in
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <a
                        href="https://www.si-flux.in"
                        className="hover:opacity-80 transition-opacity"
                        style={{
                          color: "#10295A",
                          fontFamily: '"DM Sans"',
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "18px",
                        }}
                      >
                        www.si-flux.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="w-full max-w-[540px] lg:ml-0 xl:ml-20">
                <div className="shadow-xl rounded-[20px] bg-[#F4F5F9] p-6 sm:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-[50px] sm:h-[62px] rounded-full bg-white border-none px-6 
                                 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                                 transition-all placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-[50px] sm:h-[62px] rounded-full bg-white border-none px-6 
                                 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                                 transition-all placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(+91) 999 999 9999"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-[50px] sm:h-[62px] rounded-full bg-white border-none px-6 
                                 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                                 transition-all placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Please type your message here..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full h-[120px] sm:h-[147px] rounded-[15px] bg-white border-none p-4 sm:px-6 
                                 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                                 transition-all placeholder-gray-500 resize-none"
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full h-[50px] sm:h-[59px] rounded-[30px] bg-[#10295A] text-white 
                               font-semibold transition-all duration-200 hover:opacity-90 focus:outline-none 
                               flex items-center justify-center"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterDark />
    </div>
  );
}

export default ContactUs;
