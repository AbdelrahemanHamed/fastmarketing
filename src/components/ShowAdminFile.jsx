import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function ShowAdminFile() {
  let navigate = useNavigate();

  let { t } = useTranslation();
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          mb: "20px",
          fontWeight: "600",
        }}
      >
        {t("view_admin_file")}
      </Typography>

      <Box
        sx={{
          display: "flex",
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
            onClick={() => {
              navigate("/edit-admin-file");
            }}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
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

      <Box sx={{ p: "20px", width: { xs: "100%", xl: "60%" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "20px",
          }}
        >
          <Box>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {t("full_name")}
            </Typography>
            <Box
              sx={{
                width: "412px",
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

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            <Box sx={{ width: "49%" }}>
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

            <Box sx={{ width: "49%" }}>
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

          {/* البريد الالكتروني  */}

          {/* رقم الجوال في صف منفصل */}
          <Box sx={{ mt: "20px", width: "100%" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {t("mobile")}
            </Typography>
            <Box
              sx={{
                width: "412px",
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

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            <Box>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("email")}
              </Typography>
              <Box
                sx={{
                  width: "412px",
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
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("bank_name")}
              </Typography>
              <Box
                sx={{
                  width: "412px",
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
                {t("alraghy")}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("bank_account_number")}
              </Typography>
              <Box
                sx={{
                  width: "412px",
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
                56145612515615614154145
              </Box>
            </Box>
          </Box>

          <Box sx={{ my: "30px" }}>
            <Typography
              sx={{
                fontSize: "40px",
                color: "#114F80",
                mb: "20px",
                fontWeight: "600",
              }}
            >
              {t("roles")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                px: "30px",
              }}
            >
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("discount_codes_control")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("app_profit_stats")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("monthly_and_annual_subscriptions_stats")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("app_users_stats")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("pricing_control")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("platform_control")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("add_countries")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("chats")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("app_control")}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      width: "37px",
                      height: "37px",
                      backgroundColor: "#fff",
                    }}
                  ></Box>

                  <Box>
                    <Typography sx={{ fontSize: "30px" }}>
                      {t("groups_control")}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: "20px" }}>
                  <Box
                    sx={{
                      px: "25px",

                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <Box
                        sx={{
                          width: "37px",
                          height: "37px",
                          backgroundColor: "#fff",
                        }}
                      ></Box>

                      <Typography sx={{ fontSize: "30px" }}>
                        {t("Control_of_Groups_in_the_Kingdom_of_Saudi_Arabia")}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <Box
                        sx={{
                          width: "37px",
                          height: "37px",
                          backgroundColor: "#fff",
                        }}
                      ></Box>

                      <Typography sx={{ fontSize: "30px" }}>
                        {t("Control_of_Groups_in_the_UAE")}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShowAdminFile;
