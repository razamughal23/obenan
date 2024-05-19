import { Container, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import React from "react";
interface Props {
  title: any;
  desc: any;
}
const Heading = ({ title, desc }: Props) => {
  if (!title) {
    return <></>;
  }
  return (
    <Container>
      <Grid
        container
        item
        xs={11.5}
        sm={11.5}
        md={11.5}
        lg={11}
        sx={{ ...styles.headingMainGrid, paddingBottom: desc ? "100px" : "50px" }}
      >
        <Typography
          fontSize={{ xs: "30px", sm: "60px", md: "60px", lg: "60px" }}
          lineHeight={{ xs: "36px", sm: "72px", md: "72px", lg: "72px" }}
          fontFamily={"var(--work-Sans)"}
          fontWeight={700}
          variant="h1"
        >
          {title}
        </Typography>
        <Typography
          fontSize={{ xs: "20px", sm: "20px", md: "20px", lg: "20px" }}
          lineHeight={{ xs: "26px", sm: "26px", md: "26px", lg: "26px" }}
          fontFamily={"var(--work-Sans)"}
          fontWeight={400}
          sx={{ marginTop: "20px" }}
        >
          {desc}
        </Typography>
      </Grid>
    </Container>
  );
};

export default Heading;
