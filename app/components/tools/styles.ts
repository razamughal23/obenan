export const styles = {
  MainGrid: { margin: "auto", display: "flex", justifyContent: "center", paddingTop: "100px", paddingBottom: "150px" },
  title: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: "40px",
  },
  desc: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: "40px",
  },
  listingBrands: {
    marginBottom: "40px",
  },
  listingButton: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  started: {
    backgroundColor: "primary.dark",
    color: "primary.contrastText",
    borderRadius: "6px",
    padding: "10px 30px",
    textTransform: "none",
    fontWeight: "500px",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
  BrandsMarquee: {
    height: 50,
    width: 50,
    margin: "5px 15px 15px 5px",
    borderRadius: 10,
    "&:hover": {
      boxShadow: 5,
      zIndex: 5,
    },
  },
  Grid: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  Card: {
    height: { xs: "230px", sm: "350px", md: "235px", lg: "330px" },
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
    marginTop: "5px",
  },
  CardMedia: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    cursor: "pointer",
  },
  toolCardGrid: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "100px",
    paddingBottom: "150px",
  },
  BrandHeadingStyles: {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
  },
  ImageBox: {
    display: "flex",
    justifyContent: "center",
  },
};
