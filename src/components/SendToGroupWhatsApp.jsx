import { Box, Button, Typography } from "@mui/material";
import saudiImg from "../assets/saudi.png";
import qatarImg from "../assets/qatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function SendToGroupWhatsApp() {
  let { t } = useTranslation();
  let navigate = useNavigate();
  let [whatsApp] = useState([
    saudiImg,
    qatarImg,
    saudiImg,
    qatarImg,
    saudiImg,
    qatarImg,
    saudiImg,
  ]);

  let [activeOption, setActiveOption] = useState();

  const [activeGroup, setActiveGroup] = useState(false);

  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "36px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        {t("country_groups")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: { xs: "100%", md: "100%" },
          mx: "auto",
          my: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <input
              style={{
                width: "37px",
                height: "37px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
              type="checkbox"
            />
            <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
              {t("select_all")} (10000)
            </Typography>
          </Box>

          <Box>
            <Button
              sx={{
                width: { xs: "100%", md: "146px" },
                height: "32px",
                backgroundColor: "#114F80",
                color: "#fff",
                fontFamily: "Sora",
                fontSize: { xs: "18px", md: "20px" },
                fontWeight: "600",
                mt: { xs: 2, md: 0 },
              }}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                navigate("/saudi-number2");
              }}
            >
              {t("next")}
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
            {t("Choose_the_groups_to_which_it_will_be_sent")}
          </Typography>
          <select
            onChange={(e) => {
              if (e.target.value == 6) {
                setActiveOption(true);
              } else {
                setActiveOption(false);
              }
            }}
            style={{
              width: "auto",
              height: "50px",
              borderRadius: "15px",
              fontSize: "24px",
            }}
          >
            <option value="1"> {t('kingdom_of_saudi_arabia')} </option>
            <option value="2">{t('qatar')}</option>
            <option value="3">{t('bahrain')}</option>
            <option value="4">{t('yemen')}</option>
            <option value="5">{t("morocco")}</option>
            <option value="6">{t('all')}</option>
          </select>
        </Box>
      </Box>

      <Typography sx={{  mb: 1 }}>{t('WhatsApp')}</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          width: "100%",
          mt: 2,
          p: "20px",
        }}
      >
        {/* WhatsApp Section */}
        <Box
          sx={{
            width: "100%",
            mb: { xs: 2, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {whatsApp.map((country, index) => (
            <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
              className={`${activeOption ? "active-option" : ""}`}
              key={index}
              onClick={(e) => {
                if (activeGroup) {
                  activeGroup.classList.remove("active-group");
                }
                e.currentTarget.classList.add("active-group");
                setActiveGroup(e.currentTarget);

                // navigate("/saudi-groups");
              }}
              sx={{
                maxWidth: { xs: "100%", md: "336px" },
                height: "77px",
                border: "3px solid #114F80",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                cursor: "pointer",
                px: "20px",
                py: "50px",
                mt: "15px",
              }}
            >
              <Box sx={{ width: "83.06px", height: "44.46px" }}>
                <Box
                  component="img"
                  src={country}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#114F80",
                    fontWeight: "700",
                    fontFamily: "inter",
                  }}
                >
                  
                  {t("number_of_groups_kingdom_of_saudi_arabia")}
                </Typography>
                <Typography>1026 {t("groups")}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            mb: { xs: 2, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {whatsApp.map((country, index) => (
            <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
              className={`${activeOption ? "active-option" : ""}`}
              key={index}
              onClick={(e) => {
                if (activeGroup) {
                  activeGroup.classList.remove("active-group");
                }
                e.currentTarget.classList.add("active-group");
                setActiveGroup(e.currentTarget);

                // navigate("/saudi-groups");
              }}
              sx={{
                maxWidth: { xs: "100%", md: "336px" },
                height: "77px",
                border: "3px solid #114F80",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                cursor: "pointer",
                px: "20px",
                py: "50px",
                mt: "15px",
              }}
            >
              <Box sx={{ width: "83.06px", height: "44.46px" }}>
                <Box
                  component="img"
                  src={country}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#114F80",
                    fontWeight: "700",
                    fontFamily: "inter",
                  }}
                >
                  {t("number_of_groups_kingdom_of_saudi_arabia")}
                </Typography>
                <Typography>1026 {t("groups")}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SendToGroupWhatsApp;
