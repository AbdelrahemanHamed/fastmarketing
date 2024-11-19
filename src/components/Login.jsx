import { Box, Button, Grid2, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { FaArrowDown } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import i18n from "../i18next";

function Login() {
  const [direction, setDirection] = useState("ltr");
  const [textAlign, setTextAlign] = useState("left");

  useEffect(() => {
    const updateDirection = () => {
      const currentLanguage = i18n.language;
      setDirection(currentLanguage === "ar" ? "rtl" : "ltr");
      setTextAlign(currentLanguage === "ar" ? "right" : "left");
    };

    updateDirection();

    i18n.on("languageChanged", updateDirection);

    return () => {
      i18n.off("languageChanged", updateDirection);
    };
  }, []);

  let { language, languageChanger } = useContext(Context);
  function handleLanguageChange(event) {
    let selectedLanguage = event.target.value;
    console.log(selectedLanguage);

    languageChanger(selectedLanguage);
  }
  let navigate = useNavigate();

  let { t } = useTranslation();
  return (
    <Grid2
      container
      justifyContent="space-between"
      sx={{ overflow: "hideen", direction: direction, textAlign: textAlign }}
    >
      <Grid2
        size={{ xs: 12, md: 5 }}
        sx={{
          background:
            "linear-gradient(162.24deg, #F9D053 0.72%, #796727 99.28%)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            width: "50%",
            mx: "auto",
          }}
        >
          <input
            placeholder={t("user_name")}
            style={{
              maxWidth: "342px",
              height: "79px",
              color: "#000000",
              border: "3px solid #FFFFFF",
              borderRadius: "15px",
              backgroundColor: "transparent",
              paddingInline: "10px",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
              fontWeight: "400",
            }}
          />

          <input
            placeholder={t("password")}
            style={{
              maxWidth: "342px",
              height: "79px",
              color: "#000",
              border: "3px solid #FFFFFF",
              borderRadius: "15px",
              backgroundColor: "transparent",
              paddingInline: "10px",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
              fontWeight: "400",
            }}
          />

          <Typography
            sx={{
              color: "#fff",
              position: "relative",
              width: "60%",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "100%",
                left: "0",
                width: "100%",
                height: "3px",
                backgroundColor: "#fff",
                cursor: "pointer",
              },
            }}
          >
            {t("Forgot your password")}
          </Typography>

          <Button
            sx={{
              backgroundColor: "#114F80",
              width: "207px",
              height: "54px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              color: "#fff",
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/home");
              console.log("hello");
            }}
          >
           {t("login")}
          </Button>
          <Box
            sx={{
              backgroundColor: "#114F80",
              width: { xs: "100%", md: "207px" },
              height: "54px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box
                sx={{
                  fontSize: "30px",
                  color: "#F9D053",
                }}
              >
                <BsTranslate />
              </Box>
              <select
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  paddingInline: "30px",
                  width: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                onChange={handleLanguageChange}
                value={language}
              >
                <option
                  style={{ backgroundColor: "#114F80", color: "#fff" }}
                  value="ar"
                >
                  {" "}
                  {t("arabic")}
                </option>
                <option
                  style={{ backgroundColor: "#114F80", color: "#fff" }}
                  value="en"
                >
                  {" "}
                  {t("english")}
                </option>
              </select>
            </Box>
          </Box>
        </Box>
      </Grid2>

      <Grid2
        size={{ xs: 12, md: 7 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "#EDE8E9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "250px", md: "350px" },
            height: { xs: "250px", md: "350px" },
            backgroundColor: "#114F80",
            borderRadius: "50%",
            position: "absolute",
            left: "-100px",
            top: "-100px",
            zIndex: "12",
          }}
        ></Box>
        <Box
          sx={{
            width: { xs: "250px", md: "350px" },
            height: { xs: "250px", md: "250px" },
            backgroundColor: "#F9D053",
            borderRadius: "50%",
            position: "absolute",
            left: "-150px",
            top: "100px",
          }}
        ></Box>

        <Box
          sx={{
            width: { xs: "200px", md: "460px" },
            height: { xs: "250px", xl: "331px" },
            mx: "auto",
          transform:'translateX(30px)'
          }}
        >
          <Box
            component="img"
            src={logo}
            sx={{ width: "100%" }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "100px", md: "100px" },
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // mb: { xs: "100px", md: "0" },
            mt:'100px'
          }}
        >
          سرعة التسويق
        </Typography>

        <Box
          sx={{
            width: { xs: "250px", md: "350px" },
            height: { xs: "250px", md: "250px" },
            backgroundColor: "#114F80",
            borderRadius: "50%",
            position: "absolute",
            right: "-100px",
            bottom: "-100px",
            zIndex: "12",
          }}
        ></Box>
        <Box
          sx={{
            width: { xs: "250px", md: "350px" },
            height: { xs: "250px", md: "250px" },
            backgroundColor: "#F9D053",
            borderRadius: "50%",
            position: "absolute",
            right: "80px",
            bottom: "-150px",
          }}
        ></Box>
      </Grid2>
    </Grid2>
  );
}

export default Login;
