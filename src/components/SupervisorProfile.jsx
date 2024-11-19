import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SupervisorProfile() {
  let { t } = useTranslation();
  let navigate = useNavigate();
  let [field] = useState([
    { name: "full_name", value: "ahmed_mohamed" },
    { name: "Referrals", value: "40,000,0000" },
    { name: "country", value: "kingdom_of_saudi_arabia" },
    { name: "city", value: "riyadah" },
    { name: "phone_number", value: "966 5552512" },
    { name: "bank_name", value: "alraghy" },
    { name: "bank_account_number", value: "56145612515615614154145" },
  ]);

  return (
    <motion.Box
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        {t("view_profile")}
      </Typography>
      <Box sx={{ width: { xs: "100%", xl: "60%" } }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "108px", height: "108px" }}>
            <Box
              component="img"
              src={profile_img}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
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
              component={motion.div}
              whileHover={{ scale: 1.15 }}
              onClick={() => {
                navigate("/edit-supervisor");
              }}
            >
              {t("edit")}
            </Button>
            <Button
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
              component={motion.div}
              whileHover={{ scale: 1.15 }}
            >
              {t("delete")}
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            {field.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.4 }}
              >
                <Box sx={{ width: field.name === "رقم الجوال" ? "100%" : "auto" }}>
                  <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                    {t(field.name)}
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: "auto", md: "412px" },
                      height: "70px",
                      p: "20px",
                      fontSize: "30px",
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      mt: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    {t(field.value)}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.Box>
  );
}

export default SupervisorProfile;
