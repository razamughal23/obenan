"use client";
import dynamic from "next/dynamic";
import { Box, useTheme } from "@mui/material";
import { styles } from "../../styles";
import BrandsHeading from "../../../components/tools/brandsHeading";
const ImageCard = dynamic(() => import("app/components/card/ImageCard"));
const ToolsCard = dynamic(() => import("app/components/tools/toolsCard"));
const Title = dynamic(() => import("app/components/title"));
interface Props {
  title: any[];
  description: any;
  image: any[];
  data: any;
  clients: any[];
  blogs: any[];
}
const AIPoweredRespond = (props: Props) => {
  const theme = useTheme();
  return (
    <Box sx={styles.PagesMainBox}>
      <Title title={props.title} />
      <BrandsHeading variant="h1" title={props.title} desc={props.description} src={""} />
      {props?.data?.map((item: any, index: any) => {
        return (
          <ImageCard
            key={`${item.id}-${index}`}
            title={item.title}
            desc={item.description}
            bgColor={theme.palette.primary.main}
            color={theme.palette.primary.contrastText}
            flexDirection={(index + 1) % 2 == 0 ? "row" : "row-reverse"}
            fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
            lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
            src={""}
            variant="h2"
          />
        );
      })}
      <ToolsCard />
    </Box>
  );
};

export default AIPoweredRespond;