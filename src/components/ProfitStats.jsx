import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";
function ProfitStats() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("this_week");
  const [activeLink, setActiveLink] = useState(false);

  const filters = [
    "this_week",
    "this_month",
    "since_one_month",
    "since_six_months",
    "this_year",
  ];

  const allCards = {
    ["this_week"]: [
      { price: "40,000", name: "diamond_wallet" },
      { price: "80,000", name: "package_subscription" },
    ],
    ["this_month"]: [
      { price: "200,000", name: "diamond_wallet" },
      { price: "120,000", name: "package_subscription" },
    ],
    ["since_one_month"]: [
      { price: "320,000", name: "diamond_wallet" },
      { price: "180,000", name: "package_subscription" },
    ],
    ["since_six_months"]: [
      { price: "800,000", name: "diamond_wallet" },
      { price: "1,000,000", name: "package_subscription" },
    ],
    ["this_year"]: [
      { price: "1,500,000", name: "diamond_wallet" },
      { price: "2,000,000", name: "package_subscription" },
    ],
  };

  const filteredCards = allCards[activeFilter];

  // أنيميشن التلاشي للأزرار
  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  // أنيميشن التأثير عند ظهور الكروت
  const cardAnimation = keyframes`
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  return (
    <Box>
      <Typography
        sx={{
          color: "#114F80",
          fontSize: "40px",
          fontWeight: "600",
          mb: "30px",
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        {t("app_profit_stats")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        {filters?.map((filter) => (
          <Button
          component={motion.button}
          whileHover={{scale:1.15}}
            sx={{
              width: { xs: "100%", md: "156px" },
              height: "57px",
              fontSize: "20px",
              borderRadius: "10px",
              fontFamily: "Tanseek Modern Pro Arabic",
              backgroundColor: "#fff",
              fontWeight: "600",
              animation: `${fadeIn} 1s ease-out`,
            }}
            key={filter}
            onClick={(e) => {
              if (activeLink) {
                activeLink.classList.remove("active");
              }
              e.target.classList.add("active");
              setActiveLink(e.target);
              setActiveFilter(filter);
            }}
          >
            {t(filter)}
          </Button>
        ))}
      </Box>

      <Grid2 container spacing={4} sx={{ my: "30px" }} justifyContent="center">
        {filteredCards.map((card) => (
          <Box
          component={motion.div}
            key={`${activeFilter}-${card.name}`} 
            whileHover={{scale:1.2}}
          >
            <Grid2
              sx={{
                width: { xs: "100%", md: "220px" },
                height: "281px",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                borderRadius: "15px",
                animation: `${cardAnimation} 0.8s ease-out`,
              }}
            >
              <Box
                sx={{
                  width: "174px",
                  height: "169px",
                  borderRadius: "15px",
                  background:
                    "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography sx={{ fontSize: "30px" }}>{card.price}</Typography>
                <Typography sx={{ fontSize: "30px" }}>{t("sar")}</Typography>
              </Box>
              <Typography sx={{ fontSize: "30px", color: "#114F80" }}>
                {t(card.name)}
              </Typography>
            </Grid2>
          </Box>
        ))}
      </Grid2>
    </Box>
  );
}

export default ProfitStats;
