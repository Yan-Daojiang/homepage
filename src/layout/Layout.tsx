import { Typography } from "@mui/material";
import React, { FC } from "react";

import { Background, HamburgerMenu } from "../components";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Background>
      <>{children}</>
      <Typography
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
        }}
      >
        &copy; {new Date().getFullYear()} - Made with ❤️ by {"Daojiang Yan"}
      </Typography>
    </Background>
  </>
);

export default Layout;
