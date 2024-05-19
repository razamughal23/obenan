import { SolutionCardData } from "../../../jsondata/Data";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const SolutionCard = () => {
  const route = useRouter();
  const t = useTranslations("header");
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      {SolutionCardData.map((item: any, index) => {
        return (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            key={`${item.id}-${index}`}
            onClick={() => {
              route.push(item.link);
            }}
          >
            <Card sx={styles.Card}>
              <CardMedia sx={styles.CardMedia} image={item.image}>
                <CardContent>
                  <Typography fontSize={"20px"} lineHeight={"28px"} fontWeight={700} fontFamily={"var(--work-Sans)"}>
                    {t(item.title)}
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SolutionCard;
