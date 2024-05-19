export const styles = {
  MainBox: {
    paddingTop: "110px",
    paddingBottom: "100px",
    backgroundColor: "primary.main",
    color: "primary.contrastText",
  },
  MainGrid: {
    margin: "auto",
    display: "flex",
    justifyContent: { sm: "flex-start", md: "space-evenly" },
    paddingTop: "50px",
    alignItems: "center",
  },
  submit: {
    padding: "14px, 20px, 14px, 20px",
    backgroundColor: "primary.dark",
    width: "100%",
    marginTop: "15px",
    marginBottom: "24px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
  FormGrid: {
    borderRadius: "16px",
    backgroundColor: "primary.contrastText",
    color: "primary.main",
    height: "fit-content",
  },
  FormField: {
    width: "100%",
    border: "1px solid rgba(211, 211, 211, 0.4)",
    borderRadius: "8px",
    marginTop: "16px",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#bad7ff",
      },
    },
  },
};
