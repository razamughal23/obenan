import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { GetStarted } from "../buttons/Buttons";
interface Props {
  title: any;
  bgColor: any;
  color: any;
  flexDirection: any;
  fontSize: any;
  lineHeight: any;
  textcolor: any;
  signcolor: any;
  variant: any;
  accordionData: any;
}
const DataAccordion = ({
  title,
  bgColor,
  color,
  flexDirection = "",
  fontSize,
  lineHeight,
  textcolor,
  signcolor,
  variant,
  accordionData,
}: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel0");
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ ...styles.MainBox, backgroundColor: bgColor }}>
      <Container>
        <Grid
          container
          item
          xs={11.5}
          sm={11.5}
          md={10}
          lg={9}
          sx={{
            ...styles.AccordionMainGrid,
            flexDirection: { flexDirection },
          }}
        >
          <Grid data-aos="fade-up" item xs={12} sm={12} md={5.5} lg={5.9}>
            <Typography
              fontSize={fontSize}
              lineHeight={lineHeight}
              fontWeight={700}
              sx={{ color: color, marginBottom: "40px" }}
              variant={variant}
            >
              {title}
            </Typography>
            <GetStarted />
          </Grid>
          <Grid item xs={12} sm={12} md={5.5} lg={5.9}>
            {accordionData.map((item: any, index: any) => {
              return (
                <Accordion
                  key={`${item.id}-${index}`}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  elevation={0}
                  sx={{ color: textcolor, backgroundColor: "transparent" }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === `panel${index}` ? (
                        <RemoveIcon sx={{ color: signcolor }} />
                      ) : (
                        <AddIcon sx={{ color: signcolor }} />
                      )
                    }
                  >
                    <Typography fontSize={"16px"} fontWeight={600} lineHeight={"24px"}>
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontSize={"14px"} fontWeight={400} lineHeight={"24px"}>
                      {item.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DataAccordion;
