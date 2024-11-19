import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function EditAdminFile() {
  let {t}=useTranslation()
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          mb: "20px",
          fontWeight:'600'
        }}
      >
       {t('edit_admin_file')}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
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
           {t('upload_new_image')}
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
            {t('delete')}
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

          {/* الدولة والمدينة في صف واحد */}
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              mt: "20px", 
            }}
          >
            {/* حقل الدولة */}
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

            {/* حقل المدينة */}
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
          <Box sx={{ mt: "20px", width: "100%" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
             {t('phone_number')}
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
              flexWrap:"wrap",
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
                تغير كلمة السر
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
                اسم البنك
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
                الراجحى
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                رقم الحساب البنكي
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
                56145612515615614154145
              </Box>
            </Box>
          </Box>

          <Box sx={{ my: "30px" }}>
            <Typography sx={{ fontSize: "40px", color: "#114F80" ,mb:'20px',fontWeight:'600'}}>
              الأدوار
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" ,px:'30px'}}>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم في اكواد الخصم 
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  احصائيات مكسب التطبيق
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  احصائيات الأشتراكات الشهري والسنوى
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  احصائيات مستخدمى التطبيق
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم فى الأسعار
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم فى المنصات
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  إضافة الدول
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  الدردشات
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم فى التطبيق
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم فى المجموعات
                  </Typography>
               
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EditAdminFile;
