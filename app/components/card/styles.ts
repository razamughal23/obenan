export const styles = {
  MainBox: {
    paddingTop: "100px",
    paddingBottom: "200px",
    color: "primary.contrastText",
  },
  started: {
    backgroundColor: "primary.dark",
    color: "primary.contrastText",
    borderRadius: "8px",
    padding: "14px 20px",
    textTransform: "none",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
  Card: {
    height: "330px",
    display: "flex",
    borderRadius: "0px",
    justifyContent: "center",
    cursor: "pointer",
    color: "primary.contrastText",
  },
  CardMedia: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    objectFit: "contain",
  },
  AccordionMainGrid: { display: "flex", alignItems: "center", margin: "auto", justifyContent: "space-between" },
  animatedCardBox: { paddingTop: "200px", paddingBottom: "100px" },
  animatedCardGrid: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    justifyContent: "space-between",
  },
  animation: { display: "flex", justifyContent: "center" },
  animatedCardDesc: { paddingTop: "40px", paddingBottom: "40px" },
  imageMainGrid: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    justifyContent: "space-evenly",
  },
  ImageData: { display: "flex", justifyContent: "center" },
  ImageBox: {
    height: 400,
    width: 400,
  },
  ImageCardTypo: { paddingTop: "40px", paddingBottom: "40px" },
};