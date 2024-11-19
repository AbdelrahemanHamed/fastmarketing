import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function SendToGroups() {
  const navigate = useNavigate();
  let {t}=useTranslation()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "50px",
        backgroundColor: "#f4f6f8",
        
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#114F80",
          mb: "20px",
          textAlign: "center",
        }}
      >
      {t('send_to_groups')}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap:'wrap',
          alignItems: "center",
          justifyContent: "space-around",
          gap: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <motion.div
          style={{
            width: "340px",
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#25D366",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          }}
          onClick={() => navigate("/SendToGroupWhatsApp")}
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#1EAD58",
            transition: { duration: 0.3 },
          }}
        >
         {t('whatsApp')}
        </motion.div>

        <motion.div
          style={{
            width: "340px",
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#0088cc",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          }}
          onClick={() => navigate("/telegram-groups")}
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#0077b5",
            transition: { duration: 0.3 },
          }}
        >
          {t('telegram')}
        </motion.div>
      </Box>
    </Box>
  );
}

export default SendToGroups;
