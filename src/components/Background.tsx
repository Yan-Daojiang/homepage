import React, { FC } from "react";
import { Box } from "@mui/material";
import HamburgerMenu from "./menu/HamburgerMenu";

type BackgroundProps = {
  children: JSX.Element | JSX.Element[];
};

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <HamburgerMenu />
      <Box
        sx={{
          position: "relative",
          backgroundColor: (theme) => theme.palette.secondary.main,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          minHeight: "100vh",
          padding: (theme) => theme.spacing(6, 4),
        }}
      >
        {children}
      </Box>
    </>
  );
};
export default Background;
