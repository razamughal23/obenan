import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_REVIEW_WIDGET_DATA, GET_REVIEW_WIDGET_SEO } from "utils/services/queries/tools";
const ReviewWidget = dynamic(() => import("./templete/reviewWidget"));
import { convertSeo } from "utils/seo";



export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_REVIEW_WIDGET_SEO,
  });
  const seoData = data.reviewWidget.data.attributes.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_REVIEW_WIDGET_DATA,
    variables: { locale: params.locale },
  });

  return <ReviewWidget {...data?.reviewWidget?.data?.attributes} />;
}
