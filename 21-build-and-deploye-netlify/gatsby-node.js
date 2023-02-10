const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug, // route for the page
      component: path.resolve("./src/templates/ProjectDetails.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
