import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { Metadata } from "next";
import { GET_BLOGS_DATA, GET_BLOGS_DETAIL_SEO, GET_BLOG_DETAILS_DATA } from "utils/services/queries/learn";
import { convertSeo } from "utils/seo";
const BlogDetails = dynamic(() => import("./templete/blogDetails"));

interface Props {
  params: { id: string; locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getClient().query({
    query: GET_BLOGS_DETAIL_SEO,
    variables: {
      filters: {
        slug: {
          eq: params?.slug,
        },
      },
    },
  });
  const seoData = data?.blogs?.data[0]?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_BLOG_DETAILS_DATA,
    variables: {
      locale: params.locale,
      filters: {
        slug: {
          eq: params?.slug,
        },
      },
    },
  });

  const categoriesSlug = data?.blogs?.data[0]?.attributes?.blogs_categories?.data[0].attributes.slug;
  const { data: popular } = await getClient().query({
    query: GET_BLOGS_DATA,
    variables: {
      locale: params.locale,
      pagination: { pageSize: 6 },
      filters: {
        blogs_categories: {
          slug: {
            eq: categoriesSlug,
          },
        },
      },
    },
  });

  return <BlogDetails blogs={data?.blogs?.data} item="" category={popular.blogs.data} />;
}
