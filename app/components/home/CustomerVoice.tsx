import dynamic from "next/dynamic";
const ObenanVideo = dynamic(() => import("../ObenanImage/video"));
import { Box, Container, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import { useTranslations } from "next-intl";

const CustomerVoice = ({ data }: any) => {
  const t = useTranslations("header");
  return (
    <Box sx={styles.customerVoiceBox}>
      <Container maxWidth={"xl"}>
        <Grid container item xs={11.5} sm={11.5} md={11.5} lg={12} sx={styles.customerVoice}>
          <Typography
            fontSize={{ xs: "40px", sm: "60px", md: "60px", lg: "60px" }}
            lineHeight={{ xs: "1em", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
            fontFamily={"var(--work-Sans)"}
            fontWeight={500}
            sx={styles.videoHeadeing}
            variant="h2"
          >
            {t("Voice of Customers")}
          </Typography>

          <Grid container item xs={12} sm={12} md={12} lg={10} gap={5} sx={styles.videoSectios}>
            {data.map((data: any, index: any) => (
              <Grid item xs={12} sm={5.5} md={3.5} lg={3}  sx={styles.Videos} key={`${data.id}-${index}`}>
                <ObenanVideo
                  src={process.env.NEXT_PUBLIC_BACKEND_URL + data.attributes.media.data.attributes.url}
                  muted
                  loop
                  autoPlay
                />
                <Typography fontSize={"28px"} fontWeight={700} sx={styles.videoTitle}>
                  {data.attributes.name}
                </Typography>
                <Typography fontSize={"14px"} fontWeight={400} sx={styles.videoDesc}>
                  {data.attributes.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerVoice;
