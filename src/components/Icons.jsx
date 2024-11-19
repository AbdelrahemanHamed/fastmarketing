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

import share from "../assets/video_icons/share.png"
function Icons() {

  let {t}=useTranslation()
  let [icons] = useState([
    { name: "WhatsApp",img:  whatsApp },
    { name: "Telegram",img:  telegram },
    { name: "Instagram",img:  instagram },
    { name: "TikTok",img:  tiktok },
    { name: "X",img:  twitter },
    { name: "Facebook",img:  facebook },
    { name: "SMS",img:  sms },
    { name: "Email", img: email },
    { name: "Share_with_firends", img: share },
  ]);

  return (
    <Box sx={{ p: "60px", display: "flex", flexDirection: "column" }}>
      <Typography
        className="text-gradient"
        sx={{
          mb: "30px",
          display: "flex",
        }}
      >
        بنارات المنصات
      </Typography>

      <Box sx={{ width: "100%", mx: "auto" }}>
        <Grid2 container spacing={5} sx={{ display: "flex", flexWrap: "wrap" }}>
          {icons.map((icon, index) => {
            return (
              <Grid2 key={index} sx={{ maxWidth: "375px", maxHeight: "160px" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.3 }} 
                  whileHover={{scale:1.15}}

                >
                  <Box sx={{ width: "350px" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>{t(icon.name)}</Typography>
                      <Button
                        sx={{
                          background:
                            "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                          color: "#fff",
                          borderRadius: "6px",
                          fontSize: "25px",
                          width: "150px",
                          height: "32px",
                          fontFamily: "Tanseek Modern Pro Arabic",
                        }}
                        component={motion.button}
                        whileHover={{scale:1.15}}
                      >
                       {t('add_new_img')}
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
  );
}

export default Icons;
