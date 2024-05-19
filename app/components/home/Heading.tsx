import { Box, Container, Typography, Grid } from "@mui/material";
import { styles } from "./styles";

interface props {
  text: string;
}
const Businesses = (props: props) => {
  return (
    <Box sx={styles.BusinessesMainBox}>
      <Container maxWidth={"lg"}>
        <Grid data-aos="fade-up" container item xs={11.5} sm={11.5} md={10} lg={12} sx={{ margin: "auto" }}>
          <Typography
            fontSize={{ xs: "30px", sm: "60px" }}
            lineHeight={{ xs: "36px", sm: "70px" }}
            fontWeight={700}
            fontFamily={"var(--work-Sans)"}
            variant="h2"
          >
            {props.text}
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Businesses;
