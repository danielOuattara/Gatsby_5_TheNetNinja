import * as React from "react";
import Layout from "./../components/Layout";
import * as styles from "./../styles/home.module.css";
import { Link, graphql } from "gatsby";
//------------------------------------------------------------

export default function Home(props) {
  // console.log(props.data);

  const { description, title } = props.data.site.siteMetadata;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop& Deploy</h3>
          <p>Ux designer & web developerbased in Combs la ville</p>
          <Link className={styles.btn} to="/projects">
            My portfolio project
          </Link>
        </div>
        <img src="/banner.png" alt="banner" style={{ maxWidth: "100%" }} />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
