import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_SINGLE_LOCATION_BUSINESS_DATA, GET_SINGLE_LOCATION_BUSINESS_SEO } from "utils/services/queries/solution";
import { convertSeo } from "utils/seo";
const SingleLocationBusiness = dynamic(() => import("./templete/singleLocationBusiness"));

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_SINGLE_LOCATION_BUSINESS_SEO,
  });
  const seoData = data?.singleLocationBusiness?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_SINGLE_LOCATION_BUSINESS_DATA,
    variables: { locale: params.locale },
  });

  return <SingleLocationBusiness {...data?.singleLocationBusiness?.data?.attributes} />;
}
