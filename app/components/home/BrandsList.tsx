import dynamic from "next/dynamic";
import { brandsData } from "../../../jsondata/brands";
import { Box, Typography, Grid } from "@mui/material";
import { styles } from "./styles";
import { useTranslations } from "next-intl";
const ObenanImage = dynamic(() => import("../ObenanImage/index"));
const Marquee = dynamic(() => import("react-fast-marquee"));

const Brands = () => {
  const t = useTranslations("header");
  return (
    <Box sx={styles.BrandsMainBox}>
      <Grid container item xs={11.5} sm={11.5} md={11.5} lg={10} xl={9.5} sx={styles.brandMainGrid}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            fontSize={{ xs: "30px", sm: "60px", md: "60px", lg: "60px" }}
            lineHeight={{ xs: "40px", sm: "72px", md: "72px", lg: "72px" }}
            fontWeight={700}
            variant="h2"
          >
            {t("Over thousands of sunny brands all around the world")}
          </Typography>
        </Grid>
        <Grid data-aos="fade-up" item xs={12} sm={11.5} md={12} lg={12} sx={styles.BrandsTitle}>
          <Typography fontSize="20px" lineHeight="1.5rem" fontWeight={400}>
            {t(
              "From small locally-owned shops to large established multi-location businesses we have the technology to help you grow",
            )}
          </Typography>
        </Grid>
      </Grid>
      <Marquee pauseOnHover={true} gradient={false} direction={"right"} style={styles.Marquee}>
        {brandsData.map((item: any, index) => {
          return (
            <Box key={`${item.id}-${index}`} sx={styles.BrandsMarquee}>
              <ObenanImage src={item.image} alt="Brands Logos" />
            </Box>
          );
        })}
      </Marquee>
      <Marquee pauseOnHover={true} gradient={false}>
        {brandsData.map((item: any, index) => {
          return (
            <Box sx={styles.BrandsMarquee} key={`${item.id}-${index}`}>
              <ObenanImage src={item.image} alt="Brands Logos" />
            </Box>
          );
        })}
      </Marquee>
    </Box>
  );
};

export default Brands;
