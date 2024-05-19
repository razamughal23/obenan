import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_REVIEW_MANAGEMENT_DATA, GET_REVIEW_MANAGEMENT_SEO } from "utils/services/queries/tools";
const ReviewManagement = dynamic(() => import("./template/reviewManagemant"));
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_REVIEW_MANAGEMENT_SEO,
  });
  const seoData = data?.reviewManagement?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_REVIEW_MANAGEMENT_DATA,
    variables: { locale: params.locale },
  });

  return <ReviewManagement {...data?.reviewManagement?.data?.attributes} />;
}
