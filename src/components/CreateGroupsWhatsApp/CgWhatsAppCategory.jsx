import { Box,  Typography } from "@mui/material";
import saudiImg from "../../assets/saudi.png";
import qatarImg from "../../assets/qatar.png";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion"

function CgWhatsAppCategory() {
  let [whatsApp] = useState([
    saudiImg,
    qatarImg,
    saudiImg,
    qatarImg,
    saudiImg,
    qatarImg,
    saudiImg,
  ]);

  let navigate = useNavigate();

  let [activeOption] = useState();
  let { t } = useTranslation();
  // useEffect(()=>{
  //   console.log(selectRef.current.value)
  // },[])

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
      </Box>

      <Typography sx={{ mb: 1 }}>{t("WhatsApp")}</Typography>

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
            flexWrap:"wrap",
          }}
        >
          {whatsApp.map((country, index) => (
            <Box
              component={motion.div}
              whileHover={{scale:1.1}}
              className={`${activeOption ? "active-option" : ""}`}
              key={index}
              onClick={(e) => {
                if (activeGroup) {
                  activeGroup.classList.remove("active-group");
                }
                e.currentTarget.classList.add("active-group");
                setActiveGroup(e.currentTarget);

                navigate("/create_whats_group");
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
                  {t("Number_of_Saudi_Arabia_groups")}
                </Typography>
                <Typography>1026 {t("groups")} </Typography>
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
            whileHover={{scale:1.1}}
              className={`${activeOption ? "active-option" : ""}`}
              key={index}
              onClick={(e) => {
                if (activeGroup) {
                  activeGroup.classList.remove("active-group");
                }
                e.currentTarget.classList.add("active-group");
                setActiveGroup(e.currentTarget);

                navigate("/create_whats_group");
              }}
              sx={{
                maxWidth: { xs: "100%", md: "336px" },
                maxHeight: "77px",
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
                  {t("Number_of_Saudi_Arabia_groups")}
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

export default CgWhatsAppCategory;
