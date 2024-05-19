"use client";
import { SiteMapData, SolutionData, ToolsData } from "../../../../jsondata/Data";
import { Box, Container, Grid, List, ListItem, Typography, useTheme } from "@mui/material";
import React from "react";
import ObenanImage from "../../ObenanImage/index";
import FooterLogo from "../../../../public/FooterLogo.png";
import fb from "../../../../public/fb.png";
import twitter from "../../../../public/twitter.png";
import tumblr from "../../../../public/tumblr.png";
import insta from "../../../../public/insta.png";
import linkedin from "../../../../public/linkedin.png";
import mail from "../../../../public/mail.png";
import Link from "@mui/material/Link";
import NextLink from "app/components/ObenanLink";
import { useTranslations } from "next-intl";
import { styles } from "./styles";

const Footer = () => {
  const t = useTranslations("header");
  const theme = useTheme();
  return (
    <Box sx={styles.FooterBox}>
      <Container maxWidth={"xl"} disableGutters>
        <Grid container item xs={11} sm={11} md={11} lg={10} xl={12} sx={styles.mainGrid}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box
              sx={{
                height: 52,
                width: 125,
              }}
            >
              <ObenanImage src={FooterLogo} alt={"footer logo"} style={{ objectFit: "contain" }} />
            </Box>
            <Typography fontSize={"16px"} fontWeight={400} lineHeight={"1.6em"} sx={styles.footerTypo}>
              {t("With love from")}{" "}
              <Link href={"https://goo.gl/maps/rG3pTnSFBZRC1iaA9"} target="Amsterdam" sx={styles.footerLink}>
                {t("Amsterdam")}
              </Link>
              ,{" "}
              <Link href={"https://goo.gl/maps/2CVPREBscRNYXaAUA"} target="Berlin" sx={styles.footerLink}>
                {t("Berlin")}{" "}
              </Link>
              {t("and")}{" "}
              <Link href={"https://goo.gl/maps/d7NRoc5ReWGEtMfa8"} target="Berlin" sx={styles.footerLink}>
                {t("Barcelona")}{" "}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography fontSize={"18px"} fontWeight={700} lineHeight={"24px"}>
              {t("Sitemap")}
            </Typography>
            {SiteMapData.map((SiteMapdata: any, index) => {
              return (
                <List key={`${SiteMapdata.id}-${index}`}>
                  <ListItem sx={styles.dataList}>
                    <NextLink
                      href={SiteMapdata.link}
                      style={{ textDecoration: "none", color: theme.palette.primary.main }}
                    >
                      <Typography>{t(SiteMapdata.name)}</Typography>
                    </NextLink>
                  </ListItem>
                </List>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography fontSize={"18px"} fontWeight={700} lineHeight={"24px"}>
              {t("Tools")}
            </Typography>
            {ToolsData.map((Toolsdata: any, index) => {
              return (
                <List key={`${Toolsdata.id}-${index}`}>
                  <ListItem sx={styles.dataList}>
                    <NextLink
                      href={Toolsdata.link}
                      style={{ textDecoration: "none", color: theme.palette.primary.main }}
                    >
                      <Typography>{t(Toolsdata.name)}</Typography>
                    </NextLink>
                  </ListItem>
                </List>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={3}>
            <Typography fontSize={"18px"} fontWeight={700} lineHeight={"24px"}>
              {t("Business Solutions")}
            </Typography>
            {SolutionData.map((Solutiondata: any, index) => {
              return (
                <List key={`${Solutiondata.id}-${index}`}>
                  <ListItem sx={styles.dataList}>
                    <NextLink
                      href={Solutiondata.link}
                      style={{ textDecoration: "none", color: theme.palette.primary.main }}
                    >
                      <Typography>{t(Solutiondata.name)}</Typography>
                    </NextLink>
                  </ListItem>
                </List>
              );
            })}
          </Grid>
        </Grid>
        <Grid container item xs={11} sm={9} md={10} lg={10} xl={12} sx={styles.footerDesc}>
          <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.footerGrid}>
            <Grid item xs={12} sm={3} md={2.5} lg={2} sx={styles.footerMargin}>
              <Typography fontSize={"14px"} fontWeight={700} lineHeight={"20px"}>
                {t("Cookie settings")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={5} lg={7} sx={{ ...styles.footerMargin, opacity: 0.7 }}>
              <Typography fontSize={"14px"} fontWeight={"bold"} lineHeight={"20px"}>
                {t("© 2023 obenan")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={4.5} lg={3} sx={styles.footerBoxDesign}>
              <Box sx={styles.IconBox}>
                <Link href="https://www.facebook.com/obenann" target="facbook">
                  <ObenanImage src={fb} alt="facebook" />
                </Link>
              </Box>
              <Box sx={styles.IconBox}>
                <Link href="https://twitter.com/obenann" target="twitter">
                  <ObenanImage src={twitter} alt="twitter" />
                </Link>
              </Box>
              <Box sx={styles.IconBox}>
                <Link href="https://obenan.tumblr.com/" target="tumblr">
                  <ObenanImage src={tumblr} alt="tumblr" />
                </Link>
              </Box>
              <Box sx={styles.IconBox}>
                <Link href="https://www.instagram.com/obenan.software/" target="insta">
                  <ObenanImage src={insta} alt="insta" />
                </Link>
              </Box>
              <Box sx={styles.IconBox}>
                <Link href="https://www.linkedin.com/company/obenan" target="linkedin">
                  <ObenanImage src={linkedin} alt="linkedin" />
                </Link>
              </Box>
              <Box sx={styles.IconBox}>
                <Link href="https://www.facebook.com/obenann" target="mail">
                  <ObenanImage src={mail} alt="mail" />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
