import * as React from "react";
import Layout from "./../components/Layout";
import * as styles from "./../styles/home.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
//------------------------------------------------------------

export default function Home(props) {
  const { description, title } = props.data.site.siteMetadata;
  const image = getImage(props.data.file.childImageSharp);

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Ux designer & web developerbased in Combs la ville</p>
          <Link className={styles.btn} to="/projects">
            My portfolio project
          </Link>
        </div>
        <GatsbyImage image={image} alt="banner" />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfoAndBanner {
    site {
      siteMetadata {
        description
        title
      }
    }
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
