import dynamic from "next/dynamic";
const Impressum = dynamic(() => import("./templete"));
import { convertSeo } from "utils/seo";
import { getClient } from "utils/services/client";
import { GET_IMPRESSUM_DATA, GET_IMPRESSUM_SEO } from "utils/services/queries/home";

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_IMPRESSUM_SEO });
  const seoData = data?.impressum?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({ query: GET_IMPRESSUM_DATA, variables: { locale: params.locale } });

  return <Impressum data={data?.impressum?.data} />;
}
