"use client";
import dynamic from "next/dynamic";
import { styles } from "../../styles";
const ImageCard = dynamic(() => import("app/components/card/ImageCard"));
const SolutionCard = dynamic(() => import("app/components/card/SolutionCard"));
const Title = dynamic(() => import("app/components/title"));
const Box = dynamic(() => import("@mui/material/Box"));
const Heading = dynamic(() => import("app/components/heading"));

interface Props {
  title: any[];
  description: any;
  image: any[];
  data: any;
  clients: any[];
  blogs: any[];
  lotties_animation: any;
}
const SingleLocationBusiness = (props: Props) => {
  return (
    <Box sx={styles.PagesMainBox}>
      <Title title={props.title} />
      <Heading title={props.title} desc="" />
      {props?.data?.map((item: any, index: any) => {
        const colorIndex = Math.floor(index / 3) % 3;
        return (
          <ImageCard
            key={`${item.id}-${index}`}
            title={item.title}
            desc={item.description}
            bgColor={colorIndex == 0 ? "black" : "white"}
            color={colorIndex == 0 ? "white" : "black"}
            flexDirection={(index + 1) % 2 == 0 ? "row" : "row-reverse"}
            fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
            lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
            src={""}
            variant="h2"
          />
        );
      })}
      <SolutionCard />
    </Box>
  );
};

export default SingleLocationBusiness;
