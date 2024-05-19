import dynamic from "next/dynamic";
import React from "react";
import { makeStyles } from "@mui/styles";
import { usePopupState, bindHover, bindFocus, bindMenu } from "material-ui-popup-state/hooks";
import { Box, Typography, useTheme, MenuItem } from "@mui/material";
import { LearnData, SolutionData, ToolsData } from "../../../../jsondata/Data";
import { useTranslations } from "next-intl";
const HoverMenu = dynamic(() => import("material-ui-popup-state/HoverMenu"));
const ChevronRight = dynamic(() => import("@mui/icons-material/ChevronRight"));
const KeyboardArrowDownSharpIcon = dynamic(() => import("@mui/icons-material/KeyboardArrowDownSharp"));
const KeyboardArrowUpSharp = dynamic(() => import("@mui/icons-material/KeyboardArrowUpSharp"));
const Link = dynamic(() => import("app/components/ObenanLink"));

const useCascadingMenuStyles = makeStyles((theme: any) => ({
  submenu: {
    marginTop: theme.spacing(-1),
  },
  title: {
    flexGrow: 1,
  },
  moreArrow: {
    marginRight: theme.spacing(-1),
  },
}));
const CascadingContext = React.createContext({
  parentPopupState: null,
  rootPopupState: null,
});
function CascadingMenuItem({ onClick, ...props }: any) {
  const { rootPopupState } = React.useContext(CascadingContext);
  if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");
  const handleClick = React.useCallback(
    (event: any) => {
      rootPopupState.close(event);
      if (onClick) onClick(event);
    },
    [rootPopupState, onClick],
  );

  return <MenuItem {...props} onClick={handleClick} />;
}
function CascadingSubmenu({ title, popupId, ...props }: any) {
  const classes = useCascadingMenuStyles();
  const { parentPopupState } = React.useContext(CascadingContext);
  const popupState = usePopupState({
    popupId,
    variant: "popover",
    parentPopupState,
  });

  return (
    <React.Fragment>
      <MenuItem {...bindHover(popupState)} {...bindFocus(popupState)}>
        <span className={classes.title}>{title}</span>
        <ChevronRight className={classes.moreArrow} />
      </MenuItem>
      <CascadingMenu
        {...props}
        classes={{ ...props.classes, paper: classes.submenu }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        popupState={popupState}
      />
    </React.Fragment>
  );
}
function CascadingMenu({ popupState, ...props }: any) {
  const { rootPopupState } = React.useContext(CascadingContext);
  const context = React.useMemo(
    () => ({
      rootPopupState: rootPopupState || popupState,
      parentPopupState: popupState,
    }),
    [rootPopupState, popupState],
  );

  return (
    <CascadingContext.Provider value={context}>
      <HoverMenu {...props} {...bindMenu(popupState)} />
    </CascadingContext.Provider>
  );
}
interface Props {
  title: string;
}
const CascadingHoverMenus = (props: Props) => {
  const theme = useTheme();
  const t = useTranslations("header");
  const { title } = props;

  const popupState = usePopupState({
    popupId: "demoMenu",
    variant: "popover",
  });
  return (
    <Box
      {...bindHover(popupState)}
      {...bindFocus(popupState)}
      sx={{ display: "flex", justifyContent: "center", flexDirection: "row", paddingRight: "15px" }}
    >
      <Typography sx={{ color: theme.palette.primary.contrastText, paddingRight: "5px" }}>{title}</Typography>
      {popupState.isOpen ? <KeyboardArrowUpSharp /> : <KeyboardArrowDownSharpIcon />}

      <CascadingMenu
        popupState={popupState}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {title == t("Tools") &&
          ToolsData.map((item: any, index: any) => {
            if (item?.item) {
              return (
                <Link
                  key={`${item.id}-${index}`}
                  href={item.link}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <CascadingSubmenu popupId="moreChoicesCascadingMenu" title={t(item.name)}>
                    {item.item.map((item: any, index: any) => {
                      return (
                        <Link key={`${item.id}-${index}`} href={item.link} style={{ textDecoration: "none" }}>
                          <CascadingMenuItem
                            sx={{
                              color: theme.palette.primary.main,
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                          >
                            {t(item.name)}
                          </CascadingMenuItem>
                        </Link>
                      );
                    })}
                  </CascadingSubmenu>
                </Link>
              );
            }
            return (
              <Link key={`${item.id}-${index}`} href={item.link} style={{ textDecoration: "none" }}>
                <CascadingMenuItem
                  sx={{ color: theme.palette.primary.main, paddingTop: "10px", paddingBottom: "10px" }}
                >
                  {t(item.name)}
                </CascadingMenuItem>
              </Link>
            );
          })}
        {title == t("Solutions") &&
          SolutionData.map((item: any, index: any) => {
            return (
              <Link key={`${item.id}-${index}`} href={item.link} style={{ textDecoration: "none" }}>
                <CascadingMenuItem
                  sx={{ color: theme.palette.primary.main, paddingTop: "10px", paddingBottom: "10px" }}
                >
                  {t(item.name)}
                </CascadingMenuItem>
              </Link>
            );
          })}
        {title == t("Learn") &&
          LearnData.map((item: any, index: any) => {
            return (
              <Link key={`${item.id}-${index}`} href={item.link} style={{ textDecoration: "none" }}>
                <CascadingMenuItem
                  sx={{ color: theme.palette.primary.main, paddingTop: "10px", paddingBottom: "10px" }}
                >
                  {t(item.name)}
                </CascadingMenuItem>
              </Link>
            );
          })}
      </CascadingMenu>
    </Box>
  );
};

export default CascadingHoverMenus;
