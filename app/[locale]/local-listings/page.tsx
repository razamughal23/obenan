import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_LOCAL_LISTING_DATA, GET_LOCAL_LISTING_SEO } from "utils/services/queries/tools";
const LocalListings = dynamic(() => import("./templete/localListings"));
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_LOCAL_LISTING_SEO });
  const seoData = data?.localListing?.data?.attributes?.seo || {};

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({ query: GET_LOCAL_LISTING_DATA, variables: { locale: params.locale } });

  return <LocalListings {...data?.localListing?.data?.attributes} params={params} />;
}
