"use client";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { styles } from "../../styles";
const ImageCard = dynamic(() => import("app/components/card/ImageCard"));
const ToolsCard = dynamic(() => import("app/components/tools/toolsCard"));
const Title = dynamic(() => import("app/components/title"));
const BrandsHeading = dynamic(() => import("app/components/tools/brandsHeading"));

interface Props {
  title: any[];
  description: any;
  image: any[];
  data: any;
}
export default function LocalListings(props: Props) {
  return (
    <Box sx={styles.PagesMainBox}>
      <Title title={props.title} />
      {props.title && <BrandsHeading variant="h1" title={props.title} desc={props.description} />}
      {props.data?.map((item: any, index: any) => {
        return (
          <ImageCard
            key={`${item.id}-${index}`}
            title={item.title}
            desc={item.description}
            bgColor={"black"}
            color={"white"}
            flexDirection={(index + 1) % 2 == 0 ? "row-reverse" : "row"}
            fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
            lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
            src={
              item?.image?.data?.attributes?.url
                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image.data.attributes.url}`
                : null
            }
            variant="h2"
          />
        );
      })}
      <ToolsCard />
    </Box>
  );
}
