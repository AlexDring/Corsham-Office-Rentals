import * as React from 'react';
import { graphql } from 'gatsby';
import Page from '../templates/page';

export default function HomePage(props) {
  console.log(props);
  return <Page {...props} />;
  // return <div>ASDASD</div>;
}

export const query = graphql`
  query {
    page: sanityPage(_id: { eq: "homePage" }) {
      title
      ...pageContent
    }
  }
`;
