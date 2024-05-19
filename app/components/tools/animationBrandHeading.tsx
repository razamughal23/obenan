import dynamic from "next/dynamic";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { GetStarted } from "../buttons/Buttons";
import { styles } from "./styles";
const ObenanAnimations = dynamic(() => import("../ObenanImage/animations"));

interface Props {
  title: any;
  desc: any;
  variant: any;
  src: any;
}
const AnimationBrandHeading = ({ title, desc, variant, src }: Props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Grid container item xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={styles.MainGrid}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
          <Typography
            fontSize={{ xs: "35px", lg: "48px" }}
            lineHeight={{ xs: "40px", lg: "72px" }}
            fontWeight={700}
            variant={variant}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} sx={styles.desc}>
          <Typography fontSize={"20px"} fontWeight={400} lineHeight={"28px"}>
            {desc}
          </Typography>
        </Grid>
        {src ? (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={styles.listingBrands}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ height: { xs: 400, sm: 500, md: 600, lg: 700 }, width: "100%" }}>
                <ObenanAnimations animationData={src} />
              </Box>
            </Box>
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} md={5.5} lg={6} sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                height: 400,
                width: 400,
              }}
            ></Box>
          </Grid>
        )}

        <Grid data-aos="fade-up" item xs={12} sm={12} md={12} lg={12} sx={styles.listingButton}>
          <GetStarted />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnimationBrandHeading;
