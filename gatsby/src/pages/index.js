import * as React from 'react';
import { graphql } from 'gatsby';
import Page from '../templates/page';

export default function HomePage(props) {
  return <Page {...props} />;
}

export const query = graphql`
  query {
    page: sanityPage(_id: { eq: "homePage" }) {
      title
      ...pageContent
    }
    allSanitySiteSettings {
      nodes {
        contact {
          email
          phone
        }
      }
    }
  }
`;
