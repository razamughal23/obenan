import dynamic from "next/dynamic";
import { Box, Card as MuiCard, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { styles } from "./styles";
const Link = dynamic(() => import("app/components/ObenanLink"));

interface Props {
  title: any;
  image: any;
  pathname: any;
}
const Card = ({ title, image, pathname }: Props) => {
  const theme = useTheme();
  return (
    <Link
      href={pathname}
      style={{
        textDecoration: "none",
        color: theme.palette.primary.contrastText,
      }}
    >
      <MuiCard sx={styles.Card}>
        <CardMedia sx={styles.CardMedia} image={image}>
          <Box>
            <CardContent>
              <Typography
                fontSize={"20px"}
                lineHeight={"28px"}
                fontWeight={700}
                sx={{ color: theme.palette.primary.contrastText }}
              >
                {title}
              </Typography>
            </CardContent>
          </Box>
        </CardMedia>
      </MuiCard>
    </Link>
  );
};

export default Card;
