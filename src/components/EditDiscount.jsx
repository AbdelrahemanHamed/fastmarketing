import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function EditDiscount() {


  let {t}=useTranslation()
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
      <motion.div
        variants={bounce}
        initial="hidden"
        animate="visible"
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
            mb: { xs: 2, md: 4 },
          }}
        >
        {t('edit_discount')}
        </Typography>
      </motion.div>
      
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        sx={{ p: { xs: 2, md: 4 }, mt: { xs: 3, md: 6 } }}
      >
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
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: "600" }}>
               {t('code')}
              </Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "auto",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: { xs: "20px", md: "30px" },
                  p: "10px",
                  fontWeight: "600",
                }}
              >
                FastMarketing50
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: "600" }}>
               {t('discount_percentage')}
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
                  mr: { xs: 0, md: 2 },
                  fontWeight: "600",
                }}
              >
                20 %
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
            <motion.div variants={scaleIn} initial="hidden" animate="visible">
              <Button
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

            <motion.div variants={scaleIn} initial="hidden" animate="visible">
              <Button
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
      </motion.div>
    </Box>
  );
}

export default EditDiscount;
