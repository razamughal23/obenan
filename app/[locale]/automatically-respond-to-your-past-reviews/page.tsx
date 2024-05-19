import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import {
  GET_AUTOMATICALLY_POWERED_RESPOND_DATA,
  GET_AUTOMATICALLY_POWERED_RESPOND_SEO,
} from "utils/services/queries/tools";
import { convertSeo } from "utils/seo";
const AutomaticallyRespondPastReview = dynamic(() => import("./templete/automaticallyRespondPastReview"));

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_AUTOMATICALLY_POWERED_RESPOND_SEO,
  });
  const seoData = data?.automaticallyRespondToPastReview?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_AUTOMATICALLY_POWERED_RESPOND_DATA,
    variables: { locale: params.locale },
  });

  return <AutomaticallyRespondPastReview {...data?.automaticallyRespondToPastReview?.data?.attributes} />;
}
