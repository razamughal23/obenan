import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_SENTIMENT_ANALYSIS_DATA, GET_SENTIMENT_ANALYSIS_SEO } from "utils/services/queries/tools";
const EmotionAnalysis = dynamic(() => import("./templete/emotionAnalysis"));
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_SENTIMENT_ANALYSIS_SEO });
  const seoData = data?.sentimentAnalysis?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_SENTIMENT_ANALYSIS_DATA,
    variables: { locale: params.locale },
  });

  return <EmotionAnalysis {...data?.sentimentAnalysis?.data?.attributes} />;
}
