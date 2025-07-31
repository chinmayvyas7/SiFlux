import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import AboutUs from "./components/About/AboutUs";
import SiphonicTech from "./components/Siphonic/SiphonicTech";
import ContactUs from "./components/ContactUs/ContactUs";

// ScrollToTop component inline
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/siphonic-technology" element={<SiphonicTech />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
