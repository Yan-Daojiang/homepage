import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  CardMedia,
  Grid,
  Theme,
  Typography,
  useMediaQuery
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import StyledButton from "../StyledButton";
import TechnologyIcon from "./TechnologyIcon";

const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid rgba(33,33,33, 0.3) !important`,
    cursor: "pointer",

    "&:last-child": {
      borderBottom: "none !important",
    },
  },
  expandedCard: {
    borderBottom: `1px solid rgba(33,33,33, 0.3) !important`,
    flexDirection: "row",
    "&:last-child": {
      borderBottom: "none !important",
    },
    [theme.breakpoints.down(1250)]: {
      flexDirection: "column-reverse !important",
      alignItems: "center !important",
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 0),
    },
  },
  imgContainer: {
    justifyContent: "flex-end",
    [theme.breakpoints.down(1250)]: {
      justifyContent: "center",
    },
  },
  img: {
    width: "400px !important",
    [theme.breakpoints.down("sm")]: {
      width: "250px !important",
    },
  },
  icon: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 0.25),
  },
}));

const ProjectCard = ({ project }) => {
  const { title, imgUrl, blurb, url, sourceCode, technologies } =
    project.frontmatter;
  const { html } = project;
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(725));

  return (
    <>
      <Grid
        item
        sx={{
          padding: (theme) => theme.spacing(2, 0),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className={classes.cardRoot}
        onClick={() => setShowDescription(!showDescription)}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              fontWeight: 500,
              letterSpacing: 0.15,
              paddingRight: (theme) => theme.spacing(1),
            }}
          >
            {title}
          </Typography>
          {!isMobile && (
            <Typography color="textSecondary"> - {blurb}</Typography>
          )}
          <Grid
            item
            sx={{ display: "flex", paddingLeft: (theme) => theme.spacing(1) }}
          >
            {technologies.map((technology: string) => (
              <TechnologyIcon
                technology={technology}
                className={classes.icon}
                key={technology}
              />
            ))}
          </Grid>
        </Grid>
        <StyledButton onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? (
            <KeyboardArrowUp
              fontSize="small"
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            />
          ) : (
            <KeyboardArrowDown
              fontSize="small"
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            />
          )}
        </StyledButton>
      </Grid>
      {showDescription && (
        <Grid
          container
          sx={{
            flexWrap: "nowrap",
            alignItems: "space-between",
            justifyContent: "space-between",
          }}
          className={classes.expandedCard}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Grid item>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  letterSpacing: 0.15,
                }}
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            </Grid>

          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: "flex" }}
            className={classes.imgContainer}
          >
            <CardMedia
              component="img"
              image={imgUrl}
              alt={`${title} - ${blurb}`}
              className={classes.img}
              sx={{
                display: "unset",
                borderRadius: 2,
                margin: (theme) => theme.spacing(2),
              }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProjectCard;
