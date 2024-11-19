import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function EditWallet() {
  let {t}=useTranslation()
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Box>
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
       {t('edit_diamond_wallet')}
        </Typography>
      </motion.div>
      <Box sx={{ p: { xs: "20px", md: "40px" } }}>
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <Typography sx={{ fontSize: "30px", mb: "30px", fontWeight: "600" }}>
           {t('package_benefits')}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", width: { xs: "100%", md: "auto" } }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Typography sx={{ width: { xs: "auto", md: "121px" } }}>{t('diamond_count')}</Typography>
                <Typography
                  sx={{
                    border: "1px solid black",
                    width: { xs: "100%", md: "174px" },
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: "30px",
                  }}
                >
                 40 {t('diamond')}
                </Typography>
              </Box>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Typography sx={{ width: { xs: "auto", md: "121px" } }}>{t('price')}</Typography>
                <Typography
                  sx={{
                    border: "1px solid black",
                    width: { xs: "100%", md: "174px" },
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: "30px",
                  }}
                >
                  {t('30_riyals')}
                </Typography>
                <Typography
                  sx={{
                    border: "1px solid black",
                    width: { xs: "100%", md: "174px" },
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: "30px",
                    ml: { xs: 0, md: "20px" },
                  }}
                >
                  {t('7_5_dollars')}
                </Typography>
              </Box>
            </motion.div>
          </Box>

          <Box sx={{ display: "flex", gap: "20px", mt: { xs: "20px", md: 0 } }}>
            <motion.div variants={slideIn} initial="hidden" animate="visible">
              <Button
                sx={{
                  fontSize: "25px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  width: "156px",
                  height: "32px",
                  backgroundColor: "#128C7F",
                  borderRadius: "6px",
                  color: "#fff",
                  px: "30px",
                  py: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                component={motion.div}
                whileHover={{scale:1.15}}
              >
              {t('save')}
              </Button>
            </motion.div>
            <motion.div variants={slideIn} initial="hidden" animate="visible">
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
                whileHover={{scale:1.15}}
              >
               {t('delete')}
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #000000",
          width: { xs: "100%", md: "488px" },
          mx: "auto",
          my: "50px",
        }}
      ></Box>
    </Box>
  );
}

export default EditWallet;
