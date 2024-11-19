import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function SendToTelegramNumbers() {
  let { t } = useTranslation();

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
          {t("Country_chennels")}
        </Typography>

        <Typography>{t("all_channels")} (36)</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: { xs: "start", md: "end" },
          width: "100%",
          flexWrap: "wrap",
          p: { xs: "0 10px", md: "0" },
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", md: "auto" },
            height: "auto",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "600",
            textTransform: "capitalize",
            mb: { xs: "10px", md: "0" },
          }}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
        >
          {t("attach_link")}
        </Button>
        <Button
          sx={{
            width: { xs: "100%", md: "auto" },
            height: "auto",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "600",
            textTransform: "capitalize",
            mb: { xs: "10px", md: "0" },
          }}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
        >
          {t("attach_image_or_video")}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "90%", md: "890px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "855px" },
            p: { xs: "20px", sm: "40px", md: "100px" },
            backgroundColor: "#fff",
            mt: "50px",
            mr: "30px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Typography sx={{ fontWeight: "600", overflowWrap: "break-word" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            praesentium tenetur qui cupiditate autem saepe corrupti sapiente
            impedit magnam fugit adipisci, ea, dolorem harum assumenda. Cum id
            perferendis maxime dolor ullam aspernatur suscipit, et commodi quasi
            quidem modi vitae dolorem explicabo delectus expedita eum ipsa
            tenetur? Consectetur ut delectus excepturi?
          </Typography>
        </Box>

        <Button
          sx={{
            width: { xs: "100%", md: "auto" },
            height: "auto",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "600",
            my: "30px",
            mr: "auto",
          }}
          onClick={() => {
            // navigate("/saudi-groups");
          }}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
        >
          {t("send")}
        </Button>
      </Box>
    </Box>
  );
}

export default SendToTelegramNumbers;
