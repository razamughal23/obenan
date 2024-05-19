"use client";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { styles } from "../../styles";
import LocalPage from "../../../../public/local-page.png";
const ToolsCard = dynamic(() => import("app/components/tools/toolsCard"));
const Title = dynamic(() => import("app/components/title"));
const BrandsHeading = dynamic(() => import("app/components/tools/brandsHeading"));

const ScanYourLocation = () => {
  const t = useTranslations("header");
  return (
    <Box sx={styles.PagesMainBox}>
      <Title title={t("Scan your location")} />
      <BrandsHeading
        variant="h1"
        title="Scan to see how your business appears online "
        desc="Is your company listed accurately in these online directories?"
        src={LocalPage}
      />
      <ToolsCard />
    </Box>
  );
};

export default ScanYourLocation;
