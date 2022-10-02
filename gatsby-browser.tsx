import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./src/theme";
import { SnackbarProvider } from "notistack";
import { Zoom } from "@mui/material";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Layout } from "./src/layout";

config.autoAddCss = false;

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          TransitionComponent={Zoom}
          maxSnack={1}
        >
          <Layout>{element}</Layout>
        </SnackbarProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}
