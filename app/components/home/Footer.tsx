import dynamic from "next/dynamic";
const ObenanImage = dynamic(() => import("../ObenanImage/index"));
import { Box, Container, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import { LearnMore } from "../buttons/Buttons";

interface Props {
  footerTitle: any;
  footerDescription: any;
  src: any;
}
const Contribution = ({ footerTitle, footerDescription, src }: Props) => {
  return (
    <Box sx={styles.contributionMainBox}>
      <Container maxWidth={"xl"}>
        <Grid container item xs={11} sm={11} md={11} lg={12} sx={{ margin: "auto" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.contributionTitle}>
            <Box sx={{ height: 100, width: 100 }}>
              <ObenanImage src={src} alt={"Contribution Logo"} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.contributionTitle}>
            <Typography
              fontSize={{ xs: "3rem", lg: "60px" }}
              lineHeight={{ xs: "40px", lg: "70px" }}
              fontWeight={700}
              variant="h2"
            >
              {footerTitle}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={10} sx={styles.contributionDesc}>
            <Typography fontSize={"20px"} fontWeight={400} lineHeight={"28px"}>
              {footerDescription}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.contributionButton}>
            <LearnMore />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contribution;
