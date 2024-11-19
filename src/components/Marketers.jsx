import { Box, Button, TextField, Typography } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import profile_img from "../assets/profile_img.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Marketers() {
  const { t } = useTranslation(); // Import t function for translations
  const navigate = useNavigate();
  const [marketers] = useState([
    "ahmed_mohamed",
    "ahmed_mohamed",
    "ahmed_mohamed",
    "ahmed_mohamed",
    "ahmed_mohamed",
    "ahmed_mohamed",
    "ahmed_mohamed",
    "ahmed_mohamed",
  ]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              color: "#114F80",
              fontWeight: "600",
            }}
          >
            {t("ahmed_mohamed")}
          </Typography>

          <Typography
            sx={{
              background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("supervisor")}
          </Typography>
        </Box>

        <Button
        sx={{
          width: "auto",
          height: "42px",
          background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
          color: "#000",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // mr: "auto",
          fontSize: "30px",
          fontFamily: "Tanseek Modern Pro Arabic",
          fontWeight: "400",
          py: "25px",
        }}
        onClick={() => {
          navigate("/add-marketer");
        }}
        component={motion.div}
        whileHover={{ scale: 1.15 }}
      >
        {t("add_marketer")}
      </Button>

      </Box>

  

      <Box sx={{ display: "flex", gap: "20px", my: "30px" }}>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
          {t("marketers")}
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            placeholder={t("search_by_name")}
            sx={{ width: {xs:'100%',md:"597px"}, backgroundColor: "#fff" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "10px",
              width: "33.6px",
              height: "34.8px",
            }}
          >
            <IoSearchOutline
              style={{ width: "100%", height: "100%", color: "#937B31" }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", p: "20px" }}>
        {marketers.map((marketer, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "437px",
                height: "auto",
                backgroundColor: "#fff",
                p: "15px",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Box
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Box sx={{ width: "108px", height: "108px" }}>
                    <Box
                      sx={{ width: "100%", height: "100%" }}
                      component="img"
                      src={profile_img}
                    />
                  </Box>

                  <Typography>{t(marketer)}</Typography>
                  <Typography
                    sx={{
                      background:
                        "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t("marketer")}
                  </Typography>
                </Box>

                <Box sx={{ mt: "30px", color: "#114F80" }}>
                  <Typography sx={{ fontSize: "20px" }}>
                    {t("discount_codes")}: ALIO15412
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    {t("referrals_count")}: 12,500
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    {t("location")}
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    {t("phone_number")}: 966 5522116
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    {t("bank_account_number")}: 5147892154156
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    {t("bank_name")}: {t("bank_name")}
                  </Typography>
                </Box>

                <Typography sx={{ fontSize: "20px", color: "#A3A3A3" }}>
                  10/10/2024
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  mt: "15px",
                }}
              >
                <Button
                  sx={{
                    width: "122px",
                    height: "32px",
                    backgroundColor: "#128C7F",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "6px",
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.15 }}
                >
                  {t("renew")}
                </Button>
                <Button
                  sx={{
                    width: "122px",
                    height: "32px",
                    backgroundColor: "#114F80",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "6px",
                  }}
                  onClick={()=>{
                    navigate('/edit-marketer')
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.15 }}
                >
                  {t("edit")}
                </Button>
                <Button
                  sx={{
                    width: "122px",
                    height: "32px",
                    backgroundColor: "#CC0000",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "6px",
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.15 }}
                >
                  {t("delete")}
                </Button>
                <Button
                  sx={{
                    width: "auto",
                    height: "32px",
                    backgroundColor: "#000000",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "6px",
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.15 }}
                >
                  {t("discount_link")}
                </Button>
                <Button
                  sx={{
                    width: "auto",
                    height: "32px",
                    backgroundColor: "#000000",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    background:
                      "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
                    borderRadius: "6px",
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => {
                    navigate("/marketer-link");
                  }}
                >
                  {t("marketer_link")}
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Marketers;
