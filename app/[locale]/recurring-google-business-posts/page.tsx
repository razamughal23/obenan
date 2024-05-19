import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import {
  GET_RECCURING_GOOGLE_BUSINESS_POST_DATA,
  GET_RECCURING_GOOGLE_BUSINESS_POST_SEO,
} from "utils/services/queries/tools";
const RecurringGoogleBusiness = dynamic(() => import("./templete/recurringGoogleBusiness"));
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_RECCURING_GOOGLE_BUSINESS_POST_SEO,
  });
  const seoData = data?.recurringGoogleBusinessPost?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_RECCURING_GOOGLE_BUSINESS_POST_DATA,
    variables: { locale: params.locale },
  });

  return <RecurringGoogleBusiness {...data?.recurringGoogleBusinessPost?.data?.attributes} />;
}
