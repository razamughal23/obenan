"use client";
import dynamic from "next/dynamic";
import { styles } from "../../styles";
import { Box, useTheme } from "@mui/material";
const Title = dynamic(() => import("app/components/title"));
const ImageCard = dynamic(() => import("app/components/card/ImageCard"));
const Heading = dynamic(() => import("app/components/heading"));
const SolutionCard = dynamic(() => import("app/components/card/SolutionCard"));
const Help = dynamic(() => import("app/components/solution/help"));

interface Props {
  title: any[];
  description: any;
  image: any[];
  data: any[];
  heading: any;
  header: any;
}
const BusinessAgencies = (props: Props) => {
  const theme = useTheme();
  return (
    <Box sx={styles.PagesMainBox}>
      <Title title={props.title} />
      <Heading title={props.title} desc="" />
      <ImageCard
        title={props.header.title}
        desc={props.header.description}
        bgColor={theme.palette.primary.main}
        color={theme.palette.primary.contrastText}
        flexDirection=""
        fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
        lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
        src={""}
        variant="h2"
      />
      <Help title={props.heading} desc={props.description} card={props.data} />
      <SolutionCard />
    </Box>
  );
};

export default BusinessAgencies;
