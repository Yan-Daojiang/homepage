import React, { FC } from "react";
import { Grid } from "@mui/material";
import ProjectCard from "../components/project/Project";
import Card from "../components/project/Card";
import { useStaticQuery, graphql, Node } from "gatsby";

const ProjectsPage: FC = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              type
              url
              sourceCode
              imgUrl
              blurb
              date
              technologies
            }
            html
          }
        }
      }
    }
  `);
  const projects = data.allMarkdownRemark.edges.map(({ node }: Node) => node);

  return (
    <Card>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          minWidth: "40vw",
          borderRadius: 10,
          padding: "2rem",
        }}
      >
        {projects &&
          projects.map((project) => {
            return (
              <ProjectCard project={project} key={project.frontmatter.title} />
            );
          })}
      </Grid>
    </Card>
  );
};

export default ProjectsPage;
