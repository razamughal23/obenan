import dynamic from "next/dynamic";
const Datenschutz = dynamic(() => import("./templete"));
import { getClient } from "utils/services/client";
import { GET_Datenschutz_DATA, GET_Datenschutz_SEO } from "utils/services/queries/home";
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_Datenschutz_SEO });
  const seoData = data?.datenschutz?.data?.attributes?.seo;
  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({ query: GET_Datenschutz_DATA, variables: { locale: params.locale } });

  return <Datenschutz data={data?.datenschutz?.data} />;
}
