"use client";
import dynamic from "next/dynamic";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "../styles";
import { BecomePartner, GetStarted } from "app/components/buttons/Buttons";
import { useTranslations } from "next-intl";
const PartnerCard = dynamic(() => import("app/components/learn/partnerCard"));
const Title = dynamic(() => import("app/components/title"));
interface Props {
  title: any;
  description: any;
  data: any;
}
const Partners = (props: Props) => {
  const t = useTranslations("header");
  return (
    <Box sx={styles.MainBox}>
      <Title title={t("Partners")} />
      <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}>
        <Grid item xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={styles.title}>
          <Typography
            fontSize={{ xs: "35px", md: "60px" }}
            lineHeight={{ xs: "40px", lg: "72px" }}
            fontWeight={700}
            variant="h1"
          >
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={11.5} sm={11.5} md={11} lg={8} sx={styles.desc}>
          <Typography fontSize={"20px"} fontWeight={400} lineHeight={"28px"}>
            {props.description}
          </Typography>
        </Grid>
        <Grid data-aos="fade-up" item xs={12} sm={12} md={12} lg={12} sx={styles.listingButton}>
          <GetStarted />
        </Grid>
        {props?.data.length > 0 && <PartnerCard data={props?.data} />}
        <Grid data-aos="fade-up" item xs={12} sm={12} md={12} lg={12} sx={styles.listingButton}>
          <BecomePartner />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Partners;
