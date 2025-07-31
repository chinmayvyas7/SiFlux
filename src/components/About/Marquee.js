import React from "react";
import Marquee from "react-fast-marquee";
import Tooltip from "@mui/material/Tooltip";

import "../../styles/CardMarquee.css"; 
import CERT from "../../assets/CERT.png";
import UNI from "../../assets/UNIpng.png";
import IPO from "../../assets/IPO.png";
import UKAS from "../../assets/UKAS.png";
function CardCarousel({ socialMediaData }) {
  const cards = [
    { src: CERT, tooltip: "Facebook" },
    { src: UNI, tooltip: "Twitter" },
    { src: IPO, tooltip: "YouTube" },
    { src: UKAS, tooltip: "LinkedIn" },
  ];

  // Duplicate cards to ensure seamless looping
  const loopingCards = [...cards, ...cards]; // Duplicate once

  return (
    <div className="marquee-container">
      <Marquee
        gradient={true} // Enable gradient
        gradientColor={[248, 251, 253]} // RGB color for the gradient
        speed={50}
        pauseOnHover={true}
        className="custom-marquee"
      >
        {loopingCards.map((card, index) => (
          <div key={index} className="marquee-card">
            {/* <Tooltip title={card.tooltip} arrow> */}
              {/* <a href={card.url} target="_blank" rel="noopener noreferrer"> */}
              <img src={card.src} alt={card.tooltip} className="marquee-img" />
              {/* </a> */}
            {/* </Tooltip> */}
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default CardCarousel;
