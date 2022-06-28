import * as React from "react";
import Layout from "../components/Layout";

import { graphql } from "gatsby";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page" pageHeading="Blog">
      <ul>
        {data.allFile.nodes.map((node) => (
           <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

/** Doesn't matter how these are called */
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
