import dynamic from "next/dynamic";
const ObenanImage = dynamic(() => import("app/components/ObenanImage"));
import { Box, Typography } from "@mui/material";

interface Props {
  src: any;
  title: any;
  desc: any;
}

const KeywordCard = ({ src, title, desc }: Props) => {
  return (
    <Box>
      <Box sx={{ height: 92, width: 99 }}>
        <ObenanImage src={src} alt="KeyWord Serach Images" />
      </Box>
      <Typography fontSize={"24px"} fontWeight={700} color={"#1b2430"}>
        {title}
      </Typography>
      <Typography fontSize={"20px"} fontWeight={400} color={"#495059"}>
        {desc}
      </Typography>
    </Box>
  );
};

export default KeywordCard;
