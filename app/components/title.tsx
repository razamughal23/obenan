import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { styles } from "./styles";
import { useTranslations } from "next-intl";

interface props {
  title: any;
}
const Title = ({ title }: props) => {
  const theme = useTheme();
  const t = useTranslations("header");
  const route = useRouter();
  const HomePageRoute = () => {
    route.push("/");
  };
  return (
    <Box sx={styles.titleMainBox}>
      <Grid container item xs={11.5} sm={11} md={11} lg={10.8} sx={styles.titleMainGrid}>
        <Typography
          sx={{ color: theme.palette.primary.dark, cursor: "pointer" }}
          fontFamily={"var(--work-Sans)"}
          fontSize={"18px"}
          fontWeight={400}
          onClick={HomePageRoute}
        >
          {t("Home")}
        </Typography>
        &nbsp; » &nbsp;
        <Typography fontFamily={"var(--work-Sans)"} fontSize={"18px"} fontWeight={400}>
          {title}
        </Typography>
      </Grid>
    </Box>
  );
};

export default Title;
