import * as React from "react";
import Layout from "../../components/Layout";

import { graphql, Link } from "gatsby";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page" pageHeading="Blog">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li>
            <Link to={node.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
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
        slug
      }
    }
  }
`;

export default Blog;
