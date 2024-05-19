import { MetadataRoute } from "next";
import { getClient } from "utils/services/client";
import { BLOGS_CATAGORIES_SITE_MAP, BLOGS_SITE_MAP } from "utils/services/queries/learn";
import { GET_LANGUAGES } from "utils/services/queries/home";

const routeList = [
  "",
  "/about-us",
  "/ai-powered-auto-review-respond",
  "/ai-powered-sentiment-analysis",
  "/automate-review-task-creation",
  "/automatically-respond-to-your-past-reviews",
  "/backlink-checker",
  "/blogs",
  "/business-solution-agencies",
  "/business-solution-multi-location-business",
  "/contact-us",
  "/datenschutz",
  "/impressum",
  "/keyword-search",
  "/listings-scanner-tool",
  "/local-listings",
  "/local-pages",
  "/partners",
  "/recurring-google-business-posts",
  "/review-widget",
  "/scan-your-website",
  "/tools-review-management",
];
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlList: any = [];
  const { data: languageList } = await getClient().query({
    query: GET_LANGUAGES,
  });
  const languageData = languageList?.i18NLocales?.data || [];
  const { data: blogs } = await getClient().query({
    query: BLOGS_SITE_MAP,
  });
  const { data } = await getClient().query({
    query: BLOGS_CATAGORIES_SITE_MAP,
  });
  languageData?.map((item: any) => {
    routeList.map((route) => {
      urlList.push({
        url: `${process.env.NEXT_PUBLIC_SITE_URL}${
          item.attributes.code == "en" ? "" : `/${item.attributes.code}`
        }${route}/`,
        lastModified: new Date(),
      });
    });
  });
  languageData.map((item: any) => {
    blogs.blogs.data.map((data: any) => {
      if (data.attributes.locale == item.attributes.code) {
        urlList.push({
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${item.attributes.code == "en" ? "" : `/${item.attributes.code}`}/${
            data.attributes.slug
          }/`,
          lastModified: new Date(),
        });
      }
    });
  });

  languageData.map((item: any) => {
    data.blogCategories.data.map((data: any) => {
      if (data.attributes.locale == item.attributes.code) {
        urlList.push({
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${
            item.attributes.code == "en" ? "/category" : `/category/${item.attributes.code}`
          }/${data.attributes.slug}/`,
          lastModified: new Date(),
        });
      }
    });
  });
  return urlList;
}
