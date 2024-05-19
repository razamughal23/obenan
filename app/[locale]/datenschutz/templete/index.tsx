"use client";
import dynamic from "next/dynamic";
import { Grid, Typography, Box, Container } from "@mui/material";
import { styles } from "../styles";
const Title = dynamic(() => import("app/components/title"));
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
interface Props {
  data: any;
}
const Datenschutz = (props: Props) => {
  return (
    <Box sx={styles.MainBox}>
      <Title title={"Datenschutz"} />
      <Container maxWidth={"lg"}>
        <Grid container item xs={11.5} sm={11.5} md={11.5} lg={12} sx={styles.MainGrid}>
          <ReactMarkdown
            children={props?.data?.attributes?.description}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <Typography fontSize={40} fontWeight={"bold"} {...props} />,
              h2: ({ node, ...props }) => <Typography fontSize={32} fontWeight={"bold"} {...props} />,
              h3: ({ node, ...props }) => <Typography fontSize={30} fontWeight={"bold"} {...props} />,
              h4: ({ node, ...props }) => <Typography fontSize={28} fontWeight={"bold"} {...props} />,
              h5: ({ node, ...props }) => <Typography fontSize={26} fontWeight={"bold"} {...props} />,
              h6: ({ node, ...props }) => <Typography fontSize={24} fontWeight={"bold"} {...props} />,
              p: ({ node, ...props }) => (
                <Typography fontSize={16} fontWeight={"400"} sx={{ opacity: ".8" }} {...props} />
              ),
            }}
            className="markdown"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Datenschutz;
