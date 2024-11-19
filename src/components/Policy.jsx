import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { t } from "i18next";

function Policy() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: "40px", color: "#114F80", fontWeight: "600" }}
        >
          {t("terms_conditions_screen")}
        </Typography>

        <Box sx={{ display: "flex", gap: "15px" }}>
          <Button
            component={motion.div}
            whileHover={{ scale: 1.15 }}
            variant="outlined"
          >
            {t("save")}
          </Button>
          <Button
            variant="outlined"
            component={motion.div}
            whileHover={{ scale: 1.15 }}
          >
            {t("edit")}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "auto", md: "auto" },
          minHeight: "818px",
          backgroundColor: "#fff",
          mx: "auto",
          p: { xs: "20px", md: "100px" },
          my: "30px",
          borderRadius: "15px",
        }}
      >
        <textarea
          type="text"
          // value={fullText}
          style={{
            fontWeight: "700",
            fontSize: "20px",
            width: "100%",
            height: "818px",
            padding: "10px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Policy;
