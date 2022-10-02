import React, { FC } from "react";
import { Button } from "@mui/material";

const LinkButton: FC<LinkButtonType> = ({ url, title }) => (
  <Button
    variant="contained"
    href={url}
    target="_blank"
    sx={{ margin: (theme) => theme.spacing(1) }}
  >
    {title}
  </Button>
);

export default LinkButton;
