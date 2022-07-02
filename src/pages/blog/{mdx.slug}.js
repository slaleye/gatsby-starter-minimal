import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPostPage = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} pageHeading={data.mdx.frontmatter.title}>
        <article>
          <h2>{data.mdx.frontmatter.title}</h2>
          <p><i>Published on: {data.mdx.frontmatter.date}</i></p>
          <p><i>Last Updated: {data.mdx.parent.modifiedTime}</i></p>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String){
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "dddd, MMMM Do YYYY")
      }
      body
      parent {
        ... on File {
          modifiedTime(fromNow: true)
        }
      }
    }
  }
`;

export default BlogPostPage;
