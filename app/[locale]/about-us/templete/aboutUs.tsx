"use client";
import dynamic from "next/dynamic";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styles } from "../styles";
import { useTranslations } from "next-intl";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
const ObenanImage = dynamic(() => import("app/components/ObenanImage"));
const Title = dynamic(() => import("app/components/title"));
const Heading = dynamic(() => import("app/components/heading"));

interface Props {
  title: any[];
  description: any;
  image: any[];
  data: any;
  clients: any[];
  blogs: any[];
  src: any;
}
const AboutUs = (props: Props) => {
  const t = useTranslations("header");
  return (
    <Box sx={styles.AboutPageBox}>
      <Title title={t("About Us")} />
      <Container maxWidth={"lg"}>
        <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}>
          <Heading title={props.title} desc={""} />
          {props?.data?.map((item: any, index: any) => {
            return (
              <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.aboutFooter} key={`${item.id}-${index}`}>
                <ReactMarkdown
                  children={props.description}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => <Typography fontSize={40} fontWeight={"bold"} {...props} />,
                    h2: ({ node, ...props }) => <Typography fontSize={32} fontWeight={"bold"} {...props} />,
                    h3: ({ node, ...props }) => <Typography fontSize={30} fontWeight={"bold"} {...props} />,
                    h4: ({ node, ...props }) => <Typography fontSize={28} fontWeight={"bold"} {...props} />,
                    h5: ({ node, ...props }) => <Typography fontSize={26} fontWeight={"bold"} {...props} />,
                    h6: ({ node, ...props }) => <Typography fontSize={24} fontWeight={"bold"} {...props} />,
                    p: ({ node, ...props }) => <Typography fontSize={20} fontWeight={"400"} {...props} />,
                  }}
                  className="markdown"
                />
                <Grid item xs={12} sm={12} md={6} lg={5} sx={styles.Text} key={`${item.id}-${index}`}>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={400}
                    lineHeight={"28px"}
                    sx={{ marginTop: "40px", textAlign: "left" }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} sx={styles.Image}>
                  {item.image.data?.attributes.url ? (
                    <Box sx={styles.ImageSize}>
                      <ObenanImage
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image.data?.attributes.url}`}
                        alt={"about data Image"}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
