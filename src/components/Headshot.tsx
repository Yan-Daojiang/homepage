import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardMedia, Divider, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
const Headshot: FC<{ divider?: boolean }> = ({ divider }) => (
  <Grid
    item
    xs={12}
    lg={4}
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: (theme) => theme.spacing(4),
    }}
  >
    <CardMedia
      component="img"
      height="300"
      image="https://file.yandaojiang.com/cv/ydj.JPG"
      alt="Daojiang's headshot"
      sx={{ borderRadius: "100%", width: 220, height: 220 }}
    />
    <Grid
      item
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: (theme) => theme.spacing(2),
      }}
    >
      <Typography
        variant="h4"
        color="secondary"
        sx={{
          fontWeight: 500,
          fontSize: (theme) => theme.breakpoints.down("sm") && "1.5rem",
        }}
      >
        Daojiang Yan
      </Typography>
      {divider && (
        <Divider
          variant="fullWidth"
          sx={{
            borderColor: (theme) => theme.palette.primary.main,
            borderBottomWidth: 3,
            width: "25%",
            margin: (theme) => theme.spacing(2),
            letterSpacing: (theme) => theme.spacing(0.25),
          }}
        />
      )}
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ letterSpacing: (theme) => theme.spacing(0.15) }}
      >
        Software Developer
      </Typography>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ letterSpacing: (theme) => theme.spacing(0.25) }}
      >
        <FontAwesomeIcon icon={faLocationArrow}/> Wuhan, Hubei🇨🇳 
      </Typography>
    </Grid>
  </Grid>
);

export default Headshot;
