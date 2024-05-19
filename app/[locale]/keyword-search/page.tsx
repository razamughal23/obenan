import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_KEYWORD_SEARCH_DATA, GET_KEYWORD_SEARCH_SEO } from "utils/services/queries/tools";
const KeywordSearch = dynamic(() => import("./templete/keywordSearch"));
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_KEYWORD_SEARCH_SEO });
  const seoData = data.keywordSearch.data.attributes.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({ query: GET_KEYWORD_SEARCH_DATA, variables: { locale: params.locale } });

  return <KeywordSearch {...data?.keywordSearch?.data?.attributes} />;
}
