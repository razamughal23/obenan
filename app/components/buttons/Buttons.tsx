import { Button, Typography, Link } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { useTranslations } from "next-intl";
import ObenanLink from "app/components/ObenanLink";

export const GetStarted = () => {
  const t = useTranslations("header");
  return (
    <ObenanLink href={"/contact-us"} style={{ textDecoration: "none" }}>
      <Button sx={styles.started}>
        <Typography sx={{ fontFamily: "var(--work-Sans)", fontWeight: "500" }}>{t("Get Started")}</Typography>
      </Button>
    </ObenanLink>
  );
};

export const LearnMore = () => {
  const t = useTranslations("header");
  return (
    <Link href={"https://climate.stripe.com/4eCn14"} target={"blank"} sx={{ textDecoration: "none" }}>
      <Button sx={styles.Learn}>{t("Learn More")}</Button>
    </Link>
  );
};

export const Login = () => {
  const t = useTranslations("header");
  return (
    <Link href="https://app.obenan.com/auth/sign-in" target={"blank"} sx={{ textDecoration: "none" }}>
      <Button sx={styles.login}>
        <Typography sx={{ fontFamily: "var(--work-Sans)", fontWeight: "500" }}>{t("Login")}</Typography>
      </Button>
    </Link>
  );
};

export const BecomePartner = () => {
  const t = useTranslations("header");
  return (
    <ObenanLink href={"/contact-us"} style={{ textDecoration: "none" }}>
      <Button sx={styles.started}>
        <Typography sx={{ fontFamily: "var(--work-Sans)", fontWeight: "500" }}>{t("Become Partner")}</Typography>
      </Button>
    </ObenanLink>
  );
};
