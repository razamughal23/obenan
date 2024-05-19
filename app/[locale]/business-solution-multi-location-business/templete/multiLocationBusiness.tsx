"use client";
import dynamic from "next/dynamic";
import { Box, useTheme } from "@mui/material";
import { styles } from "../../styles";
const ImageCard = dynamic(() => import("app/components/card/ImageCard"));
const SolutionCard = dynamic(() => import("app/components/card/SolutionCard"));
const Title = dynamic(() => import("app/components/title"));
const Heading = dynamic(() => import("app/components/heading"));
const AccordionCard = dynamic(() => import("app/components/card/AccordionCard"));
interface Props {
  title: any[];
  description: any;
  image: any[];
  data: any[];
  clients: any[];
  blogs: any[];
  lotties_animation: any;
}
const MultiLocationBusiness = (props: Props) => {
  const theme = useTheme();
  return (
    <Box sx={styles.PagesMainBox}>
      <Title title={props.title} />
      <Heading title={props.title} desc={props.description} />
      {props?.data?.map((item: any, index: any) => {
        const colorIndex = Math.floor(index / 3) % 3;
        if (item?.data.length > 0) {
          return (
            <AccordionCard
              key={`${item.id}-${index}`}
              title={item.title}
              accordionData={item?.data}
              bgColor={colorIndex == 0 ? theme.palette.primary.main : theme.palette.primary.contrastText}
              color={colorIndex == 0 ? theme.palette.primary.contrastText : theme.palette.primary.main}
              textcolor={colorIndex == 0 ? theme.palette.primary.contrastText : theme.palette.primary.main}
              signcolor={colorIndex == 0 ? theme.palette.primary.contrastText : theme.palette.primary.main}
              flexDirection={(index + 1) % 2 == 0 ? "row" : "row-reverse"}
              fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
              lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
              variant="h2"
            />
          );
        } else {
          return (
            <ImageCard
              key={`${item.id}-${index}`}
              title={item.title}
              desc={item.description}
              bgColor={colorIndex == 0 ? "primary.main" : "primary.contrastText"}
              color={colorIndex == 0 ? "primary.contrastText" : "primary.main"}
              flexDirection={(index + 1) % 2 == 0 ? "row" : "row-reverse"}
              fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
              lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
              src={""}
              variant="h2"
            />
          );
        }
      })}
      <SolutionCard />
    </Box>
  );
};

export default MultiLocationBusiness;
