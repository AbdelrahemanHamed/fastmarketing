import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function AddWallet() {
  const { t } = useTranslation();

  // تعريف المتغيرات للأنيميشن
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box>
      {/* تطبيق أنيميشن Fade In على العنوان */}
      <Typography
        component={motion.div}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        sx={{
          fontSize: { xs: "24px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
          mb: { xs: 2, md: 4 },
        }}
      >
        {t("add_new_wallet")}
      </Typography>

      <Box sx={{ p: { xs: 2, md: 4 } }}>
        {/* تطبيق تأثير Fade In على العنوان الفرعي */}
        <Typography
          component={motion.div}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          sx={{ fontSize: { xs: "20px", md: "30px" }, fontWeight: "600", mb: 3 }}
        >
          {t("benefits_of_the_package")}
        </Typography>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: { xs: 2, md: 0 },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* تطبيق أنيميشن للحقول */}
              <Box
                component={motion.div}
                variants={slideUp}
                initial="hidden"
                animate="visible"
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: "600" }}>
                  {t("diamond_count")}
                </Typography>
                <TextField

                type="number"
                  sx={{
                    width: "174px",
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: { xs: "20px", md: "30px" },
                  }}
                />
                <Typography>
                 {t("diamond")}
                </Typography>
              </Box>

              <Box
                component={motion.div}
                variants={slideUp}
                initial="hidden"
                animate="visible"
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: "600" }}>
                  {t("price")}
                </Typography>

                <TextField
                  sx={{
                    width: { xs: "130px", md: "174px" },
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: { xs: "20px", md: "30px" },
                  }}
                />

                 <Typography>
                  {t('riyals')}
                </Typography>
                <TextField
                  sx={{
                    width: { xs: "130px", md: "174px" },
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: { xs: "20px", md: "30px" },
                    mr: { xs: 0, md: 4 },
                  }}
                  
                />
                
                <Typography>
                  {t('dollar')}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                mt: { xs: 2, md: 0 },
              }}
            >
              {/* تطبيق أنيميشن تكبير على الأزرار */}
              <Button
                component={motion.button}
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                sx={{
                  fontSize: { xs: "18px", md: "25px" },
                  fontFamily: "Tanseek Modern Pro Arabic",
                  width: "156px",
                  height: "32px",
                  backgroundColor: "#128C7F",
                  borderRadius: "6px",
                  color: "#fff",
                  px: { xs: 2, md: 4 },
                  py: { xs: 1, md: 2 },
                }}
                whileHover={{scale:1.15}}
              >
                {t("save")}
              </Button>

              <Button
                component={motion.button}
                variants={scaleIn}
                initial="hidden"
                animate="visible"
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
                whileHover={{scale:1.15}}
              >
                {t("delete")}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddWallet;
