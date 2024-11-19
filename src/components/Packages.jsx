import { Box, Button, Typography, Grid2 } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Packages() {
  let navigate = useNavigate();
  let { sidebarOpen } = useContext(Context);
  let { t } = useTranslation();

  // Define animation variants for elements
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Box>
      <Grid2
        container
        justifyContent="space-between"
        sx={{ mb: 2 }}
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Grid2>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              color: "#114F80",
              fontWeight: "600",
            }}
          >
            {t("packages")}
          </Typography>
        </Grid2>
        <Grid2>
          <Button
            component={motion.button}
            whileHover={{scale:1.15}}
            variants={slideIn}
            sx={{
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
              width: "auto",
              height: "32px",
              backgroundColor: "#114F80",
              borderRadius: "6px",
              color: "#fff",
              px: "30px",
              py: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              navigate("/add-new-package");
            }}
            
          >
            {t("add_new_package")}
          </Button>
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={2}
        sx={{
          p: "20px",
          width: sidebarOpen ? { xs: "100%", md: "auto" } : "100%",
          mx: sidebarOpen ? "" : { md: "auto" },
        }}
      >
        <Grid2 size={{ xs: 12 }}>
          <Grid2 container justifyContent="space-between" sx={{ mb: "20px" }}>
            <Grid2>
              <Typography sx={{ fontWeight: "600" }}>
                {t("benefits_of_the_package")}
              </Typography>
            </Grid2>
            <Grid2>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Button
                  component={motion.button}
                  variants={fadeIn}
                  whileHover={{scale:1.15}}
                  sx={{
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    width: "156px",
                    height: "32px",
                    backgroundColor: "#114F80",
                    borderRadius: "6px",
                    color: "#fff",
                    px: "30px",
                    py: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/edit-package");
                  }}
                >
                  {t("edit")}
                </Button>
                <Button
                  component={motion.button}
                  whileHover={{scale:1.15}}
                  variants={fadeIn}
                  sx={{
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    width: "156px",
                    height: "32px",
                    backgroundColor: "#CC0000",
                    borderRadius: "6px",
                    color: "#fff",
                    px: "30px",
                    py: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {t("delete")}
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <Box
            component={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{scale:1.05}}
            sx={{
              width: "100%",
              height: "auto",
              background:
                "linear-gradient(78.11deg, #F9D053 0.15%, #937B31 99.85%)",
              borderRadius: "15px",
              padding: { xs: "30px", md: "60px" },
              display: "flex",
              alignItems: "center",
            }}
            
          >
            <ul
              style={{
                color: "#fff",
                padding: 0,
                listStyleType: "disc",
                margin: 0,
              }}
            >
              <li>
                <Typography>{t("15_free_diamonds")}</Typography>
              </li>
              <li>
                <Typography>{t("whatsapp_logo_available_4_weeks")}</Typography>
              </li>
              <li>
                <Typography>{t("telegram_logo_available_4_weeks")}</Typography>
              </li>
              <li>
                <Typography>{t("instagram_logo_available_4_weeks")}</Typography>
              </li>
              <li>
                <Typography>{t("x_logo_available_4_weeks")}</Typography>
              </li>
              <li>
                <Typography>{t("facebook_logo_available_4_weeks")}</Typography>
              </li>
              <li>
                <Typography>{t("tiktok_logo_available_4_weeks")}</Typography>
              </li>
              <li>
                <Typography>{t("sms_logo_available_4_weeks")}</Typography>
              </li>
              <li>
                <Typography>{t("email_logo_available_4_weeks")}</Typography>
              </li>
            </ul>
          </Box>
        </Grid2>

        <Grid2
          size={{ xs: 12 }}
          sx={{ display: "flex", gap: "20px", p: "5px", alignItems: "center" }}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            {t("price")}
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              border: "2px solid black",
              maxWidth: "174px",
              height: "auto",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            {t("30_riyals")}
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              border: "2px solid black",
              maxWidth: "174px",
              height: "auto",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: "20px",
              fontWeight: "600",
            }}
          >
            {t("7_5_dollars")}
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Packages;
