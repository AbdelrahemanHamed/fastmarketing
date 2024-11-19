import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import i18 from "i18next"
function AddAdminFile() {
  const optionGroups = [
    {
      label: "application",
      options: [
        "application_banners",
        "videos",
        "social_account",
        "platforms",
        "welcome_screen",
        "application_policy",
        "share_with_friends",
        "send_logo",
      ],
    },
    { label: "statistics", options: ["app_profit_stats", "user_statistics"] },
    {
      label: "pricing",
      options: ["packages", "diamond_wallet", "discount_codes"],
    },
    { label: "users", options: ["users"] },
    { label: "technical_support", options: ["support_chat", "suggestions"] },
    {
      label: "groups",
      options: [
        "create_groups",
        "send_to_groups",
        "Send to all numbers of countries",
        "add_group_links_and_numbers",
        "customer_groups",
        "customer_channels",
      ],
    },
    { label: "admins", options: ["add_admin", "view_admins"] },
    { label: "marketers", options: ["add_moderators", "view_moderators"] },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [expandedGroups, setExpandedGroups] = useState(Array(8).fill(false));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleGroup = (index) => {
    setExpandedGroups((prev) => {
      const newGroups = [...prev];
      newGroups[index] = !newGroups[index];
      return newGroups;
    });
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((o) => o !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleSelectAll = (groupOptions, isAllSelected) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (isAllSelected) {
        // Remove all group options if already selected
        return prevSelectedOptions.filter(
          (option) => !groupOptions.includes(option)
        );
      } else {
        // Add only options that are not already selected
        const newOptions = groupOptions.filter(
          (option) => !prevSelectedOptions.includes(option)
        );
        return [...prevSelectedOptions, ...newOptions];
      }
    });
  };

  let { t } = useTranslation();
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
          mb: "30px",
        }}
      >
        {t("add_admin_file")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: "108px", height: "108px" }}>
            <Box
              sx={{ width: "100%", height: "100%" }}
              component="img"
              src={profile_img}
            />
          </Box>
          <Button
            sx={{
              width: "auto",
              height: "auto",
              backgroundColor: "#128C7F",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
          >
            {t("upload_new_image")}
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#128C7F",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
          >
            {t("save")}
          </Button>
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#CC0000",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
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
              flexWrap: "wrap",
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

            <Box>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("اضافه كلمه سر")}
              </Typography>
              <Box
                sx={{
                  width: "412px",
                  height: "70px",
                  p: "20px",
                  fontSize: "30px",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  mt: "10px",
                  borderRadius: "15px",
                }}
              ></Box>
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
                  flexWrap: "wrap",
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
                  flexWrap: "wrap",
                  alignItems: "center",
                  mt: "10px",
                  borderRadius: "15px",
                }}
              >
                56145612515615614154145
              </Box>
            </Box>
          </Box>

          <div
            style={{
              height: "70px",
              
            }}
          >
            {" "}
          </div>

          <div style={{ position: "relative", display: "inline-block" }}>

            <Button   sx={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                my:"20px",
                color: "#fff",
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
                width: "40%",
                height: "70px",
                fontSize: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}>
              {t('general_manager')}
            </Button>
            <button
              onClick={toggleDropdown}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
                width: "40%",
                height: "70px",
                fontSize: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBlock:'10px',
                gap: "10px",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#007BFF")
              }
            >
             {t('roles')}
              <span
                style={{
                  fontSize: "20px",
                  transform: `rotate(${isOpen ? 180 : 0}deg)`,
                  transition: "transform 0.3s",
                }}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  width: "100%",
                 
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                  margintop: "100px",
                  zIndex: 1,
                }}
              >
                {optionGroups.map((group, index) => {
                  const isAllSelected = group.options.every((option) =>
                    selectedOptions.includes(option)
                  );

                  return (
                    <div key={group.label}>
                      <button
                        onClick={() => toggleGroup(index)}
                        style={{
                          width: "100%",
                          padding: "5px 10px",
                          marginBottom: "15px",
                          textAlign: i18.language =='ar' ? 'right':'left',
                          backgroundColor: "#007BFF",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          // textAlign: "left",
                          fontSize: "25px",
                        }}
                      >
                        {t(group.label)} {expandedGroups[index] ? "▲" : "▼"}
                      </button>

                      {expandedGroups[index] && (
                        <>
                          {/* Select All Button */}
                          <label
                            style={{
                              display: "flex",
                              marginBottom: "10px",
                              fontSize: "35px",
                              gap: "10px",
                              alignItems: "center",
                              fontWeight: "bold",
                              paddingLeft: "20px",
                            }}
                          >
                            <input
                              type="checkbox"
                              style={{
                                width: "18px",
                                height: "18px",
                                marginRight: "10px",
                                transform: "scale(1.2)",
                                cursor: "pointer",
                              }}
                              checked={isAllSelected}
                              onChange={() =>
                                handleSelectAll(group.options, isAllSelected)
                              }
                            />
                            {t("select_all")}
                          </label>

                          {/* Group Options */}
                          {group.options.map((option) => (
                            <label
                              key={option}
                              style={{
                                display: "flex",
                                marginBottom: "5px",
                                gap: "10px",
                                alignItems: "center",
                                paddingLeft: "20px",
                                fontSize: "30px",
                              }}
                            >
                              <input
                                type="checkbox"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  marginRight: "10px",
                                  transform: "scale(1.2)",
                                  cursor: "pointer",
                                }}
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                              />
                              {t(option)}
                            </label>
                          ))}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default AddAdminFile;
