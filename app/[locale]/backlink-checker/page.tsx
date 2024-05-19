import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import { GET_BACKLINK_CHECKER_DATA, GET_BACKLINK_CHECKER_SEO } from "utils/services/queries/tools";
import { convertSeo } from "utils/seo";
const BacklinkChecker = dynamic(() => import("./templete/backlinkChecker"));

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_BACKLINK_CHECKER_SEO });
  const seoData = data?.backlinkChecker?.data?.attributes.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({ query: GET_BACKLINK_CHECKER_DATA, variables: { locale: params.locale } });

  return <BacklinkChecker {...data?.backlinkChecker?.data?.attributes} />;
}
