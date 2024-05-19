import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_AI_POWERED_RESPOND_DATA, GET_AI_POWERED_RESPOND_SEO } from "utils/services/queries/tools";
import { convertSeo } from "utils/seo";
const AIPoweredRespond = dynamic(() => import("./templete/aiPoweredAutoReviewRespond"));

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_AI_POWERED_RESPOND_SEO,
  });
  const seoData = data?.aiPoweredAutoReviewRespond?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_AI_POWERED_RESPOND_DATA,
    variables: { locale: params.locale },
  });

  return <AIPoweredRespond {...data?.aiPoweredAutoReviewRespond?.data?.attributes} />;
}
