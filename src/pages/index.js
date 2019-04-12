import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allContentfulJokes {
            nodes {
              title
              body {
                body
              }
            }
          }
        }
      `}
      render={({ allContentfulJokes: { nodes } }) => {
        return nodes.map((v, i) => {
          return (
            <React.Fragment key={`key${i}`}>
              <h2>{v.title}</h2>
              <p>{v.body.body}</p>
              <hr />
            </React.Fragment>
          );
        });
      }}
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
