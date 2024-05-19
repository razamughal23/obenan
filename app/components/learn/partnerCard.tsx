import dynamic from "next/dynamic";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { styles } from "../../[locale]/partners/styles";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
const ArrowForwardIcon = dynamic(() => import("@mui/icons-material/ArrowForward"));
const ObenanImage = dynamic(() => import("../ObenanImage"));

interface Props {
  data: any[];
}
const PartnerCard = ({ data }: Props) => {
  const t = useTranslations("header");
  const route = useRouter();
  return (
    <>
      <Grid item xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={{ marginTop: "160px" }}>
        <Typography
          fontSize={{ xs: "30px", sm: "60px", md: "60px", lg: "60px" }}
          lineHeight={{ xs: "36px", sm: "72px", md: "72px", lg: "72px" }}
          fontWeight={700}
          variant="h2"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {t("Technology Partners")}
        </Typography>
        <Grid container item xs={12} sm={12} md={12} lg={12} gap={2} sx={styles.CardGrid}>
          {data?.map((item: any, index) => {
            if (item?.attributes?.type == "Technology") {
              return (
                <Grid
                  item
                  xs={12}
                  sm={5.5}
                  md={5.5}
                  lg={5}
                  xl={3.5}
                  sx={styles.CardMainGrid}
                  key={`${item.id}-${index}`}
                >
                  <Card sx={styles.Card}>
                    <CardContent>
                      <Box sx={{ height: 40, width: 166 }}>
                        <ObenanImage
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.attributes.image?.data.attributes.url}`}
                          alt="Technology logo"
                        />
                      </Box>
                      <Typography fontSize={"14px"} lineHeight={"20px"} fontWeight={400} sx={styles.cardtext}>
                        {item.attributes.description}
                      </Typography>
                      <Typography fontSize={"14px"} lineHeight={"20px"} fontWeight={700} sx={styles.desctext}>
                        {t("Visit Site")}{" "}
                        <ArrowForwardIcon
                          sx={{ marginLeft: "8.5px", cursor: "pointer" }}
                          onClick={() => {
                            route.push(item.attributes.link);
                          }}
                        />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
      </Grid>
      <Grid item xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={{ marginTop: "160px", marginBottom: "80px" }}>
        <Typography
          fontSize={{ xs: "30px", sm: "60px", md: "60px", lg: "60px" }}
          lineHeight={{ xs: "36px", sm: "72px", md: "72px", lg: "72px" }}
          fontWeight={700}
          variant="h2"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {t("Partner Companies")}
        </Typography>
        <Grid container item xs={12} sm={12} md={12} lg={12} gap={2} sx={styles.CardGrid}>
          {data?.map((item: any, index) => {
            if (item.attributes.type == "companies") {
              return (
                <Grid
                  item
                  xs={12}
                  sm={5.5}
                  md={5.5}
                  lg={5}
                  xl={3.5}
                  sx={styles.CardMainGrid}
                  key={`${item.id}-${index}`}
                >
                  <Card sx={styles.Card}>
                    <CardContent>
                      <Box sx={{ height: 40, width: 166 }}>
                        <ObenanImage
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.attributes.image?.data.attributes.url}`}
                          alt="Company logo"
                        />
                      </Box>
                      <Typography fontSize={"14px"} lineHeight={"20px"} fontWeight={400} sx={styles.cardtext}>
                        {item.attributes.description}
                      </Typography>
                      <Typography fontSize={"14px"} lineHeight={"20px"} fontWeight={700} sx={styles.desctext}>
                        {t("Visit Site")}{" "}
                        <ArrowForwardIcon
                          sx={{ marginLeft: "8.5px", cursor: "pointer" }}
                          onClick={() => {
                            route.push(item.attributes.link);
                          }}
                        />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default PartnerCard;
