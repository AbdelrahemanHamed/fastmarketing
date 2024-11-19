import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ShowUsers() {
  const { t } = useTranslation();

  let [activeLink, setActiveLink] = useState(false);
  const [showUsers] = useState([
    { name: "ahmed_mohamed", type: "user" },
    { name: "ahmed_mohamed", type: "subscriber" },
    { name: "ahmed_mohamed", type: "user" },
    { name: "ahmed_mohamed", type: "subscriber" },
    { name: "ahmed_mohamed", type: "user" },
    { name: "ahmed_mohamed", type: "user" },
    { name: "ahmed_mohamed", type: "subscriber" },
    { name: "ahmed_mohamed", type: "user" },
    { name: "ahmed_mohamed", type: "subscriber" },
    { name: "ahmed_mohamed", type: "user" },
    { name: "ahmed_mohamed", type: "user" },
    { nam: "ahmed_mohamed", type: "subscriber" },
    { name: "ahmed_mohamed", type: "user" },
    { name: "ahmed_mohamed", type: "subscriber" },
    { name: "ahmed_mohamed", type: "user" },
  ]);
  const [filteredUsers, setFilteredUsers] = useState(showUsers);
  const navigate = useNavigate();

  const filterUsers = (type) => {
    if (type === "all") {
      setFilteredUsers(showUsers);
    } else {
      setFilteredUsers(showUsers.filter((user) => user.type === type));
    }
  };

  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Button
        sx={{
          width: { xs: "100%", sm: "156px" },
          height: "42px",
          background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
          color: "#000",
          borderRadius: "6px",
          display: "block",
          mr: "auto",
          mb: "20px",
        }}
        component={motion.button}
        whileHover={{ scale: 1.15 }}
        onClick={() => navigate("/add-user")}
      >
        {t("add_user")}
      </Button>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          my: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
          {t("view_users")}
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "512px" },
            mt: { xs: "20px", sm: "0" },
          }}
        >
          <TextField
            placeholder={t("search_by_name")}
            fullWidth
            sx={{ backgroundColor: "#fff", borderRadius: "6px" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "10px",
              width: "33.6px",
              height: "34.8px",
            }}
          >
            <IoSearchOutline
              style={{ width: "100%", height: "100%", color: "#937B31" }}
            />
          </Box>
        </Box>
      </Box>

      {/* أزرار الفلترة */}
      <Box sx={{ display: "flex", gap: "20px", p: "30px", flexWrap: "wrap" }}>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.15 }}
          sx={{
            width: "121.65px",
            height: "32px",
            backgroundColor: "#fff",
            color: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            if (activeLink) {
              activeLink.classList.remove("active");
            }
            e.currentTarget.classList.add("active");
            setActiveLink(e.currentTarget);
            filterUsers("user");
          }}
        >
          <Typography>{t("user")}</Typography>
        </Box>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.15 }}
          sx={{
            width: "121.65px",
            height: "32px",
            backgroundColor: "#fff",
            color: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            if (activeLink) {
              activeLink.classList.remove("active");
            }
            e.currentTarget.classList.add("active");
            setActiveLink(e.currentTarget);
            filterUsers("subscriber");
          }}
        >
          <Typography>{t("subscriber")}</Typography>
        </Box>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.15 }}
          sx={{
            width: "121.65px",
            height: "32px",
            backgroundColor: "#fff",
            color: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            if (activeLink) {
              activeLink.classList.remove("active");
            }
            e.currentTarget.classList.add("active");
            setActiveLink(e.currentTarget);
            filterUsers("all");
          }}
        >
          <Typography>{t("all")}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          p: "25px",
          justifyContent: "center",
        }}
      >
        {filteredUsers.map((user, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ scale: 1.1 }}
          >
            <Box
              onClick={() => navigate("/show-user-file")}
              sx={{
                width: { xs: "100%", sm: "247px" },
                height: "331px",
                backgroundColor:
                  user.type === "subscriber" ? "#114F80" : "#fff",
                color: user.type === "subscriber" ? "#fff" : "#000",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                p: "20px",
                textAlign: "center",
                gap: "3px",
                cursor: "pointer",
              }}
            >
              <Box sx={{ width: "108px", height: "108px" }}>
                <Box
                  component="img"
                  src={profile_img}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography>{t(user.name)}</Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: user.type === "subscriber" ? "#fff" : "#114F80",
                }}
              >
                {user.type === "subscriber" ? t("subscriber") : t("user")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: user.type === "subscriber" ? "#fff" : "#114F80",
                }}
              >
                {t("location")}
                <br />
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default ShowUsers;
