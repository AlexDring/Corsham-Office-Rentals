const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('./src/templates/page.js');
  const { data } = await graphql(`
    query {
      pages: allSanityPage(filter: { slug: { current: { ne: null } } }) {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);

  data.pages.nodes.forEach((page) => {
    console.log(`Creating page from ${page.title}`);
    createPage({
      path: `${page.slug.current}`,
      component: pageTemplate,
      context: {
        title: page.title,
        slug: page.slug.current,
      },
    });
  });
};
