import dynamic from "next/dynamic";
const Box = dynamic(() => import("@mui/material/Box"));
import { Player } from "@lottiefiles/react-lottie-player";

interface Props {
  animationData: any;
}
const ObenanAnimations = ({ animationData }: Props) => {
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative" }}>
      <Player autoplay loop src={animationData} style={{ height: 300, width: "100%" }} />
    </Box>
  );
};

export default ObenanAnimations;
