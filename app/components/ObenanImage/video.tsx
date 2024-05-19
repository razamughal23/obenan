import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { styles } from "./styles";
import HeaderLogo from "../../../public/HeaderLogo.png";
const PlayArrowRoundedIcon = dynamic(() => import("@mui/icons-material/PlayArrowRounded"));
const ObenanImage = dynamic(() => import("./index"));

interface Props {
  zIndex?: number;
  src: any;
  muted: any;
  loop: any;
  autoPlay: any;
}
const ObenanVideo = ({ src, loop }: Props) => {
  const theme = useTheme();
  const [isPlay, setIsPlay] = useState(true);
  const ref = useRef();
  const handleMuteClick = () => {
    setIsPlay(!isPlay);
    if (isPlay) {
      ref.current.play();

      return;
    }
    ref.current.pause();
  };
  return (
    <>
      <Box style={{ width: "100%", height: "100%", position: "relative" }}>
        <Box sx={styles.VideoStyle} onClick={handleMuteClick}>
          {isPlay ? (
            <Box sx={styles.VideoButton}>
              <PlayArrowRoundedIcon sx={styles.PlayIcon} />
            </Box>
          ) : (
            ""
          )}
          <video
            // autoPlay={autoPlay}
            ref={ref}
            loop={loop}
            muted={false}
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "35px" }}
          >
            <source src={src} />
          </video>
          <Box sx={styles.BottomTitle}>
            <Box
              sx={{
                height: 24,
                width: 55,
              }}
            >
              <ObenanImage src={HeaderLogo} alt="Bottom Text" style={{ color: theme.palette.primary.contrastText }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ObenanVideo;
