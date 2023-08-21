import * as React from "react";
import Layout from "./../components/Layout";
import * as styles from "./../styles/home.module.css";
import { Link } from "gatsby";
export default function Home() {
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
        <img src="/banner.png" alt="banner" className={styles.banner} />
      </section>
    </Layout>
  );
}
