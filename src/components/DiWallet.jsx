import { Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function DiWallet() {
  const { t } = useTranslation();
  let navigate = useNavigate();

  // Define animation variants
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const bounce = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 10 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box>
      <Box
        component={motion.div}
        variants={bounce}
        initial="hidden"
        animate="visible"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
            mb: { xs: 2, md: 0 },
          }}
        >
          {t("diamond_wallet")}
        </Typography>
        <Button
          component={motion.button}
          variants={scaleIn}
          whileHover={{scale:1.15}}
          initial="hidden"
          animate="visible"
          sx={{
            fontSize: { xs: "18px", md: "25px" },
            fontFamily: "Tanseek Modern Pro Arabic",
            width: { xs: "100%", md: "auto" },
            height: "32px",
            backgroundColor: "#114F80",
            borderRadius: "6px",
            color: "#fff",
            px: { xs: 2, md: 4 },
            py: { xs: 1, md: 2 },
          }}
          onClick={() => {
            navigate("/add-wallet");
          }}
        >
          {t("add_new_wallet")}
        </Button>
      </Box>

      <Box
        component={motion.div}
        variants={slideUp}
        initial="hidden"
        animate="visible"
        sx={{ p: { xs: 2, md: 4 } }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: "600",
            mb: 3,
          }}
        >
          {t("package_benefits")}
        </Typography>

        {[1, 2, 3].map((_, index) => (
          <Box key={index}>
            <Grid container spacing={2} alignItems="start">
              <Grid item xs={12} md={6}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Box display="flex" gap={1} alignItems="center">
                    <Typography sx={{ width: "121px", fontWeight: "600" }}>
                      {t("diamond_count")}
                    </Typography>
                    <Typography
                      sx={{
                        border: "1px solid black",
                        width: "174px",
                        height: "62px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        fontSize: { xs: "20px", md: "30px" },
                        fontWeight: "600",
                      }}
                    >
                      40 {t("diamond")}
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1} alignItems="center">
                    <Typography sx={{ width: "121px", fontWeight: "600" }}>
                      {t("price")}
                    </Typography>
                    <Typography
                      sx={{
                        border: "1px solid black",
                        width: "174px",
                        height: "62px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        fontSize: { xs: "20px", md: "30px" },
                        fontWeight: "600",
                      }}
                    >
                      30 {t("sar")}
                    </Typography>
                    <Typography
                      sx={{
                        border: "1px solid black",
                        width: "174px",
                        height: "62px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        fontSize: { xs: "20px", md: "30px" },
                        fontWeight: "600",
                        mr: { xs: 0, md: 4 },
                      }}
                    >
                      7.5 {t("usd")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box display="flex" gap={2} justifyContent={{ xs: "center", md: "flex-start" }}>
                  <Button
                    component={motion.button}
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    whileHover={{scale:1.15}}
                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontFamily: "Tanseek Modern Pro Arabic",
                      width: "156px",
                      height: "32px",
                      backgroundColor: "#114F80",
                      borderRadius: "6px",
                      color: "#fff",
                      px: { xs: 2, md: 4 },
                      py: { xs: 1, md: 2 },
                    }}
                    onClick={() => {
                      navigate("/edit-wallet");
                    }}
                  >
                    {t("edit")}
                  </Button>
                  <Button
                   component={motion.div}
                   whileHover={{scale:1.15}}

                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontFamily: "Tanseek Modern Pro Arabic",
                      width: "156px",
                      height: "32px",
                      backgroundColor: "#CC0000",
                      borderRadius: "6px",
                      color: "#fff",
                      px: { xs: 2, md: 4 },
                      py: { xs: 1, md: 2 },
                    }}
                  >
                    {t("delete")}
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                border: "1px solid #000000",
                width: { xs: "100%", md: "488.03px" },
                mx: "auto",
                my: 4,
                height: "1px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default DiWallet;
