import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "./Context";
function MarketerLink() {
  let { sidebarOpen } = useContext(Context);
  return (
    <Box>
      <Typography
        sx={{ textAlign: "center", fontSize: "50px", fontWeight: "600" }}
      >
        بيانات المسوق
      </Typography>

      <Box
        sx={{
          width: "15%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "40px", color: "#114F80", fontWeight: "600" }}
        >
          أحمد محمد
        </Typography>

        <Typography
          className="text-gradient"
          sx={{
            mb: "30px",
            display: "flex",
            fontSize: "25px",
          }}
        >
          اسم مشرف
        </Typography>
      </Box>

      <Box sx={{ p: "20px" }}>
        <Box
          sx={{
            width: { xs: "100%", md: "630px" },
            mx: sidebarOpen ? "" : "auto",
            height: "auto",
            backgroundColor: "#fff",
            p: "30px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "20%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "40px" }}> على محمد</Typography>

            <Typography
              sx={{
                background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: "30px",
                display: "flex",
                fontSize: "25px",
              }}
            >
              مسوق
            </Typography>
          </Box>

          <Box sx={{ mt: "30px", color: "#114F80" }}>
            <Typography sx={{ fontSize: "20px" }}>
              كود الخصم : ALIO15412
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              عدد الإحالات: 12,500
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              الرياض-المملكة العربية السعودية
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: "700",
                  fontSize: "30px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  ml: "10px",
                }}
              >
                رقم الجوال :
              </Typography>{" "}
              966 5522116
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: "700",
                  fontSize: "30px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  ml: "10px",
                }}
              >
                رقم الحساب البنكى:
              </Typography>
              5147892154156
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: "700",
                  fontSize: "30px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  ml: "10px",
                }}
              >
                البنك:
              </Typography>
              الراجحى
            </Typography>
          </Box>

          <Typography sx={{ fontSize: "20px", color: "#A3A3A3" }}>
            10/10/2024
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "40px",
            color: "#114F80",
            fontWeight: "600",
            mr: "60px",
            mt: "30px",
          }}
        >
          سرعة التسويق تشكرك على تعاونك معنا
        </Typography>
      </Box>
    </Box>
  );
}

export default MarketerLink;
