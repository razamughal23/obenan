"use client";
import dynamic from "next/dynamic";
import { styles } from "./styles";
const Box = dynamic(() => import("@mui/material/Box"));

const ProgressBar = () => {
  return (
    <Box sx={styles.LoadingBox}>
      <Box>
        <Box sx={{ height: 100, width: "100%" }}>
          <img src={"/loader.gif"} alt="Loading" style={{ objectFit: "contain" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
