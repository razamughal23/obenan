"use client";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { styles } from "../../styles";
const ToolsCard = dynamic(() => import("app/components/tools/toolsCard"));
const Title = dynamic(() => import("app/components/title"));
const BrandsHeading = dynamic(() => import("app/components/tools/brandsHeading"));
interface Props {
  title: any[];
  description: any;
  image: any;
  data: any;
}
const RecurringGoogleBusiness = (props: Props) => {
  return (
    <Box sx={styles.PagesMainBox}>
      <Title title={props.title} />
      <BrandsHeading
        variant="h1"
        title={props.title}
        desc={props.description}
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${props.image?.data?.attributes?.url}`}
      />
      <ToolsCard />
    </Box>
  );
};

export default RecurringGoogleBusiness;
