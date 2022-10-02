import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    // cognac
    primary: {
      main: "#9E6F6D",
      light: "#e5dedd",
      dark: "#7e5957",
      contrastText: "#fffaf1",
    },
    // emerald green
    secondary: {
      main: "#034C52",
      light: "#b3c9cb",
      dark: "#023539",
      contrastText: "#011e20",
    },
    error: {
      main: "#c1220c",
    },
    text: {
      // off-white "rose quartz"
      primary: "#E6D7D5",
      // black
      secondary: "#333333",
    },
    background: {
      paper: "#fffaf1",
      default: "#f5ede6",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fffaf1",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        grouped: {
          ":not(:last-of-type)": {
            borderRight: "none",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 3,
          marginTop: 0,
          position: "absolute",
          bottom: "-20px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          marginBottom: 3,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        //@ts-ignore
        fontSizeMedium: {
          fontSize: "1.95rem",
        },
      },
    },
  },
});
