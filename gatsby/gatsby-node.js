const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Page template
  const pageTemplate = path.resolve('./src/templates/page.js');
  // Query pages
  const { data } = await graphql(`
    query {
      pages: allSanityPage {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // Loop over pages and create page for each
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
