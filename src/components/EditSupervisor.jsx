import { Box, Button, Typography } from "@mui/material";
import addimg from "../assets/addimg.png";
import { useTranslation } from "react-i18next";
function EditSupervisor() {
  let {t}= useTranslation()
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        {t("edit_supervisor")}
      </Typography>
      <Box sx={{ p: "20px", width: { xs: "100%", xl: "60%" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "20px",
          }}
        >
          <Box sx={{width:'49%'}}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
             {t('full_name')}
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
                {t('country')}
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
             {t('kingdom_of_saudi_arabia')}
              </Box>
            </Box>

            <Box sx={{ width: "49%" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t('city')}
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
                         {t('riyadah')}
              </Box>
            </Box>
          </Box>

          {/* البريد الالكتروني  */}

          {/* رقم الجوال في صف منفصل */}
          <Box sx={{ mt: "20px", width: "49%" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {t('phone_number')}
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
              966 5552512
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
            <Box sx={{width:'49%'}}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
               {t('bank_name')}
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
                {t('alraghy')}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column",width:'48%' }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
               {t('bank_account_number')}
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
                56145612515615614154145
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" ,width:'230px'}}>
            <Typography sx={{alignSelf:'end'}}>{t('add_new_img')}</Typography>
            <Button
              sx={{
                width: "205px",
                height: "70px",
                mt: "10px",
                fontSize: "30px",
                fontFamily: "Tanseek Modern Pro Arabic",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                textTransform: "capitalize",
                background: "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
              }}
            >
              {t("download_img")}
            </Button> 
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            <Box>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t('email')}
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
                {t('add_password')}
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
              ></Box>
            </Box>
          </Box>

          <Button
            sx={{
              alignSelf: "start",
              mt: "40px",
              width: "121.65px",
              height: "32px",
              backgroundColor: "#114F80",
              color: "#fff",
              borderRadius:'6px'
            }}
          >
            {t('save')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EditSupervisor;
