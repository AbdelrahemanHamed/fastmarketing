import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SpesificWhatsAppGroup() {
  const navigate = useNavigate();
  const [checkedInput, setCheckedInput] = useState(false); 
  const [checkedItems, setCheckedItems] = useState([]); 
  const [count, setCount] = useState();
  let {t}=useTranslation()
  const numbers = [
    "966 55443322",
    "966 55443323",
    "966 55443324",
    "966 55443325",
    "966 55443326",
    "966 55443327",
    "966 55443328",
    "966 55443329",
    "966 55443330",
    "966 55443331",
    "966 55443332",
  ];

  useEffect(() => {
    
    if (checkedInput) {
      setCheckedItems(Array(numbers.length).fill(true));
    } else {
      setCheckedItems(Array(numbers.length).fill(false));
    }
  }, [checkedInput]);

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
          textAlign: { xs: "center", md: "right" },
        }}
      >
        {t('All_numbers_of_the_Kingdom_of_Saudi_Arabia_groups')}
      </Typography>

      <Box sx={{ p: { xs: "10px", md: "25px" }, mt: { xs: "20px", md: "50px" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: { xs: "100%", md: "100%" },
            mx: "auto",
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
                onChange={(e) => {
                  setCheckedInput(e.target.checked); 
                }}
                checked={checkedInput}
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
                whileHover={{scale:1.1}}
                onClick={() => navigate("/saudi_numbers_whats")}
              >
              {t('next')}
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
              {t('Send_to_a_specific_number')}
            </Typography>
            <input
              style={{
                width: "220px",
                height: "40px",
                paddingInline: "10px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                fontSize: "15px",
              }}
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
              type="number"
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mt: "30px" }}>
          {numbers.map((number, index) => (
            <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
              key={index}
              sx={{
                width: { xs: "100%", md: "821px" },
                height: "77px",
                backgroundColor: "#114F80",
                display: "flex",
                px: "20px",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#fff",
                borderRadius: "16px",
                cursor: "pointer",
                mx: "auto",
              }}
            >
              <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
                {number}
              </Typography>
              <input
                className="check-input"
                style={{
                  width: "37px",
                  height: "37px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={(e) => {
                  const newCheckedItems = [...checkedItems];
                  newCheckedItems[index] = e.target.checked;
                  setCheckedItems(newCheckedItems);

                  
                  if (!e.target.checked) {
                    setCheckedInput(false);
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SpesificWhatsAppGroup;
