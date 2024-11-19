import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { motion } from "framer-motion";

function Supervisors() {


  let {t}=useTranslation()
  let [supervisors] = useState([
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
 
  ]);


  let lang= i18next.language
useEffect(()=>{
  console.log(i18next.language)
})
  let navigate= useNavigate()
  return (
    <Box sx={{ maxWidth: "100%" }}>
   

      <Box
        sx={{ display: "flex", justifyContent: "space-between", my: "30px" }}
      >
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80",fontWeight:'600' }}
        >
       {t('view_supervisor')}
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            placeholder={t('search_by_name')}
            sx={{ width: {xs:'auto',lg:"597px"}, backgroundColor: "#fff" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: lang === "en" ?'90%' :"5%",
              width: "33.6px",
              height: "34.8px",
            }}
          >
            <IoSearchOutline
              style={{
                width: "100%",
                height: "100%",
                color: "#937B31",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px", p: "25px" }}>
        {supervisors.map((supervisor, index) => {
          return (
            <Box

            component={motion.div}
            whileHover={{scale:1.1}}
              key={index}
              sx={{
                width: "247px",
                height: "331px",
                backgroundColor: "#FFFFFF",
                borderRadius: "15px",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: "20px",
                textAlign: "center",
                gap: "10px",
                cursor: "pointer",
              }}
              onClick={()=>{
                // navigate('/supervisor-profile')
                navigate('/marketers')
              }}
            >
              <Box sx={{ width: "108px", height: "108px" }}>
                <Box
                  component="img"
                  src={profile_img}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>

              <Typography>{t(supervisor.name)}</Typography>
              <Typography
                sx={{
                  background:
                    "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "20px",
                }}
              >
                {t("supervisor")}
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#114F80" }}>
              {t('location')} <br />
               {t('team_work_20_marketers')}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Supervisors;
