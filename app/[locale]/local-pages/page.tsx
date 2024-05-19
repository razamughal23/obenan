import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_LOCAL_PAGE_DATA, GET_LOCAL_PAGE_SEO } from "utils/services/queries/tools";
const LocalPages = dynamic(() => import("./templete/localPages"));
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_LOCAL_PAGE_SEO,
  });
  const seoData = data.localPage?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_LOCAL_PAGE_DATA,
    variables: { locale: params.locale },
  });

  return <LocalPages {...data?.localPage?.data?.attributes} />;
}
