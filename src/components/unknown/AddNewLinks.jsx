import { Box, Button, Typography } from "@mui/material";
function AddNewLinks() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
      >
    أضف روابط  مجموعة المملكة العربية السعودية
      </Typography>

      <Box sx={{ p: "25px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap:'wrap'
          }}
        >
          <Box sx={{ width: {xs:"100%" ,md:"412px" }}}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" , fontWeight:'700'}}>
            أضف رابط الجروب
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "70px",
                p: "10px",
                fontSize: "30px",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                mt: "10px",
                borderRadius: "15px",
              }}
            >
              رابط المجموعة
            </Box>
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
             اضف  الملف
            </Typography>
            <Button
              sx={{
                width: "205px",
                height: "70px",
                fontSize: "30px",
                fontFamily: "Tanseek Modern Pro Arabic",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                background: "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
              }}
            >
            قم بتحميل الملف  csv  
            </Button>
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
            المنصة
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "70px",
                p: "10px",
                fontSize: "30px",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                mt: "10px",
                borderRadius: "15px",
              }}
            >
            الواتساب
            </Box>
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
             اضف  الملف
            </Typography>
            <Button
              sx={{
                width: "205px",
                height: "70px",
                fontSize: "30px",
                fontFamily: "Tanseek Modern Pro Arabic",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                background: "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
              }}
            >
            قم بتحميل الملف  csv  
            </Button>
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
              display:'flex',
              justifyContnet:'center',
              alignItems:'center',
              py:'20px',
              borderRadius:"6px"
            }}
          >
            حفظ
          </Button>
      </Box>
    </Box>
  );
}

export default AddNewLinks;
