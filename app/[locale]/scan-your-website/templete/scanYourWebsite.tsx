"use client";
import dynamic from "next/dynamic";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { styles } from "../styles";
import { GetStarted } from "app/components/buttons/Buttons";
import { useTranslations } from "next-intl";
import { Field, Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import validationWebsite from "app/validation/locationValidation";
const ToolsCard = dynamic(() => import("app/components/tools/toolsCard"));
const Title = dynamic(() => import("app/components/title"));

interface Props {
  title: any;
  description: any;
}
const ScanYourWebsite = (props: Props) => {
  const [loadingButtonState, setLoadingButtonState] = useState(false);
  const t = useTranslations("header");

  const handleSubmit = (values: any, { resetForm }: any) => {
    setLoadingButtonState(true);
    resetForm();
    setLoadingButtonState(false);
  };
  return (
    <Box sx={styles.MainBox}>
      <Title title={props.title} />
      <Grid container item xs={11.5} sm={11.5} md={11.5} lg={9.5} sx={styles.mainGrid}>
        <Grid item xs={12} sm={12} md={12} lg={5.5} sx={styles.textGrid}>
          <Grid item xs={12} sm={12} md={12} lg={10} sx={styles.WebsiteData}>
            <Typography
              fontSize={{ xs: "35px", lg: "48px" }}
              lineHeight={{ xs: "40px", lg: "56px" }}
              fontWeight={700}
              variant="h1"
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.WebsiteData}>
            <Typography fontSize={"20px"} fontWeight={400} lineHeight={"28px"}>
              {props.description}
            </Typography>
          </Grid>
          <Grid data-aos="fade-up" item xs={12} sm={12} md={12} lg={12}>
            <GetStarted />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <Formik
            initialValues={{
              website: "",
              keyword: "",
              email: "",
            }}
            validationSchema={validationWebsite}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <Box sx={styles.SeoBox}>
                  <Typography
                    fontSize={{ xs: "35px", lg: "32px" }}
                    lineHeight={{ xs: "40px", lg: "40px" }}
                    fontWeight={700}
                    sx={{ marginBottom: "24px" }}
                  >
                    {t("Get free SEO Audit")}
                  </Typography>
                  <Field
                    as={TextField}
                    label={t("Webpage URL")}
                    variant="outlined"
                    name="website"
                    required
                    value={values?.website}
                    error={touched?.website && Boolean(errors?.website)}
                    helperText={touched?.website && errors?.website}
                    onChange={handleChange}
                    sx={styles.TextFeild}
                  />
                  <Field
                    as={TextField}
                    label={t("Keyword or phrase to analyze")}
                    variant="outlined"
                    name="keyword"
                    required
                    value={values?.keyword}
                    error={touched?.keyword && Boolean(errors?.keyword)}
                    helperText={touched?.keyword && errors?.keyword}
                    onChange={handleChange}
                    sx={styles.TextFeild}
                  />
                  <Field
                    as={TextField}
                    label={t("Contact email")}
                    variant="outlined"
                    name="email"
                    required
                    value={values?.email}
                    error={touched?.email && Boolean(errors?.email)}
                    helperText={touched?.email && errors?.email}
                    onChange={handleChange}
                    sx={styles.TextFeild}
                  />
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loadingButtonState}
                    disabled={
                      Object.keys(errors).length > 0
                        ? true
                        : !(values?.website && values?.email && values?.keyword)
                        ? true
                        : false
                    }
                    sx={styles.SeoButton}
                  >
                    Submit
                  </LoadingButton>
                </Box>
                <ToastContainer />
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
      <ToolsCard />
    </Box>
  );
};

export default ScanYourWebsite;
