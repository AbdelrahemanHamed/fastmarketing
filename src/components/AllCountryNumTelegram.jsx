import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function AllCountryNumTelegram() {
  let navigate = useNavigate();
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
          {t("country_numbers")}
        </Typography>

        <Typography>{t("numbers")} (36)</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: { xs: "start", md: "end" }, // Adjust alignment based on screen size
          width: "100%",
          flexWrap: "wrap", // Allow wrapping on smaller screens
          p: { xs: "0 10px", md: "0" }, // Adjust padding for smaller screens
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
            fontSize: { xs: "16px", md: "20px" }, // Responsive font size
            fontWeight: "600",
            textTransform:'capitalize',
            mb: { xs: "10px", md: "0" }, // Add margin bottom for small screens
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
            textTransform:'capitalize',
            mb: { xs: "10px", md: "0" }, // Add margin bottom for small screens
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
          maxWidth: { xs: "100%", sm: "90%", md: "890px" },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "100%", md: "855px" },
            p: { xs: "20px", sm: "40px", md: "100px" }, // Responsive padding
            backgroundColor: "#fff",
            mt: "50px",
            mr: "30px",
            borderRadius: "10px", // Optional: add some rounding to corners
            overflow: "hidden", // Ensure content doesn't overflow
          }}
        >
          <Typography sx={{ fontWeight: "600", overflowWrap: "break-word" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            necessitatibus provident inventore, unde aperiam dolorem aspernatur
            iusto sit animi obcaecati, blanditiis similique quasi voluptatibus
            sequi velit voluptas corrupti itaque vel voluptate harum. In natus
            aperiam est aut quisquam architecto eos voluptates, quasi veritatis
            rerum nihil quo necessitatibus beatae quia nisi?
          </Typography>
        </Box>

        <Button
          sx={{
            width: { xs: "100%", md: "146px" },
            height: "32px",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "600",
            mt: "30px",
            mr: "auto",
            textTransform:'capitalize'
          }}
          onClick={() => {
            navigate("/saudi-groups");
          }}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
        >
          {t('send')}
        </Button>
      </Box>
    </Box>
  );
}

export default AllCountryNumTelegram;
