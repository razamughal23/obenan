import dynamic from "next/dynamic";
import React from "react";
import HeaderLogo from "../../../../public/HeaderLogo.png";
import {
  Box,
  Grid,
  List,
  Typography,
  useTheme,
  Menu,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
} from "@mui/material";
import { HeaderData, LearnData, SolutionData, ToolsData } from "../../../../jsondata/Data";
import { styles } from "./styles";
const ObenanImage = dynamic(() => import("../../ObenanImage/index"));
const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"));
const ExpandMoreIcon = dynamic(() => import("@mui/icons-material/ExpandMore"));
const Link = dynamic(() => import("app/components/ObenanLink"));

const ResponsiveHeader = ({ locale = "en" }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const OpenDrawar = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const paperStyle = {
    width: { xs: "100%", sm: "40%" },
    boxShadow: "none",
  };
  return (
    <>
      <Grid container item xs={12} sm={12} md={12} lg={12} sx={{ alignItems: "center" }}>
        <Grid item xs={10} sm={11} md={11} lg={10}>
          <Box sx={{ height: 80, width: 152, cursor: "pointer" }}>
            <Link href={"/"} locale={locale}>
              <ObenanImage src={HeaderLogo} alt="Header Logo" priority style={{ objectFit: "contain" }} />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={2} sm={1} md={1} lg={2} sx={styles.responsiveGrid}>
          <MenuIcon onClick={OpenDrawar} />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: paperStyle,
            }}
          >
            {HeaderData.map((headerdata: any, index) => {
              if (headerdata.name == "Tools") {
                return (
                  <>
                    <Accordion key={`${headerdata.id}-${index}`} elevation={0} id="basic-Accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: theme.palette.primary.main }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Tools</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {ToolsData.map((toolsdata: any, index) => {
                          return (
                            <List key={`${toolsdata.id}-${index}`} id="basic-List">
                              <Link href={toolsdata.link} style={{ textDecoration: "none" }}>
                                <ListItemText sx={{ color: theme.palette.primary.main }}>{toolsdata.name}</ListItemText>
                              </Link>
                            </List>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  </>
                );
              }
              if (headerdata.name == "Solutions") {
                return (
                  <>
                    <Accordion elevation={0} id="basic-Accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: theme.palette.primary.main }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Solutions</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {SolutionData.map((solutiondata: any, index) => {
                          return (
                            <List key={`${solutiondata.id}-${index}`}>
                              <Link href={solutiondata.link} style={{ textDecoration: "none" }}>
                                <ListItemText sx={{ color: theme.palette.primary.main }}>
                                  {solutiondata.name}
                                </ListItemText>
                              </Link>
                            </List>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  </>
                );
              }
              if (headerdata.name == "Learn") {
                return (
                  <>
                    <Accordion elevation={0} id="basic-Accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: theme.palette.primary.main }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Learn</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {LearnData.map((learndata: any, index) => {
                          return (
                            <List key={`${learndata.id}-${index}`}>
                              <Link href={learndata.link} style={{ textDecoration: "none" }}>
                                <ListItemText sx={{ color: theme.palette.primary.main }}>{learndata.name}</ListItemText>
                              </Link>
                            </List>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  </>
                );
              }
              return (
                <>
                  <MenuItem id="basic-MenuItem" onClick={handleClose} sx={styles.MenuItem}>
                    {headerdata.name}
                  </MenuItem>
                </>
              );
            })}
          </Menu>
        </Grid>
      </Grid>
    </>
  );
};

export default ResponsiveHeader;
