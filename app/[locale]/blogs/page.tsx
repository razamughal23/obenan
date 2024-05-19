import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_BLOGS_CATEGORIES_DATA, GET_BLOGS_DATA } from "utils/services/queries/learn";
const Blog = dynamic(() => import("./templete/blog"));

export async function generateMetadata() {
  return {
    title: "Blog - OBENAN Quantum Marketing Solutions",
    description: "Insights and Inspiration: Explore the OBENAN Blog for Expert Perspectives and Valuable Resources",
    publisher: "https://obenan.com/",
    keywords: "Blogs",
    robots: "index, follow, max-image-preview:large",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    alternates: {
      canonical: "https://obenan.com/blogs/",
    },
    openGraph: {
      type: "website",
      title: "Blog - OBENAN Quantum Marketing Solutions",
      description: "Insights and Inspiration: Explore the OBENAN Blog for Expert Perspectives and Valuable Resources",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
      description: "Insights and Inspiration: Explore the OBENAN Blog for Expert Perspectives and Valuable Resources",
      title: "Blog - OBENAN Quantum Marketing Solutions",
      domain: "https://obenan.com/",
    },
  };
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
      pagination: {
        page: 1,
        pageSize: 6,
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
