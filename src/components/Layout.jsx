import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import i18n from "../i18next";

function Layout() {
  const [direction, setDirection] = useState("ltr");
  const [textAlign, setTextAlign] = useState("left");

  useEffect(() => {
    const updateDirection = () => {
      const currentLanguage = i18n.language;
      setDirection(currentLanguage === "ar" ? "rtl" : "ltr");
      setTextAlign(currentLanguage === "ar" ? "right" : "left");
    };

    updateDirection();

    i18n.on("languageChanged", updateDirection);

    return () => {
      i18n.off("languageChanged", updateDirection);
    };
    
  }, []);

  return (
    <Box sx={{ display: "flex", direction: direction, textAlign: textAlign }}>
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <Navbar />
        <Box sx={{ px: "30px", pt: "40px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
