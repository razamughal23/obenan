"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Box, Grid, ListItem, TextField, Typography, useTheme } from "@mui/material";
import { styles } from "./styles";
import { useTranslations } from "next-intl";
import { GET_BLOGS_DATA } from "utils/services/queries/learn";
import { useQuery } from "@apollo/client";
const InputAdornment = dynamic(() => import("@mui/material/InputAdornment"));
const SearchIcon = dynamic(() => import("@mui/icons-material/Search"));
const Blogs = dynamic(() => import("app/components/blog/Blogs"));
const Title = dynamic(() => import("app/components/title"));
const Link = dynamic(() => import("app/components/ObenanLink"));
const KeyboardDoubleArrowRightIcon = dynamic(() => import("@mui/icons-material/KeyboardDoubleArrowRight"));
const KeyboardDoubleArrowLeftIcon = dynamic(() => import("@mui/icons-material/KeyboardDoubleArrowLeft"));

interface Props {
  blogs: any[];
  category: any;
  paginationCount: number;
  params: any;
}
const Blog = (props: Props) => {
  const theme = useTheme();
  const t = useTranslations("header");
  const { paginationCount } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchString, setSearchString] = useState("");
  const blogsCategories = props?.category?.filter((item: any) =>
    item?.attributes?.title?.toLowerCase().includes(searchString.toLowerCase().trim()),
  );
  const { data, loading } = useQuery(GET_BLOGS_DATA, {
    variables: {
      locale: props.params.locale,
      pagination: {
        page: currentPage,
        pageSize: 6,
      },
      ...(props.params.slug && {
        filters: {
          blogs_categories: {
            slug: {
              containsi: props.params.slug,
            },
          },
        },
      }),
    },
  });
  const onSearch = (event: any) => {
    setSearchString(event.target.value);
  };
  const nextBlog = () => {
    setCurrentPage(currentPage + 1);
    BackToTop();
  };
  const prevBlog = () => {
    setCurrentPage(currentPage - 1);
    BackToTop();
  };
  const BackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box sx={styles.MainBox}>
      <Title title={t("Blogs")} />
      <Grid container item xs={11.5} sm={11.5} md={11.5} lg={12} sx={styles.MainGrid}>
        <Typography
          fontSize={{ xs: "30px", sm: "48px", md: "60px", lg: "60px" }}
          lineHeight={{ xs: "36px", sm: "55px", md: "55px", lg: "72px" }}
          fontWeight={700}
          variant="h1"
        >
          {t("Blogs")}
        </Typography>
        <Grid container item xs={12} sm={12} md={12} lg={12} gap={5} sx={styles.GridData}>
          {props?.category?.length > 1 && (
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <TextField
                sx={styles.blogsSearch}
                onChange={onSearch}
                value={searchString}
                placeholder="Search"
                InputProps={{
                  sx: {
                    color: theme.palette.primary.contrastText,
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={styles.Search} />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography fontSize={"15px"} fontWeight={"bold"} sx={styles.blogHeading}>
                {t("Blogs Category")}
              </Typography>
              {blogsCategories.length > 1 && (
                <ListItem sx={styles.listItem}>
                  <Box
                    sx={{
                      ...styles.CategoryBox,
                      backgroundColor: props.params.slug ? theme.palette.primary.main : theme.palette.primary.dark,
                    }}
                  >
                    <Link
                      href={`/blogs`}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.contrastText,
                      }}
                    >
                      <Typography sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }}>
                        {t("All Categories")}
                      </Typography>
                    </Link>
                  </Box>
                </ListItem>
              )}
              {blogsCategories?.map((item: any, index: any) => {
                return (
                  <ListItem key={`${item.id}-${index}`} sx={styles.listItem}>
                    <Box
                      sx={{
                        ...styles.CategoryBox,
                        backgroundColor:
                          props.params.slug == item?.attributes?.slug
                            ? theme.palette.primary.dark
                            : theme.palette.primary.main,
                      }}
                    >
                      <Link
                        href={`/category/${item?.attributes?.slug}`}
                        style={{
                          textDecoration: "none",
                          color: theme.palette.primary.contrastText,
                        }}
                      >
                        <Typography fontSize={"16px"} fontWeight={400} lineHeight={"24px"}>
                          {item.attributes.title}
                        </Typography>
                      </Link>
                    </Box>
                  </ListItem>
                );
              })}
            </Grid>
          )}

          <Grid item xs={12} sm={12} md={7.5} lg={7} columnGap={1} sx={styles.blogCards}>
            {!loading && <Blogs blogs={data?.blogs} />}
            {!loading && (
              <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.paginationBox}>
                {paginationCount > 1 && currentPage != 1 ? (
                  <Box sx={styles.PaginationStyle} onClick={() => prevBlog()}>
                    <KeyboardDoubleArrowLeftIcon />
                    <Typography>{t("Older Entries")}</Typography>
                  </Box>
                ) : (
                  <Box sx={styles.PaginationStyle} />
                )}
                <Box sx={styles.PaginationStyle} onClick={() => nextBlog()}>
                  {paginationCount > 1 && currentPage != paginationCount ? (
                    <>
                      <Typography>{t("New Entries")}</Typography>
                      <KeyboardDoubleArrowRightIcon />
                    </>
                  ) : (
                    <></>
                  )}
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Blog;
