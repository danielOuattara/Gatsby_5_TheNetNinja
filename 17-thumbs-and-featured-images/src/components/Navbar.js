import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  // console.log(data);

  const { title } = data.site.siteMetadata;
  return (
    <nav>
      <h1> {title || `Web Warrior`}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  );
}
