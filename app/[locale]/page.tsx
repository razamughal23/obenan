import { GET_CLIENTS_DATA, GET_HOME_DATA, GET_HOME_SEO } from "utils/services/queries/home";
import { getClient } from "utils/services/client";
import { GET_BLOGS_DATA } from "utils/services/queries/learn";
import { convertSeo } from "utils/seo";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("./template/home"));

export async function generateMetadata() {
  const { data } = await getClient().query({ query: GET_HOME_SEO });
  const seoData = data?.home?.data?.attributes?.seo;
  return convertSeo(seoData);
}

export default async function Index({ params }: any) {
  let pageData = await Promise.all([
    getClient().query({
      query: GET_HOME_DATA,
      variables: { locale: params.locale },
    }),
    getClient().query({ query: GET_CLIENTS_DATA, variables: { locale: params.locale } }),
    getClient().query({
      query: GET_BLOGS_DATA,
      variables: {
        locale: params.locale,
      },
    }),
  ]);

  const data = pageData[0].data;
  const client = pageData[1].data;
  const blog = pageData[2].data;
  return (
    <div>
      <Home
        {...data?.home?.data?.attributes}
        clients={client?.clients?.data}
        blogs={blog?.blogs?.data}
        contributions={...data?.home?.data?.attributes}
      />
    </div>
  );
}
