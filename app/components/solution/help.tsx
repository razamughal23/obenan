import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import { GetStarted } from "../buttons/Buttons";
interface Props {
  title: any;
  desc: any;
  card: any;
}
const Help = ({ title, desc, card }: Props) => {
  return (
    <Grid container item xs={11.5} sm={11.5} md={11.5} lg={12} sx={styles.helpMainGrid}>
      <Grid item xs={12} sm={12} md={9} lg={12} sx={styles.MainGrid}>
        <Typography
          fontSize={{ xs: "30px", sm: "60px", md: "60px", lg: "60px" }}
          lineHeight={{ xs: "36px", sm: "72px", md: "72px", lg: "72px" }}
          fontWeight={700}
          variant="h2"
        >
          {title}
        </Typography>
        <Typography
          fontSize={{ xs: "20px", sm: "20px", md: "20px", lg: "20px" }}
          lineHeight={{ xs: "26px", sm: "26px", md: "26px", lg: "26px" }}
          fontWeight={400}
          sx={{ marginTop: "18px" }}
        >
          {desc}
        </Typography>
      </Grid>
      <Grid data-aos="fade-up" container item xs={12} sm={12} md={12} lg={12} gap={5} sx={styles.helpCardGrid}>
        {card?.map((item: any, index: any) => {
          return (
            <Card sx={styles.Card} key={`${item.id}-${index}`}>
              <CardMedia
                sx={styles.CardMedia}
                image={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image.data.attributes.url}`}
              />
              <CardContent>
                <Typography fontSize={"24px"} fontWeight={700} lineHeight={"32px"}>
                  {item.title}
                </Typography>
                <Typography fontSize={"20px"} fontWeight={400} lineHeight={"28px"} sx={{ marginTop: "16px" }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.GridButton}>
          <GetStarted />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Help;
