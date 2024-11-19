import { Box, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion"
function TechSupport() {
  let { t } = useTranslation();
  let navigate = useNavigate();
  let [tech] = useState([
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
  ]);

  return (
    <Box sx={{width:'100%'}}>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        {t("support_chat")}
      </Typography>
      <Box
        sx={{
          p: { xs: "20px", md: "30px" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {tech.map((tech, index) => {
          return (
            <Box
            component={motion.div}
            whileHover={{scale:1.1}}
              key={index}
              sx={{
                width: { xs: "100%", md: "805px" },
                mx:'auto',
                height: "auto",
                p: "20px",
                backgroundColor: "#D9D9D9",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                gap:'100px',
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#C0C0C0",
                },
              }}
              onClick={() => {
                navigate("/support-session");
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" ,}}>
                <Box sx={{ width: "66px", height: "66px" }}>
                  <Box
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    src={profile_img}
                  />
                </Box>
                <Typography sx={{ fontSize: { xs: "25px", md: "40px" } }}>
                  {t(tech.name)}
                </Typography>
              </Box>

              <Typography
                sx={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "#114F80",
                  borderRadius: "5px",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: { xs: "25px", md: "40px" },
                }}
              >
                15
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default TechSupport;
