"use client";
import dynamic from "next/dynamic";
import { AppBar, Box, Button, Grid, useTheme, Typography, MenuItem, Menu, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { styles } from "./styles";
import { HeaderData } from "../../../../jsondata/Data";
import { GetStarted, Login } from "../../buttons/Buttons";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useQuery } from "@apollo/client";
import { GET_LANGUAGES } from "utils/services/queries/home";
import HeaderLogo from "../../../../public/HeaderLogo.png";
const KeyboardArrowDownSharpIcon = dynamic(() => import("@mui/icons-material/KeyboardArrowDownSharp"));
const KeyboardArrowUpSharpIcon = dynamic(() => import("@mui/icons-material/KeyboardArrowUpSharp"));
const ResponsiveHeader = dynamic(() => import("./responsiveHeader"));
const ObenanImage = dynamic(() => import("../../ObenanImage/index"));
const DropDownMenu = dynamic(() => import("./dropDown"));
const Link = dynamic(() => import("app/components/ObenanLink"));

const Header = ({ locale = "en" }) => {
  const theme = useTheme();
  const route = useRouter();
  const selectedLanguage = require(`language-icons/icons/${locale}.svg`);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { data } = useQuery(GET_LANGUAGES);
  const languageData = data?.i18NLocales?.data || [];
  const t = useTranslations("header");

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const RouteHomePage = () => {
    route.push("/");
  };

  return (
    <AppBar sx={styles.Appbar}>
      {isMatch ? (
        <ResponsiveHeader />
      ) : (
        <Grid container sx={styles.mainGrid}>
          <Box sx={{ height: 80, width: 152, cursor: "pointer" }} paddingLeft={{ lg: "90px" }} onClick={RouteHomePage}>
            <Link href={"/"} locale={locale}>
              <ObenanImage src={HeaderLogo} alt="Header Logo" priority style={{ objectFit: "contain" }} />
            </Link>
          </Box>

          <Box sx={styles.mainBox}>
            <Link style={styles.typoLink} href={"/"} locale={locale}>
              <Typography
                sx={{ paddingRight: "25px", cursor: "pointer", color: theme.palette.primary.contrastText }}
                onClick={RouteHomePage}
              >
                {t("Home")}
              </Typography>
            </Link>
            {HeaderData.map((headerdata: any, index) => {
              return <DropDownMenu key={`${headerdata.id}-${index}`} title={t(headerdata.name)} />;
            })}
            <GetStarted />
            <Login />
            <Button
              sx={styles.lang}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <Box sx={{ height: 20, width: 30, marginRight: "10px" }}>
                <ObenanImage src={selectedLanguage} alt="Languagues" />
              </Box>
              {open ? <KeyboardArrowUpSharpIcon /> : <KeyboardArrowDownSharpIcon />}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {languageData.map((data: any, index: any) => {
                return (
                  <MenuItem key={`${data.id}-${index}`} id="basic-menuItem" onClick={handleClose} sx={styles.Menu}>
                    <Link
                      href={"/"}
                      locale={data.attributes.code}
                      changeLanguage={data.attributes.code}
                      style={styles.langDesign}
                    >
                      <Box sx={{ height: 20, width: 30, paddingRight: "5px" }}>
                        <ObenanImage src={require(`language-icons/icons/${data.attributes.code}.svg`)} alt="flags" />
                      </Box>
                      <Typography sx={{ color: theme.palette.primary.main }}>{data.attributes.name}</Typography>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Grid>
      )}
    </AppBar>
  );
};

export default Header;
