import dynamic from "next/dynamic";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { styles } from "./styles";
import { CardTitleData } from "../../../jsondata/Data";
import { useTranslations } from "next-intl";
const Card = dynamic(() => import("./card"));

const ToolsCard = () => {
  const theme = useTheme();
  const t = useTranslations("header");
  return (
    <Box
      sx={{
        color: theme.palette.primary.contrastText,
      }}
    >
      <Grid container item xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={styles.toolCardGrid}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginBottom: "56px" }}>
          <Typography
            fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
            lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
            fontWeight={700}
            variant="h2"
          >
            {t("Check Related Tools")}
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={8} sx={styles.Grid}>
          {CardTitleData.map((titledata: any, index) => {
            return (
              <Grid item xs={12} sm={5.8} md={2.9} lg={2.9} key={`${titledata.id}-${index}`}>
                <Card title={t(titledata.title)} image={titledata.img} pathname={titledata.link} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ToolsCard;
