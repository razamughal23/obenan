import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_Multi_LOCATION_BUSINESS_DATA, GET_Multi_LOCATION_BUSINESS_SEO } from "utils/services/queries/solution";
import { convertSeo } from "utils/seo";
const MultiLocationBusiness = dynamic(() => import("./templete/multiLocationBusiness"));

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_Multi_LOCATION_BUSINESS_SEO,
  });
  const seoData = data?.multiLocationBusiness?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_Multi_LOCATION_BUSINESS_DATA,
    variables: { locale: params.locale },
  });

  return <MultiLocationBusiness {...data?.multiLocationBusiness?.data?.attributes} />;
}
