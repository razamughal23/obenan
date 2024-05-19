import dynamic from "next/dynamic";
import { Box, Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import { styles } from "./styles";
import { useTranslations } from "next-intl";
import moment from "moment";
const ObenanImage = dynamic(() => import("app/components/ObenanImage"));
const Link = dynamic(() => import("app/components/ObenanLink"));

interface Props {
  blogs: any;
}

const Blogs = ({ blogs }: Props) => {
  const t = useTranslations("header");
  const theme = useTheme();
  if (blogs?.data?.length == 0) {
    return (
      <Box sx={styles.noData}>
        <Typography fontSize={"34px"} fontWeight={"bold"}>
          {t("No Data Found")}
        </Typography>
      </Box>
    );
  }
  return blogs?.data?.map((item: any, index: any) => {
    return (
      <Grid item xs={12} sm={5.9} md={5.9} lg={5.9} key={`${item.id}-${index}`}>
        <Link
          href={`/${item?.attributes?.slug}`}
          style={{
            textDecoration: "none",
            color: theme.palette.primary.contrastText,
          }}
        >
          <Card sx={styles.blogsCarddesign}>
            <CardContent>
              {item?.attributes?.image?.data?.attributes?.url ? (
                <Box sx={{ width: "100%", height: 200 }}>
                  <ObenanImage
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.attributes?.image?.data?.attributes?.url}`}
                    alt="Blog card Images"
                    style={{ borderRadius: "15px" }}
                  />
                </Box>
              ) : (
                ""
              )}
              <Typography fontSize={"24px"} fontWeight={700} lineHeight={"32px"} sx={{ marginTop: "8px" }} variant="h2">
                {item?.attributes?.title}
              </Typography>
              <Typography fontSize={"14px"} fontWeight={400} lineHeight={"18px"} sx={styles.blogCardTypo}>
                {moment(item?.attributes?.publisher_date).format("DD-MM-YYYY")} |
                <Box sx={{ display: "flex", paddingLeft: "5px" }}>
                  {item?.attributes?.blogs_categories?.data.map((tag: any, index: any) => {
                    return (
                      <>
                        <Typography
                          fontSize={"14px"}
                          fontWeight={400}
                          lineHeight={"18px"}
                          whiteSpace={"nowrap"}
                          key={`${item.id}-${index}`}
                        >
                          {`${tag.attributes.title}`}
                          {index == item?.attributes?.blogs_categories?.data.length - 1 ? "" : ","}
                        </Typography>
                      </>
                    );
                  })}
                </Box>
              </Typography>
              <Typography fontSize={"20px"} fontWeight={400} lineHeight={"28px"} sx={{ marginTop: "10px" }}>
                {item?.attributes?.description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  });
};

export default Blogs;
