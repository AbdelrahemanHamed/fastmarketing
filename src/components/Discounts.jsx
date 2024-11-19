import { Box, Button, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Discounts() {
  let navigate = useNavigate();
  let { t } = useTranslation();

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              color: "#114F80",
              fontWeight: "600",
            }}
          >
            {t("discount_codes")}
          </Typography>
          <Button
            sx={{
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
              width: "auto",
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
              navigate("/add-discount");
            }}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
          >
            {t("add_new_discount_code")}
          </Button>
        </Box>
      </motion.div>

      <Box sx={{ p: { xs: "20px", md: "40px" } }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: "30px",
            }}
          >
            {t("all_codes")}
          </Typography>
        </motion.div>

        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 * index }}
          >
            <Box sx={{ mb: 4 }}>
              <Grid container alignItems="start" justifyContent="space-between">
                <Grid item xs={12} md={8}>
                  <Box display="flex" flexDirection="column" gap="30px">
                    <Box display="flex" gap="10px" alignItems="center">
                      <Typography
                        sx={{
                          width: { xs: "100px", md: "121px" },
                          fontWeight: "600",
                        }}
                      >
                        {t("code")}
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
                          fontSize: "30px",
                          p: "10px",
                          fontWeight: "600",
                        }}
                      >
                        FastMarketing50
                      </Typography>
                    </Box>
                    <Box display="flex" gap="10px" alignItems="center">
                      <Typography
                        sx={{
                          width: { xs: "100px", md: "121px" },
                          fontWeight: "600",
                        }}
                      >
                        {t("discount_percentage")}
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
                          fontSize: "30px",
                          fontWeight: "600",
                        }}
                      >
                        20 %
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ gap: { md: "10px" }, mt: { xs: "10px" } }}
                  >
                    <Button
                      component={motion.div}
                      whileHover={{ scale: 1.15 }}
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
                        navigate("/edit-discount");
                      }}
                    >
                      {t("edit")}
                    </Button>
                    <Button
                      component={motion.div}
                      whileHover={{ scale: 1.15 }}
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
                  my: "50px",
                }}
              />
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default Discounts;
