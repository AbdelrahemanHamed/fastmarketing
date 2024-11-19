import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import cardImg from "../assets/cardImg.png";
import { useTranslation } from "react-i18next";

function Welcome() {
  let { t } = useTranslation();
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        {t("welcome_screen")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "27%",
          mx: "auto",
          gap: "20px",
        }}
      >
        <Button
           component={motion.div}
           whileHover={{scale:1.15}}
          sx={{
            width: "156px",
            height: "32px",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            background: " linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
            color: "#fff",
            alignSelf: "start",
            borderRadius: "6px",
          }}
        >
          {t("add_new_video")}
        </Button>
        <Box sx={{}}>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{scale:1.1}}
            style={{ width: "264px", height: "536px" }}
          >
            <Box
              component="img"
              src={cardImg}
              sx={{
                width: "100%",
                height: "100%",

                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
          </motion.div>

          <Typography sx={{ textAlign: "center" }}>
            العرض 9 والطول 16
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;
