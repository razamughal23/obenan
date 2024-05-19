import dynamic from "next/dynamic";
import { getClient } from "utils/services/client";
import {
  GET_AUTOMATE_RESPOND_TASK_CREATION_DATA,
  GET_AUTOMATE_RESPOND_TASK_CREATION_SEO,
} from "utils/services/queries/tools";
const AutomateReviewTaskCreation = dynamic(() => import("./templete/automateReviewTaskCreation"));
import { convertSeo } from "utils/seo";

export async function generateMetadata() {
  const { data } = await getClient().query({
    query: GET_AUTOMATE_RESPOND_TASK_CREATION_SEO,
  });
  const seoData = data.automateReviewTaskCreation?.data?.attributes?.seo;

  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  const { data } = await getClient().query({
    query: GET_AUTOMATE_RESPOND_TASK_CREATION_DATA,
    variables: { locale: params.locale },
  });

  return <AutomateReviewTaskCreation {...data?.automateReviewTaskCreation?.data?.attributes} />;
}
