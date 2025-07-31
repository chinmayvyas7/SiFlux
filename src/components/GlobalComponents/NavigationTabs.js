import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Tab, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

// Styled Tabs
const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#07B7E0",
    height: "2px",
    bottom: "6px",
  },
});

// Styled Tab
const StyledTab = styled(Tab)({
  color: "#FFF",
  textAlign: "center",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: '"DM Sans", sans-serif',
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  textTransform: "none",
  "&.Mui-selected": {
    color: "#07B7E0",
  },
});

export default function NavigationTabs({ mobile = false, onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();

  const tabItems = [
    { label: "About", href: "/about" },
    { label: "Siphonic Technology", href: "/siphonic-technology" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const currentIndex = tabItems.findIndex((item) =>
    location.pathname.startsWith(item.href)
  );

  const [value, setValue] = useState(false); // Use false instead of null

  useEffect(() => {
    if (currentIndex !== -1) {
      setValue(currentIndex);
    } else {
      setValue(false); // Use false instead of null
    }
  }, [location.pathname, currentIndex]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(tabItems[newValue].href);
    if (onNavigate) onNavigate();
  };

  const handleMobileNavigation = (href) => {
    navigate(href);
    if (onNavigate) onNavigate();
  };

  const textStyle = {
    color: "#FFF",
    textAlign: "center",
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    textTransform: "none",
  };

  // Mobile view
  if (mobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {tabItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMobileNavigation(item.href)}
            className={`text-left px-4 py-2 rounded-lg transition-colors ${
              location.pathname.startsWith(item.href)
                ? "bg-white/10 text-[#07B7E0]"
                : "text-white hover:bg-white/5"
            }`}
            style={textStyle}
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={() => window.open("/catalogue.pdf", "_blank")}
          className="flex items-center justify-center gap-2 px-4 py-2 text-white hover:text-[#07B7E0] transition-colors w-full"
          style={textStyle}
        >
          <span>Catalogue</span>
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </nav>
    );
  }

  // Desktop view
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-flexContainer": {
            gap: { lg: "8px", xl: "16px" },
          },
        }}
      >
        {tabItems.map((item, index) => (
          <StyledTab
            key={index}
            label={item.label}
            sx={{
              fontSize: { md: "14px", lg: "16px" },
              minWidth: { md: "auto" },
              padding: { md: "6px 12px", lg: "6px 16px" },
            }}
          />
        ))}
      </StyledTabs>

      <Box
        component="a"
        href="/catalogue.pdf"
        download
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          transition: "color 0.2s",
          ...textStyle,
          fontSize: { md: "14px", lg: "16px" },
          "&:hover": {
            color: "#07B7E0",
          },
        }}
      >
        <span>Catalogue</span>
        <FontAwesomeIcon icon={faDownload} />
      </Box>
    </Box>
  );
}
