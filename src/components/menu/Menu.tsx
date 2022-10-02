import React, { Dispatch, FC, Fragment, SetStateAction } from "react";
import { Box, Drawer, Link, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GatsbyLink from "gatsby-link";

import { isInternalLink } from "../../utils";

const useStyles = makeStyles((theme: Theme) => ({
  linkTitle: {
    fontWeight: "500 !important",
    letterSpacing: `${theme.spacing(0.25)} !important`,
    position: "relative",
    textDecoration: "none",
    display: "inline-block",
    transition: "color ease 0.3s",
    padding: theme.spacing(0, 1),
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: 2,
      left: "0",
      bottom: "0",
      backgroundColor: theme.palette.secondary.main,
      transition: "all ease 0.3s",
    },
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        color: theme.palette.primary.contrastText,
        "&::after": { height: "100%" },
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem !important",
      fontWeight: 400,
      padding: 0,
    },
  },
}));

type MenuProps = {
  pages: IPage[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu: FC<MenuProps> = ({ pages, isOpen, setIsOpen }) => {
  const classes = useStyles();

  const PageTitle: FC<Partial<IPage>> = ({ title }) => (
    <Typography variant="h4" className={classes.linkTitle} color="secondary">
      {title}
    </Typography>
  );

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      sx={{
        zIndex: 3,
      }}
      PaperProps={{
        sx: {
          padding: (theme) => theme.spacing(2),
          backgroundColor: (theme) => theme.palette.background.default,
          width: {
            lg: "25%",
            md: "25%",
            sm: "100%",
            xs: "100%",
          },
        },
      }}
    >
      <Box
        sx={{
          paddingTop: (theme) => theme.spacing(6),
          display: "flex",
          flexDirection: "column",
        }}
      >
        {pages &&
          pages.map((page: IPage, index) => {
            const isInternal = isInternalLink(page.href);
            return (
              <Fragment key={index}>
                {isInternal ? (
                  <Link
                    component={GatsbyLink}
                    to={page.href}
                    onClick={() => setIsOpen(false)}
                    sx={{
                      textDecoration: "none",
                      fontSize: "2rem",
                      padding: (theme) => theme.spacing(1),
                    }}
                  >
                    <PageTitle title={page.title} />
                  </Link>
                ) : (
                  <a
                    href={page.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      textDecoration: "none",
                      fontSize: "2rem",
                      padding: 8,
                    }}
                  >
                    <PageTitle title={page.title} />
                  </a>
                )}
              </Fragment>
            );
          })}
      </Box>
    </Drawer>
  );
};

export default Menu;
