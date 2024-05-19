"use client";
import dynamic from "next/dynamic";
import { Box, Container, Grid, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { styles } from "../styles";
import blogdetailimg from "../../../../public/blogdetailimg.png";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const SearchIcon = dynamic(() => import("@mui/icons-material/Search"));
const ObenanImage = dynamic(() => import("app/components/ObenanImage"));
const Link = dynamic(() => import("app/components/ObenanLink"));

interface Props {
  blogs: any[];
  item: any;
  category: any;
}
const BlogDetails = ({ blogs, item, category }: Props) => {
  const theme = useTheme();
  const formattedDate = moment(item?.attributes?.publisher_date).format("DD-MM-YYYY");
  const [searchString, setSearchString] = useState("");
  const papularBlogs = category?.filter((item: any) =>
    item?.attributes?.title?.toLowerCase().includes(searchString.toLowerCase().trim()),
  );
  const onSearch = (event: any) => {
    setSearchString(event.target.value);
  };
  return (
    <Box sx={styles.BlogDetailsMainBox}>
      <Box sx={styles.MainBox}>
        <ObenanImage
          src={blogdetailimg}
          alt="blogdetailimg.png"
          quality={100}
          priority
        />
      </Box>
      <Container maxWidth={"xl"}>
        <Box sx={styles.detailBox}>
          <Grid container item xs={11.5} sm={11.5} md={11.5} lg={10} sx={styles.BlogDetailsMainGrid}>
            {blogs?.map((item: any, index: any) => {
              return (
                <Box key={`${item.id}-${index}`}>
                  <Typography
                    fontSize={{ xs: "24px", sm: "48px", md: "48px", lg: "60px" }}
                    lineHeight={{ xs: "34px", sm: "58px", md: "58px", lg: "72px" }}
                    fontWeight={700}
                  >
                    {item.attributes.title}
                  </Typography>
                  <Box sx={styles.subTitles}>
                    <Typography
                      fontSize={{ xs: "12px", sm: "18px", md: "16px", lg: "16px" }}
                      sx={{ paddingRight: "30px" }}
                    >
                      {formattedDate}
                    </Typography>
                    <Typography
                      fontSize={{ xs: "12px", sm: "18px", md: "16px", lg: "16px" }}
                      sx={{ paddingRight: "30px" }}
                    >
                      {item.attributes.keywords}
                    </Typography>
                  </Box>
                  <Grid container item xs={12} sm={12} md={12} lg={12} gap={1} sx={styles.desc}>
                    <Grid item xs={12} sm={12} md={8.8} lg={8.8}>
                      <ReactMarkdown
                        children={item.attributes.detail}
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({ node, ...props }) => <Typography fontSize={34} fontWeight={"bold"} {...props} />,
                          h2: ({ node, ...props }) => <Typography fontSize={32} fontWeight={"bold"} {...props} />,
                          h3: ({ node, ...props }) => <Typography fontSize={30} fontWeight={"bold"} {...props} />,
                          h4: ({ node, ...props }) => <Typography fontSize={28} fontWeight={"bold"} {...props} />,
                          h5: ({ node, ...props }) => <Typography fontSize={26} fontWeight={"bold"} {...props} />,
                          h6: ({ node, ...props }) => <Typography fontSize={24} fontWeight={"bold"} {...props} />,
                          p: ({ node, ...props }) => <Typography fontSize={18} fontWeight={"400"} {...props} />,
                          img: ({ node, ...props }) => (
                            <img
                              {...props}
                              style={{ width: "100%", height: "100%", objectFit: "contain" }}
                              {...props}
                            />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
                      <TextField
                        sx={styles.textField}
                        placeholder="Search"
                        onChange={onSearch}
                        InputProps={{
                          sx: {
                            color: theme.palette.primary.contrastText,
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon sx={{ color: theme.palette.primary.contrastText }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {papularBlogs.map((item: any, index: any) => {
                        return (
                          <Link
                            key={`${item.id}-${index}`}
                            href={`/${item?.attributes?.slug}`}
                            style={{
                              textDecoration: "none",
                              color: theme.palette.primary.contrastText,
                            }}
                          >
                            <Typography
                              fontSize={"14px"}
                              lineHeight={"26px"}
                              fontWeight={700}
                              sx={styles.BlogDetailssubtitles}
                            >
                              {item.attributes.title}
                            </Typography>
                            <Typography
                              fontSize={"16px"}
                              lineHeight={"20px"}
                              fontWeight={400}
                              sx={styles.BlogDetailssubdesc}
                            >
                              {item.attributes.description}
                            </Typography>
                          </Link>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogDetails;
