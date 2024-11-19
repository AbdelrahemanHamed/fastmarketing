import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Socials() {
  let { t } = useTranslation();
  let [socials] = useState([
    "Telegram",
    "Instagram",
    "TikTok",
    "X",
    "Facebook",
    "Youtube",
    "Snapchat",
    "Snapchat",
    "SMS",
    "Email",
  ]);

  return (
    <Box>
      <Typography
        sx={{ fontSize: "40px", color: "#114F80", fontWeight: "700" }}
      >
        {t("marketing_speed_account_page")}
      </Typography>

      <Typography className="text-gradient">
         {t("Marketing_Spead_accounts")}
        </Typography>
      <Box sx={{ p: "20px" }}>
        <Typography
          className="text-gradient"
          sx={{
            fontSize: "30px",
            mb: "30px",
          }}
        ></Typography>
        <Grid2 container spacing={4}>
          {socials.map((social) => {
            return (
              <Grid2 key={social} size={{ xs: 12, md: 6 }}
              component={motion.div}
              whileHover={{scale:1.1}}
              >
                
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography> {t(social)}</Typography>
                  <Button
                    sx={{
                      width: "156px",
                      height: "32px",
                      background:
                        "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                    component={motion.button}
                    whileHover={{scale:1.15}}
                  >
                    {t("save")}
                  </Button>
                </Box>

                <motion.div
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    sx={{
                      width: "auto",
                      height: "80px",
                      my: "10px",
                      border: "3px solid #114F80",
                      borderRadius: "15px",
                      textAlign: "left",
                      direction: "ltr",
                      py: "5px",
                      display: "flex",
                      alignItems: "center",
                      cursor:"pointer"
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontFamily: "Tanseek Modern Pro Arabic",
                      }}
                    >
                      https://www.figma.com/design/
                      epS6m7H0obCBxgPOrgZdlc/Untitl.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid2>
            );
          })}
          <Box></Box>
        </Grid2>
      
        <Typography className="text-gradient" sx={{ textAlign: "center",my:'20px'}}>{t("social_account")}</Typography>
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{width:'100%'}}> {t("mobile")}</Typography>
              <Button
                sx={{
                  width: "156px",
                  height: "32px",
                  background:
                    "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                  color: "#fff",
                  borderRadius: "6px",
                }}
                component={motion.button}
                whileHover={{scale:1.15}}
              >
                {t("save")}
              </Button>
            </Box>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  width: "auto",
                  height: "auto",
                  my: "10px",
                  border: "3px solid #114F80",
                  borderRadius: "15px",
                  textAlign: "left",
                  direction: "ltr",
                  py: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: "20px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                  }}
                >
                  https://www.figma.com/design/
                  epS6m7H0obCBxgPOrgZdlc/Untitl.
                </Typography>
              </Box>
            </motion.div>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography> {t("whatsApp")}</Typography>
              <Button
                sx={{
                  width: "156px",
                  height: "32px",
                  background:
                    "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                  color: "#fff",
                  borderRadius: "6px",
                }}
                component={motion.button}
                whileHover={{scale:1.15}}
              >
                {t("save")}
              </Button>
            </Box>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  width: "auto",
                  height: "auto",
                  my: "10px",
                  border: "3px solid #114F80",
                  borderRadius: "15px",
                  textAlign: "left",
                  direction: "ltr",
                  py: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: "20px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                  }}
                >
                  https://www.figma.com/design/
                  epS6m7H0obCBxgPOrgZdlc/Untitl.
                </Typography>
              </Box>
            </motion.div>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default Socials;
