import React, { FC } from "react";
import {
  Card as MUICard,
  Grid,
  lighten,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { useStaticQuery, graphql } from "gatsby";

import SocialButtonGroup from "../SocialButtonGroup";
import Headshot from "../Headshot";

const Card: FC<{ children: JSX.Element }> = ({ children }) => {
  const isLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const isBetween = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("lg", 1600)
  );
  const isXtra = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between(1600, 2000)
  );
  const isQHD = useMediaQuery((theme: Theme) => theme.breakpoints.up(2000));
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(640));

  const getWidth = () => {
    if (isMobile) {
      return "95vw";
    } else if (isTablet) {
      return "80vw";
    } else if (isLarge && !isBetween && !isXtra && !isQHD) {
      return "55vw";
    } else if (isBetween) {
      return "75vw";
    } else if (isXtra && !isQHD) {
      return "60vw";
    } else if (isQHD) {
      return "40vw";
    }
  };

  const data = useStaticQuery(graphql`
    query GitHubStats {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "stats" } } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);
  const node = data.allMarkdownRemark.edges[0].node;

  return (
    <MUICard
      raised
      sx={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 3,
        backgroundColor: `${lighten("#f5ede6", 0.45)} !important`,
        margin: (theme) => theme.spacing(8, 0),
        minWidth: {
          lg: "16vw",
          md: "40vw",
          sm: "40vw",
        },
        maxWidth: {
          md: "80vw",
          sm: "80vw",
        },
      }}
    >
      <Grid
        container
        sx={(theme) => ({
          justifyContent: "center",
          flexDirection: {
            xl: "column",
            lg: "column",
            md: "row",
            sm: "row",
            xs: "row",
          },
          maxWidth: getWidth(),
          padding: {
            xl: theme.spacing(2),
            lg: theme.spacing(2),
            md: theme.spacing(2),
            sm: 0,
            xs: 0,
          },
        })}
      >
        <Grid
          container
          sx={{ justifyContent: "space-around", alignItems: "center" }}
        >
          <Headshot />
          {!isMobile && (
            <Grid
              container
              sx={{
                justifyContent: {
                  md: "center",
                  sm: "center",
                  xs: "center",
                },
                width: 495,
                height: 195,
              }}
            >
              <Grid
                item
                key={node.title}
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </Grid>
          )}
        </Grid>
        {children}
      </Grid>
      <SocialButtonGroup />
    </MUICard>
  );
};

export default Card;
