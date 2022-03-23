import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import * as React from 'react';
import Availability from '../components/Availability';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';

export default function Page({ data }) {
  console.log(data);
  const pageElements = data.page.content.map((element) => {
    let el = null;
    switch (element._type) {
      case 'banner':
        el = <Hero key={element._key} {...element} />;
        break;
      case 'highlights':
        el = <Highlights key={element._key} {...element} />;
        break;
      case 'availableSpace':
        el = <Availability key={element._key} {...element} />;
        break;
      case 'titleWithDescription':
        el = <Description key={element._key} {...element} />;
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
      content {
        ... on SanityBanner {
          _key
          _type
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          title
          text
        }
        ... on SanityAvailableSpace {
          _key
          _type
          title
          availabilitySelect {
            image {
              asset {
                gatsbyImageData(placeholder: BLURRED, width: 384)
              }
            }
            roomType
            text
            title
          }
        }
        ... on SanityHighlights {
          _key
          _type
          bottomHighlightsText {
            text
            title
          }
          firstImage {
            asset {
              gatsbyImageData(placeholder: BLURRED, width: 760)
            }
          }
          secondImage {
            asset {
              gatsbyImageData(placeholder: BLURRED, width: 760)
            }
          }
          topHighlightsText {
            text
            title
          }
        }
        ... on SanityTitleWithDescription {
          _key
          _type
          description
          title
        }
      }
    }
  }
`;

Page.propTypes = {
  data: PropTypes.object,
};
