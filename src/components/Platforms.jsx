import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion"; 
import whatsApp from "../assets/video_icons/whatsapp.png";
import telegram from "../assets/video_icons/telegram.png";
import instagram from "../assets/video_icons/instagram.png";
import tiktok from "../assets/video_icons/tiktok.png";
import twitter from "../assets/video_icons/x.png";
import facebook from "../assets/video_icons/facebook.png";
import sms from "../assets/video_icons/sms.png";
import email from "../assets/video_icons/email.png";
import { useTranslation } from "react-i18next";
function Platforms() {
  let { t } = useTranslation();
  let [icons] = useState([
    { name: "WhatsApp", img: whatsApp, status: "turn_on", bgBtn: "CC0000" },

    {
      name: "Telegram",
      img: telegram,
      status: "turn_off",
      
    },
    {
      name: "Instagram",
      img: instagram,
      status: "turn_on",
      bgBtn: "CC0000",
    },
    {
      name: "TikTok",
      img: tiktok,
      status: "turn_off",
      
    },
    { name: "X", img: twitter, status: "turn_on", bgBtn: "CC0000" },
    {
      name: "SMS",
      img: sms,
      status: "turn_off",
      
    },
    { name: "facebook", img: facebook, status: "turn_on", bgBtn: "CC0000" },
    {
      name: "Email",
      img: email,
      status: "turn_off",
      
    },
  ]);

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        {t("platforms")}
      </Typography>
      <Box sx={{ p: "60px", display: "flex", flexDirection: "column" }}>
        <Typography
          className="text-gradient"
          sx={{
            mb: "30px",
            display: "flex",
          }}
        >
          {t("all_platforms")}
        </Typography>

        <Box sx={{ width: "100%", mx: "auto" }}>
          <Grid2
            container
            spacing={5}
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent={"center"}
          >
            {icons.map((icon, index) => {
              return (
                <Grid2
                  key={index}
                  sx={{ maxWidth: "375px", maxHeight: "160px" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.3 }} 
                    whileHover={{scale:1.1}}
                  >
                    <Box sx={{ width: "350px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>{t(icon.name)}</Typography>
                        <Button
                        component={motion.div}
                        whileHover={{scale:1.15}}
                          sx={{
                            background:
                              icon.status == "turn_on"
                                ? "#CC0000"
                                : "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                            color: "#fff",
                            borderRadius: "6px",
                            fontSize: "25px",
                            width: "150px",
                            height: "32px",
                            fontFamily: "Tanseek Modern Pro Arabic",
                          }}
                        >
                          {t(icon.status)}
                        </Button>
                      </Box>
                      <Box
                        sx={{ width: "339px", height: "116px" }}
                        component="img"
                        src={icon.img}
                      />
                    </Box>
                  </motion.div>
                </Grid2>
              );
            })}
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}

export default Platforms;
