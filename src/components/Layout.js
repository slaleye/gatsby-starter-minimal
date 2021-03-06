import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle, 
} from "./layout.module.css";

const Layout = ({ pageTitle, pageHeading, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  console.log(data)

  return (
    <div className={container}>
      <title> {pageTitle} | {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav >
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">Blog</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageHeading}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
