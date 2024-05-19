import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_BLOGS_CATEGORIES_DATA, GET_BLOGS_CATEGORIES_SEO, GET_BLOGS_DATA } from "utils/services/queries/learn";
import { Metadata } from "next";
import { convertSeo } from "utils/seo";
const Blog = dynamic(() => import("./templete/blog"));

interface Props {
  params: { id: string; locale: any; slug: any };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getClient().query({
    query: GET_BLOGS_CATEGORIES_SEO,
    variables: {
      filters: {
        slug: {
          containsi: params?.slug,
        },
      },
    },
  });
  const seoData = data?.blogCategories?.data[0]?.attributes.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_BLOGS_CATEGORIES_DATA,
    variables: {
      locale: params.locale,
    },
  });

  const { data: card } = await getClient().query({
    query: GET_BLOGS_DATA,
    variables: {
      locale: params.locale,
      filters: {
        blogs_categories: {
          slug: {
            eq: params.slug,
          },
        },
      },
    },
  });

  return (
    <Blog
      category={data.blogCategories.data}
      blogs={card.blogs}
      paginationCount={card.blogs.meta.pagination.pageCount}
      params={params}
    />
  );
}
