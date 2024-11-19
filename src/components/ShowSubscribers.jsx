import { Box, Button, TextField, Typography } from "@mui/material";
// import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";

function ShowSubscribers() {
  // let [ShowSubscribers] = useState([
  //   { name: "احمد محمد", type: "user" },
  //   { name: "محمد علي", type: "subscriber" },
  //   { name: "علي حسن", type: "user" },
  //   { name: "سارة خالد", type: "subscriber" },
  //   { name: "هشام احمد", type: "user" },
  //   { name: "احمد محمد", type: "user" },
  //   { name: "محمد علي", type: "subscriber" },
  //   { name: "علي حسن", type: "user" },
  //   { name: "سارة خالد", type: "subscriber" },
  //   { name: "هشام احمد", type: "user" },
  //   { name: "احمد محمد", type: "user" },
  //   { name: "محمد علي", type: "subscriber" },
  //   { name: "علي حسن", type: "user" },
  //   { name: "سارة خالد", type: "subscriber" },
  //   { name: "هشام احمد", type: "user" },
  //   { name: "احمد محمد", type: "user" },
  //   { name: "محمد علي", type: "subscriber" },
  //   { name: "علي حسن", type: "user" },
  //   { name: "سارة خالد", type: "subscriber" },
  //   { name: "هشام احمد", type: "user" },
  // ]);

  // const [filteredUsers, ] = useState(ShowSubscribers);



  let navigate = useNavigate();
  return (
    <Box sx={{ width: "100%", m: "0 auto" }}>
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
        onClick={() => navigate("/add-user")}
      >
        إضافه مستخدم
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
          عرض المستخدمين
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "597px" },
            mt: { xs: "20px", sm: "0" },
          }}
        >
          <TextField
            placeholder="بحث بالاسم"
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
          sx={{
            width: "121.65px",
            height: "32px",
            backgroundColor: "#114F80",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => navigate('/show-users')}
        >
          <Typography>مستخدم</Typography>
        </Box>
        <Box
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
          onClick={() => ""}
        >
          <Typography>مشترك </Typography>
        </Box>
        <Box
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
          onClick={() => navigate('/all-users')}
        >
          <Typography>الكل</Typography>
        </Box>
      </Box>

      {/* عرض المستخدمين */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          p: "25px",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <Box
          onClick={() => navigate("/show-user-file")}
          //  "#114F80"
          sx={{
            width: { xs: "100%", sm: "247px" },
            height: "331px",
            backgroundColor: "#fff",
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

          <Typography>احمد على</Typography>
          <Typography
            sx={{
              color: "#114F80",
              fontSize: "20px",
            }}
          >
            مستخدم
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#114F80",
            }}
          >
            الرياض-المملكة العربية السعودية <br />
            فريق العمل : 20 مسوق
          </Typography>
        </Box>
        <Box
          onClick={() => navigate("/show-user-file")}
          //  "#114F80"
          sx={{
            width: { xs: "100%", sm: "247px" },
            height: "331px",
            backgroundColor: "#fff",
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

          <Typography>احمد على</Typography>
          <Typography
            sx={{
              color: "#114F80",
              fontSize: "20px",
            }}
          >
            مستخدم
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#114F80",
            }}
          >
            الرياض-المملكة العربية السعودية <br />
            فريق العمل : 20 مسوق
          </Typography>
        </Box>
        <Box
          onClick={() => navigate("/show-user-file")}
          //  "#114F80"
          sx={{
            width: { xs: "100%", sm: "247px" },
            height: "331px",
            backgroundColor: "#fff",
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

          <Typography>احمد على</Typography>
          <Typography
            sx={{
              color: "#114F80",
              fontSize: "20px",
            }}
          >
            مستخدم
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#114F80",
            }}
          >
            الرياض-المملكة العربية السعودية <br />
            فريق العمل : 20 مسوق
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ShowSubscribers;
