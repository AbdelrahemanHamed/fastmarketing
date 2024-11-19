import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";

function ShowUserFile() {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
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
        {t("view_user_file")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: "30px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* النص "عدد الأيام منذ الاشتراك" */}
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "24px" },
            fontWeight: "500",
            color: "#333",
            mb: { xs: "15px", md: "0" },
            textAlign: "center",
          }}
        >
          {t("days_since_subscription")}
        </Typography>

        {/* مربع الأيام مع تحسينات */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f1f1f1",
            borderRadius: "20px",
            border: "2px solid #114F80",
            padding: "15px 25px",
            marginLeft: { xs: "0", md: "20px" },
            fontSize: "22px",
            fontWeight: "bold",
            color: "#114F80",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          3 {t("days")}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "space-between",
          gap: { xs: "20px", md: "40px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            mb: { xs: "20px", md: 0 },
          }}
        >
          <Box sx={{ width: "108px", height: "108px" }}>
            <Box
              sx={{ width: "100%", height: "100%" }}
              component="img"
              src={profile_img}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Button
            sx={{
              minWidth: "121px",
              height: "32px",
              backgroundColor: "#114F80",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
            onClick={() => {
              navigate("/edit-user-file");
            }}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
          >
            {t("edit")}
          </Button>
          <Button
            sx={{
              minWidth: "121px",
              height: "32px",
              backgroundColor: "#CC0000",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
            component={motion.button}
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
            mb: "20px",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography>{t("balance")}</Typography>
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
              <Typography>40 {t("diamond")}</Typography>
            </Box>
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
              <Typography>{t("not_subscribed")}</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "20px", md: "40px" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#5E5E5E",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
                }}
              >
                {t("full_name")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "412px",
                  height: "70px",
                  p: "20px",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
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

            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#5E5E5E",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
                }}
              >
                {t("email")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "412px",
                  height: "70px",
                  p: "20px",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
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
              flexDirection: { xs: "column", md: "row" },
              mt: "20px",
              gap: { xs: "20px", md: "40px" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#5E5E5E",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
                }}
              >
                {t("country")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "412px",
                  height: "70px",
                  p: "20px",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
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

            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#5E5E5E",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
                }}
              >
                {t("city")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "412px",
                  height: "70px",
                  p: "20px",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
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

          <Box sx={{ mt: "20px", width: "45%" }}>
            <Typography
              sx={{
                color: "#5E5E5E",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
              }}
            >
              {t("mobile_number")}
            </Typography>
            <Box
              sx={{
                width: "100%",
                maxWidth: "412px",
                height: "70px",
                p: "20px",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
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
          <Box sx={{ mt: "20px", width: "47%" }}>
            <Typography
              sx={{
                color: "#5E5E5E",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
              }}
            >
              {t("password")}
            </Typography>
            <Box
              sx={{
                width: "100%",
                maxWidth: "412px",
                height: "70px",
                p: "20px",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
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

export default ShowUserFile;
