import dynamicc from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_CONTACT_US_DATA, GET_CONTACT_US_SEO } from "utils/services/queries/contact";
import { convertSeo } from "utils/seo";
const ContactUs = dynamicc(() => import("./templete/contactUs"));

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_CONTACT_US_SEO });
  const seoData = data?.contactUs?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({ query: GET_CONTACT_US_DATA, variables: { locale: params.locale } });
  return <ContactUs {...data?.contactUs?.data?.attributes} />;
}
