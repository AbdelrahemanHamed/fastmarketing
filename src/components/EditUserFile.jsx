import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";

function EditUserFile() {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("40");

  // أنيميشن التلاشي عند تحميل المكون
  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  return (
    <Box sx={{ animation: `${fadeIn} 1s ease-out` }}>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          mb: "20px",
        }}
      >
        {t("edit_user_file")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Box sx={{ width: "108px", height: "108px" }}>
            <Box
              sx={{ width: "100%", height: "100%" }}
              component="img"
              src={profile_img}
            />
          </Box>
          <Button
            sx={{
              width: "auto",
              height: "auto",
              backgroundColor: "#128C7F",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
          >
            {t("upload_new_image")}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            mt: { xs: "20px", md: 0 },
          }}
        >
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#128C7F",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
          >
            {t("save")}
          </Button>
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#CC0000",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
          >
            {t("delete")}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{ p: "20px", width: { xs: "100%", xl: "60%" }, margin: "0 auto" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mb: { xs: "20px", md: 0 },
            }}
          >
            <Typography>{t("balance")}</Typography>

            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ textAlign: "center", width: "50px", height: "50px" }}
            />

            <Typography>{t("diamond")}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography>{t("current_package")}</Typography>
            <Box
              sx={{
                width: "174px",
                border: "1px solid",
                height: "62px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <select
                name=""
                id=""
                style={{ width: "100%", height: "100%", fontSize: "24px" }}
              >
                <option value="">{t("subscriber")}</option>
                <option value="">{t("not_subscribed")}</option>
              </select>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", p: "20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("full_name")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
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
                {t("ahmed_mohamed")}
              </Box>
            </Box>

            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("email")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
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
                asbdabjksd@text.com
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              mt: "20px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("country")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
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
                {t("kingdom_of_saudi_arabia")}
              </Box>
            </Box>

            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("city")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
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
                {t("riyadh")}
              </Box>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
          <Box sx={{ mt: "20px", width: { xs: "100%", md: "412px" } }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {t("mobile_number")}
            </Typography>
            <Box
              sx={{
                width: "100%",
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
              966 5552512
            </Box>
          </Box>
          <Box sx={{ mt: "20px", width: { xs: "100%", md: "412px" } }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {t("change_password")}
            </Typography>
            <Box
              sx={{
                width: "100%",
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
              966 5552512
            </Box>
          </Box>

          </Box>


        </Box>
      </Box>
    </Box>
  );
}

export default EditUserFile;
