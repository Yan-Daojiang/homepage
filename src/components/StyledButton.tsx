import { Button, darken, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(0, 0.25),
  ":hover": {
    backgroundColor: "transparent",
    border: "none",
    color: darken(theme.palette.secondary.main, 0.5),
  },
}));

export default StyledButton;
