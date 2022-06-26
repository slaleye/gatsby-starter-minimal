import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageTitle="Welcome to Tiny Dogs" pageHeading="Tiny Dogs House">
      <p> <q>Salomon is a great web developer</q> Quote from Aliz</p>
      <StaticImage
        alt="happy little white dog running"
        src="../images/littlewhitedogrunning.jpg"
      />
    </Layout>
  );
};

export default HomePage;
