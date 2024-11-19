import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";

function AddLinks() {
  let {t} = useTranslation()
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
          >
          {t('choose_country')}
          </Typography>

          <select
            name=""
            id=""
            style={{
              marginTop: "20px",
              height: "50px",
              padding: "10px",
              width: "300px",
              fontSize:'20px'
              
            }}
          >
            <option value="">{t('egypt')}</option>
            <option value="">{t('kingdom_of_saudi_arabia')} </option>
            <option value="">{t('qatar')}</option>
            <option value="">{t("bahrain")}</option>
          </select>
        </Box>
      </Box>

      <Box sx={{ p: "25px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "412px" } }}>
            <Typography
              sx={{ color: "#5E5E5E", fontSize: "30px", fontWeight: "700" }}
            >
             {t('Add_group_link')}
            </Typography>
            <input
              style={{
                width: "100%",
                height: "70px",
                paddinInline: "10px",
                fontSize: "30px",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                mt: "10px",
                borderRadius: "15px",
              }}
            />
           
            
          </Box>

          <Box sx={{}}>
            <Box
              sx={{
                display: "flex",
                alignItems: "",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "30px", md: "40px" },
                  color: "#114F80",
                  textAlign: "center",
                }}
              >
               {t('add_number')}
              </Typography>

              <input
                name=""
                id=""
                style={{
                  marginTop: "20px",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                my: "30px",
                width: "300px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  color: "#5E5E5E",
                  alignSelf: "flex-start",
                }}
              >
                اضف الملف
              </Typography>
              <Button
                sx={{
                  width: "auto",
                  height: "70px",
                  fontSize: "30px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#000",
                  background:
                    "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                }}
                component={motion.div}
                whileHover={{ scale: 1.1 }}
              >
               {t('download_csv')}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "412px" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {t('platforms')}
            </Typography>

            <select
              style={{
                display: "flex",
                alignItems: "cnenter",
                justifyContent: "space-between",
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "15px",
                p: "10px",
                height: "70px",
                position: "relative",
                fontSize: "28px",
              }}
            >
              <option
            
              >
               {t('WhatsApp')}
              </option>
              <option
            
              >
                {t('Telegram')}
              </option>

              <FaArrowDown
                style={{
                  fontSize: "10px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "20px",
                }}
              />
            </select>
          </Box>
        </Box>

        <Button
          sx={{
            width: "121.65px",
            height: "32px",
            backgroundColor: "#114F80",
            mt: "30px",
            color: "#fff",
            fontSize: "25px",
            fontFamily: "Tanseek Modern Pro Arabic",
            display: "flex",
            justifyContnet: "center",
            alignItems: "center",
            py: "20px",
            borderRadius: "6px",
          }}
          component={motion.div}
          whileHover={{ scale: 1.15 }}
        >
          {t('save')}
        </Button>
      </Box>
    </Box>
  );
}

export default AddLinks;
