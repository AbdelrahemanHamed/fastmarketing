import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, TextField, Button } from "@mui/material";
import { Context } from "./Context";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const [open, setOpen] = useState(false);
  let sidebarRef = useRef();
  let { sidebarOpen, setSidebarOpen } = useContext(Context);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setSidebarOpen(false);
    }
  }, [setSidebarOpen]);

  useEffect(() => {
    function clickOutside(e) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        window.innerWidth < 600
      ) {
        setSidebarOpen(false);
      }
    }
    window.addEventListener("mousedown", clickOutside);
    return () => window.removeEventListener("mousedown", clickOutside);
  }, [setSidebarOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 600) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen]);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  let [activeLink, setActiveLink] = useState(false);
  let [appDropDown, setAppDropDown] = useState(false);
  let [statsDropDown, setStatsDropDown] = useState(false);
  let [prices, setPrices] = useState(false);
  let [techSupport, setTechSupport] = useState(false);
  let [marketers, setMarketers] = useState(false);
  let [groups, setGroups] = useState(false);
  let [admins, setAdmins] = useState(false);

  let [dropDownLinks] = useState([
    { name: "application_banners", path: "/banners" },
    { name: "videos", path: "/videos" },
    { name: "social_account", path: "/socials" },
    { name: "platforms", path: "/platforms" },
    { name: "welcome_screen", path: "/Welcome" },
    { name: "application_policy", path: "/policy" },
    { name: "share_with_friends", path: "/share" },
    { name: "send_notification", path: "/send-logo" },
  ]);

  let navigate = useNavigate();

  let { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#114F80",
        width: sidebarOpen ? { xs: "200px", md: "30%" } : "0",
        position: sidebarOpen ? { xs: "fixed", sm: "sticky" } : "",
        top: "0",
        bottom: "0",
        minHeight: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        zIndex: "12",
        transition: "400ms width",
        overflow: "hidden",
      }}
      ref={sidebarRef}
    >
      <Box
        sx={{
          width: { xs: "110px", md: "300px", xl: "260px" },
          height: "auto",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/home");
        }}
      >
        <Box sx={{ width: "100%" }} component="img" src={logo} />
      </Box>
      <Box>
        <Typography
          className="hover-link"
          style={{
            color: "#fff",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/home");
          }}
        >
          {t("Home")}
        </Typography>
      </Box>
      {/* التطبيق */}
      <Box>
        <Typography
          className="hover-link"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setAppDropDown(!appDropDown);
          }}
        >
          {t("application")}
        </Typography>
        {appDropDown && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "80%", md: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            {dropDownLinks.map((link) => (
              <Link
                to={link.path}
                className="link"
                key={link.name}
                onClick={(e) => {
                  if (activeLink) {
                    activeLink.classList.remove("active");
                  }
                  e.target.classList.add("active");
                  setActiveLink(e.target);
                }}
              >
                {t(link.name)}
              </Link>
            ))}
          </Box>
        )}
      </Box>

      {/* الاحصائيات */}
      <Box>
        <Typography
          className="hover-link"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setStatsDropDown(!statsDropDown);
          }}
        >
          {t("statistics")}
        </Typography>
        {statsDropDown && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "300px", md: "280", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to={"/profitstats"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
                navigate("/profitstats");
              }}
            >
              {t("app_profit_statistics")}
            </Link>
            <Link
              to={"/userstats"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("user_statistics")}
            </Link>
          </Box>
        )}
      </Box>

      {/* الاسعار */}
      <Box>
        <Typography
          className="hover-link"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setPrices(!prices);
          }}
        >
          {t("pricing")}
        </Typography>
        {prices && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to={"/packages"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("packages")}
            </Link>
            <Link
              to={"/diwallet"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("diamond_wallet")}
            </Link>

            <Link
              to={"/discount"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("discount_codes")}
            </Link>
          </Box>
        )}
      </Box>
      {/* المستخدمين  */}
      <Box>
        <Typography
          className="hover-link"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            navigate("/show-users");
          }}
        >
          {t("users")}
        </Typography>
      </Box>

      {/* الدعم الفني */}

      <Box>
        <Typography
          className="hover-link"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setTechSupport(!techSupport);
          }}
        >
          {t("technical_support")}
        </Typography>
        {techSupport && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to="/techsupport"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("support_chat")}
            </Link>
            <Link
              to="suggestion"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("suggestions")}
            </Link>
          </Box>
        )}
      </Box>

      {/* المجموعات */}
      <Box>
        <Typography
          className="hover-link"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setGroups(!groups);
          }}
        >
          {t("groups")}
        </Typography>
        {groups && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to="/create_group_categories"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("create_groups")}
            </Link>
            <Link
              to="/send-to-groups"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("send_to_groups")}
            </Link>

            <Link
              to="/all-numbers"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {/* {t('all_country_codes')} */}

              {t("Send to all numbers of countries")}
            </Link>
            <Link
              to="/add-links"
              style={{ width: "100%" }}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("add_group_links_and_numbers")}
            </Link>

            <Link
              to="/clients-groups"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("customer_groups")}
            </Link>

            <Link
              to="/clients-channels"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("customer_channels")}
            </Link>
          </Box>
        )}
      </Box>

      {/* المسؤلين */}
      <Box>
        <Typography
          className="hover-link"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setAdmins(!admins);
          }}
        >
          {t("admins")}
        </Typography>

        {admins && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to="/Add-admin-file"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("add_admin")}
            </Link>

            {/* <Link
              to="/show-admin-file"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("view_admin_file")}
            </Link> */}
            <Link
              to="/show-admins"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("view_admins")}
            </Link>
          </Box>
        )}
      </Box>

      {/* المسوقين */}

      <Box>
        <Typography
          className="hover-link"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setMarketers(!marketers);
          }}
        >
          {t("marketers")}
        </Typography>
        {marketers && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to="/add-supervisor"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("add_moderators")}
            </Link>

            <Link
              to="supervisors"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              {t("view_moderators")}
            </Link>
            {/* <Typography
              sx={{ px: "20px", cursor: "pointer", fontSize: "24px" }}
              to=""
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
                handleClickOpen();
              }}
            >
              {t("view_marketers")}
            </Typography> */}
          </Box>
        )}
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: "25px",
          },
        }}
      >
        <DialogContent
          style={{
            backgroundColor: "#114F80",
            color: "#fff",
            padding: "80px 80px 20px",
          }}
        >
          <TextField
            label={t("user_name")}
            variant="outlined"
            fullWidth
            margin="dense"
            style={{ backgroundColor: "#fff", borderRadius: "15px" }}
          />
          <TextField
            label={t("password")}
            type="password"
            variant="outlined"
            fullWidth
            margin="dense"
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              marginBlock: "20px",
            }}
          />
          <Button
            onClick={() => {
              handleClose();
              navigate("/marketers");
            }}
            sx={{
              width: "200px",
              display: "block",
              mx: "auto",
              borderRadius: "15px",
            }}
            variant="contained"
            style={{
              marginTop: "15px",
              background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
              color: "#fff",
            }}
          >
            {t("join")}
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Sidebar;
