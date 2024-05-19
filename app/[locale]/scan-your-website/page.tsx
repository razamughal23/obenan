import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_SCAN_YOUR_WEBSITE_DATA, GET_SCAN_YOUR_WEBSITE_SEO } from "utils/services/queries/tools";
const ScanYourWebsite = dynamic(() => import("./templete/scanYourWebsite"));
import { convertSeo } from "utils/seo";


export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_SCAN_YOUR_WEBSITE_SEO,
  });
  const seoData = data?.scanYourWebsite?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_SCAN_YOUR_WEBSITE_DATA,
    variables: { locale: params.locale },
  });

  return <ScanYourWebsite {...data?.scanYourWebsite?.data?.attributes} />;
}
