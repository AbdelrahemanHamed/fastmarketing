import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import cardImg from "../assets/cardImg.png";
import Icons from "./Icons";

function Banners() {
  const { t } = useTranslation();


  let [cards] = useState([
    { visitorKey: "first_banner", uploadKey: "add_new_img", img: cardImg },
    {
      visitorKey: "second_visitor",
      uploadKey: "add_new_img",
      img: cardImg,
    },
    {
      visitorKey: "third_visitor",
      uploadKey: "add_new_img",
      img: cardImg,
    },
    {
      visitorKey: "fourth_visitor",
      uploadKey: "add_new_img",
      img: cardImg,
    },
  ]);

  return (
    <Box>
      <Typography
        sx={{ fontSize: "40px", color: "#114F80", fontWeight: "600" }}
      >
        {t("home_page")}
      </Typography>

      <Typography>{t("banner_width_height")}</Typography>

      <Box sx={{ p: "40px" }}>
        <Typography
          className="text-gradient"
          sx={{ fontSize: "30px", mb: "30px" }}
        >
          {t("banners_ar")} {/* البنارات المتحركة عربي */}
        </Typography>

        <Grid2 container spacing={4}>
          {cards.map((card, index) => (
            <Grid2 size={{ xs: 12, md: 6 }} key={index}>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{scale:1.15}}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>{t(card.visitorKey)}</Typography>{" "}
                  {/* ترجمة اسم الزائر */}
                  <Button


                  component={motion.button}
                  whileHover={{scale:1.15}}
                    sx={{
                      width: "auto",
                      height: "auto",
                      background:
                        "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                      color: "#fff",
                      borderRadius: "6px",

                    }}
                  >
                    {t(card.uploadKey)}
                  </Button>
                </Box>

                <Box sx={{ width: "100%", height: "auto", my: "10px" }}>
                  <Box
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    src={card.img}
                  />
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Box sx={{ p: "40px" }}>
        <Typography
          className="text-gradient"
          sx={{ fontSize: "30px", mb: "30px" }}
        >
          {t("banners_en")} {/* البنارات المتحركة عربي */}
        </Typography>

        <Grid2 container spacing={4}>
          {cards.map((card, index) => (
            <Grid2 size={{ xs: 12, md: 6 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{scale:1.15}}

              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>{t(card.visitorKey)}</Typography>{" "}
                  {/* ترجمة اسم الزائر */}
                  <Button
                    sx={{
                      width: "auto",
                      height: "auto",
                      background:
                        "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                    component={motion.button}
                    whileHover={{scale:1.15}}
                  >
                    {t(card.uploadKey)}
                  </Button>
                </Box>

                <Box sx={{ width: "100%", height: "auto", my: "10px" }}>
                  <Box
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    src={card.img}
                  />
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Box
        sx={{
          border: "8px solid #114F80",
          maxWidth: "676.01px",
          mx: "auto",
        }}
      ></Box>

      <Icons />
    </Box>
  );
}

export default Banners;
