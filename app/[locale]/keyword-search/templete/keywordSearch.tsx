"use client";
import dynamic from "next/dynamic";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "../styles";
import { useTranslations } from "next-intl";
const ToolsCard = dynamic(() => import("app/components/tools/toolsCard"));
const Title = dynamic(() => import("app/components/title"));
const KeywordCard = dynamic(() => import("app/components/tools/keywordCard"));
const BrandsHeading = dynamic(() => import("app/components/tools/brandsHeading"));

interface Props {
  title: any[];
  description: any;
  image: any[];
  data: any;
  clients: any[];
  blogs: any[];
}
const KeywordSearch = (props: Props) => {
  const t = useTranslations("header");
  return (
    <Box sx={styles.MainBox}>
      <Title title={props.title} />
      <BrandsHeading variant="h1" title={props.title} desc={props.description} src={""} />
      <Grid container item xs={11} sm={11} md={11} lg={11} sx={styles.MainGrid}>
        <Grid item xs={12} sm={12} md={10} lg={12}>
          <Typography
            fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
            lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
            fontWeight={700}
            variant="h1"
          >
            {t("Explore the keyword search features")}
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={8} gap={5} sx={styles.KeywordcardGrid}>
          {props.data.map((item: any, index: any) => {
            return (
              <Grid item xs={12} sm={12} md={5.5} lg={5.5} sx={styles.KeywordCard} key={`${item.id}-${index}`}>
                <KeywordCard
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image.data.attributes.url}`}
                  title={item.title}
                  desc={item.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <ToolsCard />
    </Box>
  );
};

export default KeywordSearch;
