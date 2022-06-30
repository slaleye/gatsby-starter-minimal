import * as React from "react";
import Layout from "../components/Layout";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page" pageHeading="Blog">
      {data.allMdx.nodes.map((node) => (
        <article>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

/** Doesn't matter how these are called */
export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "dddd, MMMM Do YYYY")
        }
        id
        body
      }
    }
  }
`;

export default Blog;
