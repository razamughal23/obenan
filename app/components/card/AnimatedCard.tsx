"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ObenanAnimations from "../ObenanImage/animations";
import { GetStarted } from "../buttons/Buttons";

import { styles } from "./styles";

interface Props {
  title: any;
  desc: any;
  bgColor: any;
  color: any;
  flexDirection: any;
  fontSize: any;
  lineHeight: any;
  animationData: any;
  variant: any;
  animationType?: string;
}
const AnimatedCard = ({
  title,
  desc,
  bgColor,
  color,
  flexDirection = "",
  fontSize,
  lineHeight,
  animationData,
  variant,
  animationType= "fade-up",
}: Props) => {
  return (
    <Box sx={{ ...styles.animatedCardBox, backgroundColor: bgColor, color: color }}>
      <Container maxWidth={"xl"}>
        <Grid
          container
          item
          xs={11.5}
          sm={11.5}
          md={10}
          lg={10}
          sx={{
            ...styles.animatedCardGrid,
            flexDirection: { flexDirection },
          }}
        >
          <Grid  data-aos={animationType} item xs={12} sm={12} md={5.5} lg={6.2}>
            <Typography
              variant={variant}
              fontSize={fontSize}
              lineHeight={lineHeight}
              fontWeight={700}
              fontFamily={"var(--poppins)"}
            >
              {title}
            </Typography>
            <Typography
              fontSize={{ xs: "15px", sm: "20px", md: "20px", lg: "20px" }}
              lineHeight={{ xs: "1.7em", sm: "1.3em", md: "1.3em", lg: "26px" }}
              fontWeight={400}
              fontFamily={"var(--poppins)"}
              sx={styles.animatedCardDesc}
            >
              {desc}
            </Typography>
            <GetStarted />
          </Grid>
          <Grid item xs={12} sm={12} md={5.5} lg={5.5} sx={styles.animation}>
            <ObenanAnimations animationData={animationData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AnimatedCard;
