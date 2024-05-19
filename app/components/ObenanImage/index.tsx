import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

interface props extends ImageProps {
  zIndex?: number;
}
const ObenanImage = (props: props) => {
  const [error, setError] = useState(false);
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        {...props}
        src={error ? "/noImage.jpeg" : props.src}
        style={{
          ...props.style,
        }}
        onError={() => {
          setError(true);
        }}
        placeholder="blur"
        blurDataURL="/loaderShim.png"
      />
    </Box>
  );
};

export default ObenanImage;
