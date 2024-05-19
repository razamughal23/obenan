import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_BUSINESS_AGENCIES_DATA, GET_BUSINESS_AGENCIES_SEO } from "utils/services/queries/solution";
import { convertSeo } from "utils/seo";
const BusinessAgencies = dynamic(() => import("./templete/businessAgencies"));

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_BUSINESS_AGENCIES_SEO,
  });
  const seoData = data?.businessSolutionAgencie?.data?.attributes.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_BUSINESS_AGENCIES_DATA,
    variables: { locale: params.locale },
  });

  return (
    <BusinessAgencies
      {...data?.businessSolutionAgencie?.data?.attributes}
      card={data?.businessSolutionAgencie?.data?.attributes.data}
    />
  );
}
