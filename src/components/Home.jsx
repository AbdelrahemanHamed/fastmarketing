import { Box, Grid2, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import border from "../assets/border.png";
function Home() {
  const { t } = useTranslation();

  const someStats = [
    "app_admins_count",
    "app_subscribers_count",
    "app_users_count",
    "monthly_subscriptions_count",
    "yearly_subscriptions_count",
    "discount_codes_count",
  ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, [1000]);
  // }, []);

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        {t("some_stats_title")}
      </Typography>
      <Grid2
        container
        sx={{
          p: "20px",
          width: {},
          mx: "auto",
          justifyContent: "center",
        }}
        spacing={5}
      >
        {someStats.map((stats) => {
          return (
            <Box
              component={motion.div}
              whileHover={{ scale: 1.2 }}
              key={stats}
              sx={{
                width: "220px",
                height: "281px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                py: "20px",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: "128px",
                  height: "128px",
                  backgroundImage: `url(${border})`,
                  backgroundSize: "cover",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                1400
              </Box>

              <Typography
                sx={{ color: "#114F80", textAlign: "center", width: "100%" }}
              >
                {t(stats)}
              </Typography>
            </Box>
          );
        })}
      </Grid2>
    </Box>
  );
}

export default Home;
