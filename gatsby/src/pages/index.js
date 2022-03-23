import * as React from 'react';
// import { graphql } from 'gatsby';
import Page from '../templates/page';

export default function HomePage(props) {
  console.log(props);
  return <div>Donkey</div>;
}

// export const query = graphql`
//   query {
//     page: sanityPage(slug: { current: { eq: "/" } }) {
//       title
//       slug {
//         current
//       }
//       _rawContent
//     }
//   }
// `;
