import { graphql } from 'gatsby';
import * as React from 'react';
import Availability from '../components/Availability';
import { Description } from '../components/Description';
import Hero from '../components/Hero';
import { Highlights } from '../components/Highlights';

export default function Page({ data }) {
  const pageElements = data.page._rawContent.map((element) => {
    let el = null;
    switch (element._type) {
      case 'banner':
        el = <Hero {...element} />;
        break;
      case 'highlights':
        el = <Highlights {...element} />;
        break;
      case 'availableSpace':
        el = <Availability {...element} />;
        break;
      case 'titleWithDescription':
        el = <Description {...element} />;
        break;
      default:
        el = null;
        break;
    }
    return el;
  });

  return <main>{pageElements}</main>;
}

export const query = graphql`
  query ($slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      _rawContent
    }
  }
`;
