import React, { FC, useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import Menu from "./Menu";
import { pages } from "../../routes";

const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        color="transparent"
        sx={{ boxShadow: "none", zIndex: 4, minHeight: "100%", width: "unset" }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={() => setIsOpen(!isOpen)}
            disableRipple
            size="large"
          >
            {isOpen ? (
              <CloseIcon
                sx={{
                  color: (theme) => theme.palette.primary.main,
                }}
                fontSize={isMobile ? "medium" : "large"}
              />
            ) : (
              <MenuIcon
                fontSize={isMobile ? "medium" : "large"}
                sx={(theme) => ({
                  color: {
                    xs: theme.palette.primary.main,
                    sm: theme.palette.primary.main,
                    md: theme.palette.background.paper,
                    lg: theme.palette.background.paper,
                    xl: theme.palette.background.paper,
                  },
                })}
              />
            )}
          </IconButton>
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} pages={pages} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HamburgerMenu;
