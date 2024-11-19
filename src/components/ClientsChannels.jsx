import { Box, Button, Typography } from "@mui/material";
import saudiImg from "../assets/saudi.png";
import { useContext } from "react";
import { Context } from "./Context";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function ClientsChannels() {
  let {t}=useTranslation()
  let { sidebarOpen } = useContext(Context);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
       {t('clients_channels')}
      </Typography>

      <Box sx={{ p: { xs: "10px", md: "20px" } }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "90%", lg: "836px" },
            height: "auto",
            backgroundColor: "#114F80",
            p: { xs: "20px", md: "30px" },
            color: "#fff",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            mx: sidebarOpen ? "" : "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "15px", sm: "30px" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography sx={{ fontWeight: "600" }}>{t('channel_link')} </Typography>
              <Typography>https://market-speed.vercel.app/</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography sx={{ fontWeight: "600" }}> {t('channel_name')}</Typography>
              <Typography>{t('family')}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "15px", sm: "30px" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography sx={{ fontWeight: "600" }}>{t("country")}</Typography>
              <Box sx={{ width: "50px", height: "31px" }}>
                <Box
                  component="img"
                  src={saudiImg}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography sx={{ fontWeight: "600" }}>{t("user_name")}</Typography>
              <Typography>{t("faisal_abd_alaziz")}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "end" },
              gap: "20px",
              flexWrap: { xs: "wrap", sm: "nowrap" },
              mt: "20px",
              mr: "10px",
            }}
          >
            <Button
              sx={{
                width: { xs: "100%", sm: "121.65px" },
                p: "10px",
                borderRadius: "6px",
                backgroundColor: "#128C7F",
                color: "#fff",
                textAlign: "center",
              }}
              component={motion.div}
              whileHover={{ scale: 1.15 }}
            >
              {t("accept")}
            </Button>
            <Button
              sx={{
                width: { xs: "100%", sm: "121.65px" },
                p: "10px",
                borderRadius: "6px",
                backgroundColor: "#CC0000",
                color: "#fff",
                textAlign: "center",
              }}
              component={motion.div}
              whileHover={{ scale: 1.15 }}
            >
             {t('reject')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientsChannels;
