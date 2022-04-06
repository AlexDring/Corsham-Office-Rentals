import { graphql, useStaticQuery } from 'gatsby';

export const useContact = () => {
  const data = useStaticQuery(graphql`
    query {
      sanitySiteSettings {
        contact {
          phone
          email
        }
      }
    }
  `);

  return data.sanitySiteSettings.contact;
};
