import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              description
            }
          }
        }
      `}
      render={data => {
        return (
          <h1>{data.site.siteMetadata.description}</h1>
        );
      }}
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
