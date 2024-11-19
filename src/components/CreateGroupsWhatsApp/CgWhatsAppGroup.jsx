import { Box, Button, Typography, Grid2 } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
function CgWhatsAppGroup() {
  let navigate = useNavigate();
  let { t } = useTranslation();
  let [whatsApp] = useState([
    "my_health_group",
    "jokes_group",
    "pubg_group",
    "free_fire_group",
    "cars_group",
    "my_health_group",
    "jokes_group",
    "pubg_group",
    "free_fire_group",
    "cars_group",
    "my_health_group",
    "jokes_group",
    "pubg_group",
    "free_fire_group",
    "cars_group",
  ]);
  let path = useParams();

  console.log(path.id);

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          mb: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
          {/* {path.id == "saudi"
            ? "  مجموهات المملكه العربيه السعوديه"
            : path.id == "egypt"
            ? "مجموعات مصر"
            : path.id == "bahrian"
            ? "مجموعات البحرين"
            : path.id == "qatar"
            ? "مجموعات قطر"
            : path.id == "turkey"
            ? "مجموعات تركيا"
            : path.id == "oman"
            ? "مجموعات عمان"
            : path.id == "yemen"
            ? "مجموعات اليمن"
            : ""} */}

          {t("saudi_groups")}
        </Typography>
      </Box>
      <Typography sx={{ my: "30px", fontWeight: "600" }}>
        {t("WhatsApp")} {`(${whatsApp.length * 2})`}
      </Typography>
      <Grid2 container spacing={2} justifyContent="center">
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {whatsApp.map((item, index) => (
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  sx={{
                    width: { xs: "90%", sm: "97px" },
                    height: "107px",
                    borderRadius: "8px",
                    border: "1px solid #114F80",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/spesific_whats_group");
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#114F80",
                      textAlign: "center",
                    }}
                  >
                    {t(item)}
                  </Typography>
                  <Button
                    sx={{
                      width: "70px",
                      height: "18px",
                      borderRadius: "5px",
                      backgroundColor: "#CC0000",
                      color: "#fff",
                      fontFamily: "Inter",
                    }}
                  >
                    حذف
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {whatsApp.map((item, index) => (
                <Box
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                  key={index}
                  sx={{
                    width: { xs: "90%", sm: "97px" },
                    height: "107px",
                    borderRadius: "8px",
                    border: "1px solid #114F80",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/spesific-telegram-group");
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#114F80",
                      textAlign: "center",
                    }}
                  >
                    {t(item)}
                  </Typography>
                  <Button
                    sx={{
                      width: "70px",
                      height: "18px",
                      borderRadius: "5px",
                      backgroundColor: "#CC0000",
                      color: "#fff",
                      fontFamily: "Inter",
                    }}
                  >
                    حذف
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default CgWhatsAppGroup;
