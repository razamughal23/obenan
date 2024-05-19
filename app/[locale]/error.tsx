"use client";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import { useEffect } from "react";
export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <Box sx={styles.MainBox}>
      <Grid sx={styles.MainGrid}>
        <Typography sx={{ fontSize: "25px", fontWeight: "200" }}>
          Something Went Wrong. Please Try Again Later.
        </Typography>
      </Grid>
    </Box>
  );
}
