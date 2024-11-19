/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";
function UserStats() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("this_week");
  const [activeLink, setActiveLink] = useState(null);

  const filters = [
    "this_week",
    "this_month",
    "since_last_month",
    "since_6_months",
    "this_year",
  ];

  const allCards = {
    this_week: [{ number: "40,000" }],
    this_month: [{ number: "200,000" }],
    since_last_month: [{ number: "320,000" }],
    since_6_months: [{ number: "800,000" }],
    this_year: [{ number: "1,500,000" }],
  };

  const filteredCards = allCards[activeFilter];

  const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  useEffect(() => {
    setActiveFilter(filters[0]);
  }, [filters]);

  return (
    <Box>
      <Typography
        sx={{
          color: "#114F80",
          fontSize: { xs: "30px", md: "40px" },
          fontWeight: "600",
          mb: "30px",
        }}
      >
        {t("user_stats_title")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
        }}
      >
        {filters.map((filter) => (
          <Button
          component={motion.button}
          whileHover={{scale:1.15}}
            sx={{
              width: { xs: "100%", md: "156px" },
              height: "57px",
              fontSize: { xs: "16px", md: "20px" },
              borderRadius: "10px",
              fontFamily: "Tanseek Modern Pro Arabic",
              fontWeight: "600",
              backgroundColor: "#fff",
              "&.active": {
                backgroundColor: "#F9D053",
              },
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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: "30px",
        }}
      >
        {filteredCards.map((card, index) => (
          <Box key={index} component={motion.div}
          whileHover={{scale:1.1}}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "auto" },
                height: "281px",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                borderRadius: "15px",
                p: "40px",
                animation: `${fadeIn} 0.8s ease-out`,
              }}
            >
              <Box
                sx={{
                  maxWidth: { xs: "100%", md: "521.21px" },
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
                  padding:'30px'
                }}
              >
                <Typography sx={{ fontSize: { xs: "24px", md: "30px" } }}>
                  {card.number}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "24px", md: "30px" }, color: "#fff" }}
                >
                  {t("clients")}
                </Typography>
              </Box>
              <Typography
                sx={{ fontSize: { xs: "24px", md: "30px" }, color: "#114F80" }}
              >
                {t("subscribers_count")}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default UserStats;
