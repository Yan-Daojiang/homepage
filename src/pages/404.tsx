import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Grid container direction="column">
      <Typography variant="h2" color="textPrimary" sx={{ fontWeight: 600 }}>
        🥲 404
      </Typography>
      <Typography variant="h5" color="textPrimary" sx={{ fontWeight: 600 }}>
        Well, this is awkward...
      </Typography>
      <br />
      <Button href="/" variant="contained" color="primary">
        Go home
      </Button>
    </Grid>
  );
};

export default NotFoundPage;
