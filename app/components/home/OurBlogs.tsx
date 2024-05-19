import dynamic from "next/dynamic";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { styles } from "./styles";
import moment from "moment";
import { useTranslations } from "next-intl";
const Link = dynamic(() => import("app/components/ObenanLink"));

const OurBlogs = ({ data }: any) => {
  const theme = useTheme();
  const t = useTranslations("header");
  const formattedDate = moment(data.attributes?.publisher_date).format("DD-MM-YYYY");
  return (
    <Box sx={styles.blogMainBox}>
      <Container maxWidth={"xl"}>
        <Grid container item xs={11} sm={11.5} md={10.5} lg={11.2} sx={styles.blogHeading}>
          <Typography fontSize={"48px"} fontWeight={"600"} lineHeight={"58px"} variant="h2">
            {t("Latest from our blog")}
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.blogTitle}>
          {data.slice(0, 3).map((data: any, index: any) => {
            return (
              <Grid item xs={11} sm={11.5} md={2.5} lg={3.2} sx={{ cursor: "pointer" }} key={`${data.id}-${index}`}>
                <Link
                  href={`/${data?.attributes?.slug}`}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  <Typography fontSize={"24px"} fontWeight={"600"} lineHeight={"30px"} variant="h3">
                    {data.attributes.title}
                  </Typography>
                  <Typography fontSize={"14px"} fontWeight={"400"} lineHeight={"24px"} marginTop={"5px"}>
                    {formattedDate} | {data.attributes.keywords}
                  </Typography>
                  <Typography fontSize={"20px"} fontWeight={"400"} lineHeight={"25px"} marginTop={"5px"}>
                    {data.attributes.description}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurBlogs;
