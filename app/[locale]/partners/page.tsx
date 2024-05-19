import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_PATNERS_DATA, GET_PATNERS_SEO, GET_PATNERS_HEAD_DATA } from "utils/services/queries/learn";
const Partners = dynamic(() => import("./templete/partner"));
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_PATNERS_SEO });
  const seoData = data?.partnerSeo?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({ query: GET_PATNERS_HEAD_DATA, variables: { locale: params.locale } });
  const { data: card } = await getClient().query({ query: GET_PATNERS_DATA, variables: { locale: params.locale } });

  return <Partners {...data?.partnerSeo?.data?.attributes} data={card.partners.data} />;
}
