"use client";
import dynamic from "next/dynamic";
import { Box, Grid, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { styles } from "../styles";
import { LoadingButton } from "@mui/lab";
import { GET_CUSTOMER_QUERY_DATA } from "utils/services/queries/contact";
import { useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslations } from "next-intl";
import validationContact from "app/validation/validationContact";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Title = dynamic(() => import("app/components/title"));
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));

interface Props {
  title: any;
  description: any;
}
const ContactUs = (props: Props) => {
  const theme = useTheme();
  const t = useTranslations("header");
  const notify = () => toast.success("Your queries has been submitted");
  const [loadingButtonState, setLoadingButtonState] = useState(false);
  const [createCustomerQuery, { data, loading }] = useMutation(GET_CUSTOMER_QUERY_DATA);
  const submitHandler = async (values: any, { resetForm }: any) => {
    setLoadingButtonState(true);
    createCustomerQuery({
      variables: {
        data: {
          name: values?.name,
          email: values?.email,
          company: values?.company,
          message: values?.message,
        },
      },
    });
    resetForm();
    setLoadingButtonState(false);
  };
  useEffect(() => {
    if (data?.createCustomerQuery?.data && !loading) {
      notify();
    }
  }, [loading]);

  return (
    <Box sx={styles.MainBox}>
      <Title title={props.title} />
      <Grid container item xs={12} sm={11.5} md={12} lg={12} sx={styles.MainGrid}>
        <Grid item xs={11.5} sm={12} md={6} lg={4.5}>
          <ReactMarkdown
            children={props.description}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <Typography fontSize={60} fontWeight={"bold"} {...props} />,
              h2: ({ node, ...props }) => <Typography fontSize={32} fontWeight={"bold"} {...props} />,
              h3: ({ node, ...props }) => <Typography fontSize={30} fontWeight={"bold"} {...props} />,
              h4: ({ node, ...props }) => <Typography fontSize={26} fontWeight={"bold"} {...props} />,
              h5: ({ node, ...props }) => <Typography fontSize={24} fontWeight={"bold"} {...props} />,
              h6: ({ node, ...props }) => <Typography fontSize={22} fontWeight={"bold"} {...props} />,
              p: ({ node, ...props }) => <Typography fontSize={18} fontWeight={"400"} {...props} />,
              img: ({ node, ...props }) => <img {...props} style={{ width: "22px", height: "22px" }} {...props} />,
            }}
            className="markdown"
          />
        </Grid>
        <Grid item xs={11.5} sm={12} md={4.5} lg={4} sx={styles.FormGrid} marginTop={{ xs: "40px", md: "0px" }}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              company: "",
              message: "",
              recaptcha: "",
            }}
            validationSchema={validationContact}
            onSubmit={submitHandler}
          >
            {({ values, errors, touched, handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container item xs={11} sm={11} md={11} lg={11} sx={{ margin: "auto" }}>
                  <Typography fontSize={"32px"} lineHeight={"40px"} fontWeight={700} sx={{ marginTop: "24px" }}>
                    {t("Submit Your Queries")}
                  </Typography>
                  <Field
                    as={TextField}
                    label="Full Name"
                    placeholder="Full Name"
                    required
                    name="name"
                    variant="outlined"
                    value={values?.name}
                    error={touched?.name && Boolean(errors?.name)}
                    helperText={touched?.name && errors?.name}
                    sx={styles.FormField}
                    inputProps={{ style: { fontSize: "16px" } }}
                    onChange={handleChange}
                  />
                  <Field
                    as={TextField}
                    label="Email"
                    placeholder="Email"
                    required
                    name="email"
                    variant="outlined"
                    value={values?.email}
                    error={touched?.email && Boolean(errors?.email)}
                    helperText={touched?.email && errors?.email}
                    sx={styles.FormField}
                    inputProps={{ style: { fontSize: "16px" } }}
                    onChange={handleChange}
                  />
                  <Field
                    as={TextField}
                    label="Company"
                    placeholder="Company"
                    required
                    name="company"
                    variant="outlined"
                    value={values?.company}
                    error={touched?.company && Boolean(errors?.company)}
                    helperText={touched?.company && errors?.company}
                    sx={styles.FormField}
                    inputProps={{ style: { fontSize: "16px" } }}
                    onChange={handleChange}
                  />
                  <Field
                    as={TextField}
                    label="Message"
                    placeholder="Message"
                    required
                    name="message"
                    variant="outlined"
                    value={values?.message}
                    error={touched?.message && Boolean(errors?.message)}
                    helperText={touched?.message && errors?.message}
                    multiline
                    rows={5}
                    sx={styles.FormField}
                    inputProps={{ style: { fontSize: "16px" } }}
                    onChange={handleChange}
                  />
                  <Box sx={{ marginTop: "15px" }}>
                    <ReCAPTCHA
                      sitekey="6LfQ31gaAAAAAI4uTvABblYhygdFooBFWs9KwcoJ"
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    sx={{
                      ...styles.submit,
                      color: values ? theme.palette.primary.contrastText : theme.palette.primary.main,
                    }}
                    loading={loadingButtonState}
                    disabled={
                      Object.keys(errors).length > 0
                        ? true
                        : !(values?.name && values?.email && values?.company && values?.message)
                        ? true
                        : false
                    }
                  >
                    Submit
                  </LoadingButton>
                </Grid>
                <ToastContainer />
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
