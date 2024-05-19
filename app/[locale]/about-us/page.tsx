import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_ABOUT_US_DATA, GET_ABOUT_US_SEO } from "utils/services/queries/learn";
import { convertSeo } from "utils/seo";
const AboutUs = dynamic(() => import("./templete/aboutUs"));

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_ABOUT_US_SEO,
  });
  const seoData = data?.aboutUs?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_ABOUT_US_DATA,
    variables: { locale: params.locale },
  });

  return <AboutUs {...data?.aboutUs?.data?.attributes} />;
}
