import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";

import ObenanImage from "../ObenanImage/index";
import { GetStarted } from "../buttons/Buttons";
interface Props {
  title: any;
  desc: any;
  bgColor: any;
  color: any;
  flexDirection: any;
  fontSize: any;
  lineHeight: any;
  src: any;
  variant: any;
}
const ImageCard = ({ title, desc, bgColor, color, flexDirection = "", fontSize, lineHeight, src }: Props) => {
  return (
    <Box sx={{ ...styles.MainBox, backgroundColor: bgColor, color: color }}>
      <Container maxWidth={"xl"}>
        <Grid
          container
          item
          xs={11.5}
          sm={11.5}
          md={10}
          lg={9}
          sx={{ ...styles.imageMainGrid, flexDirection: { flexDirection } }}
        >
          <Grid data-aos="fade-up" item xs={12} sm={12} md={5.5} lg={6}>
            <Typography
              fontSize={fontSize}
              lineHeight={lineHeight}
              fontWeight={700}
              fontFamily={"var(--work-Sans)"}
              variant="h2"
            >
              {title}
            </Typography>
            <Typography
              fontSize={{ xs: "15px", sm: "20px", md: "20px", lg: "20px" }}
              lineHeight={{ xs: "1.7em", sm: "1.3em", md: "1.3em", lg: "28px" }}
              fontWeight={400}
              fontFamily={"var(--poppins)"}
              sx={styles.ImageCardTypo}
            >
              {desc}
            </Typography>
            <GetStarted />
          </Grid>
          {src ? (
            <Grid item xs={12} sm={12} md={5.5} lg={6} sx={styles.ImageData}>
              <Box sx={styles.ImageBox}>
                <ObenanImage src={src} alt="Tools Page Images" style={{ objectFit: "contain" }} />
              </Box>
            </Grid>
          ) : (
            <Grid item xs={12} sm={12} md={5.5} lg={6} sx={{ display: { xs: "none", md: "block" } }}>
              <Box sx={styles.ImageBox}></Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImageCard;
