import { Box, Button, Typography,Grid2 } from "@mui/material";
import { useContext } from "react";
import { Context } from "./Context";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function AddPackage() {
  let { sidebarOpen } = useContext(Context);
  let { t } = useTranslation();

  // Define animations for entry effects
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
      <Box component={motion.div} variants={fadeIn} initial="hidden" animate="visible" sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
          {t('add_package')}
        </Typography>
     
      </Box>
      <Box
        component={motion.div}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        sx={{
          p: "20px",
          width: sidebarOpen ? { xs: "100%", md: "auto" } : "100%",
          mx: sidebarOpen ? { xs: "", md: "" } : "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            mb: "20px",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>{t('benefits_of_the_package')}</Typography>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              component={motion.button}
              variants={slideIn}
              initial="hidden"
              animate="visible"
              sx={{
                fontSize: "25px",
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#128C7F",
                borderRadius: "6px",
                color: "#fff",
                px: "30px",
                py: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              whileHover={{scale:1.15}}
            >
              {t("save")}
            </Button>
            <Button
              component={motion.button}
              variants={slideIn}
              initial="hidden"
              animate="visible"
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
              whileHover={{scale:1.15}}
            >
              {t('delete')}
            </Button>
          </Box>
        </Box>

        <Grid2 size={{ xs: 12 }}>
          <Box
            component={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{
              width: "100%",
              height: "auto",
              background: "#fff",
              borderRadius: "15px",
              padding: { xs: "30px", md: "60px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <ul
              style={{
                color: "#000",
                padding: 0,
                listStyleType: "disc",
                margin: 0,
              }}
            >
              <li><Typography>{t('15_free_diamonds')}</Typography></li>
              <li><Typography>{t('whatsapp_logo_available_4_weeks')}</Typography></li>
              <li><Typography>{t('telegram_logo_available_4_weeks')}</Typography></li>
              <li><Typography>{t('instagram_logo_available_4_weeks')}</Typography></li>
              <li><Typography>{t('x_logo_available_4_weeks')}</Typography></li>
              <li><Typography>{t('facebook_logo_available_4_weeks')}</Typography></li>
              <li><Typography>{t('tiktok_logo_available_4_weeks')}</Typography></li>
              <li><Typography>{t("sms_logo_available_4_weeks")}</Typography></li>
              <li><Typography>{t("email_logo_available_4_weeks")}</Typography></li>
            </ul>
          </Box>
        </Grid2>
        <Box
          component={motion.div}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          sx={{
            display: "flex",
            gap: { xs: "20px", md: "50px" },
            p: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            {t("price")}
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              border: "1px solid black",
              width: "174px",
              height: "62px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            {t('30_riyals')}
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              border: "1px solid black",
              width: "174px",
              height: "62px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: { xs: "", md: "20px" },
              fontWeight: "600",
            }}
          >
            {t('7_5_dollars')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AddPackage;
