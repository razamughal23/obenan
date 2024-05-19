import dynamic from "next/dynamic";
import { Box, Grid, Typography } from "@mui/material";
import { GetStarted } from "../buttons/Buttons";
import { styles } from "./styles";
const ObenanImage = dynamic(() => import("../ObenanImage"));

interface Props {
  title: any;
  desc: any;
  variant: any;
  src?: any;
}

const BrandsHeading = ({ title, desc, variant, src }: Props) => {
  if (!title) {
    return <></>;
  }
  return (
    <Box sx={styles.BrandHeadingStyles}>
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
            <Box sx={styles.ImageBox}>
              <Box sx={{ height: { xs: 400, sm: 500, md: 600, lg: 700 }, width: "100%" }}>
                <ObenanImage src={src} alt="Brands Logos" quality={100} style={{ objectFit: "contain" }} />
              </Box>
            </Box>
          </Grid>
        ) : (
          ""
        )}

        <Grid data-aos="fade-up" item xs={12} sm={12} md={12} lg={12} sx={styles.listingButton}>
          <GetStarted />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrandsHeading;
