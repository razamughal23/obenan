"use client";
import dynamic from "next/dynamic";
import { Box, useTheme } from "@mui/material";
const HomeCard = dynamic(() => import("app/components/card/AnimatedCard"));
const Heading = dynamic(() => import("app/components/home/Heading"));
const Brands = dynamic(() => import("app/components/home/BrandsList"));
const Contribution = dynamic(() => import("app/components/home/Footer"));
const CustomerVoice = dynamic(() => import("app/components/home/CustomerVoice"));
const OurBlogs = dynamic(() => import("app/components/home/OurBlogs"));
import { styles } from "../styles";

interface Props {
  title: any;
  short_description: any;
  long_description: any;
  lotties_animation: any;
  data: any[];
  clients: any[];
  blogs: any[];
  contributions: any;
}
export default function Home(props: Props) {
  const theme = useTheme();

  return (
    <div>
      <Box sx={styles.HomePageMainBox}>
        {props?.title && (
          <HomeCard
            title={props.title}
            desc={props.short_description}
            bgColor={theme.palette.primary.main}
            color={theme.palette.primary.contrastText}
            flexDirection=""
            fontSize={{ xs: "30px", sm: "60px", md: "60px", lg: "60px" }}
            lineHeight={{ xs: "36px", sm: "72px", md: "72px", lg: "72px" }}
            animationData={props.lotties_animation}
            variant="h1"
          />
        )}
        {props?.long_description && <Heading text={props.long_description} />}
        {props?.data?.map((item: any, index: any) => {
          const colorIndex = Math.floor(index / 2) % 2;
          return (
            <HomeCard
              key={`${item.id}-${index}`}
              title={item.title}
              desc={item.description}
              bgColor={colorIndex == 0 ? theme.palette.primary.main : theme.palette.primary.contrastText}
              color={colorIndex == 0 ? theme.palette.primary.contrastText : theme.palette.primary.main}
              flexDirection={(index + 1) % 2 == 0 ? "row" : "row-reverse"}
              fontSize={{ xs: "30px", sm: "48px", md: "48px", lg: "48px" }}
              lineHeight={{ xs: "36px", sm: "1.2em", md: "1.2em", lg: "1.2em" }}
              animationData={item.lotties_animation}
              variant="h2"
            />
          );
        })}

        {props.clients?.length > 0 && <CustomerVoice data={props.clients} />}
        <Brands />
        {props.blogs?.length > 0 && <OurBlogs data={props.blogs} />}
        {props?.contributions?.footerDescription && (
          <Contribution
            footerTitle={props?.contributions?.footerTitle}
            footerDescription={props.contributions?.footerDescription}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${props?.contributions?.footerMedia?.data?.attributes?.url}`}
          />
        )}
      </Box>
    </div>
  );
}
