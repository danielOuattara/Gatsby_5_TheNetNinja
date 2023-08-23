import React from "react";
import Layout from "../../components/Layout";
import * as styles from "./../../styles/project.module.css";
import { graphql, Link } from "gatsby";

export default function Projects(props) {
  console.log(props);
  const projects = props.data.projects.nodes;
  const contact = props.data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <div className={styles.projects}>
          {projects.map((project) => {
            return (
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <p>Like what you see ? Email me at {contact} for a quote</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          slug
          stack
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
