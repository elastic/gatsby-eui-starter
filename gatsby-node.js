/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      plugins: [
        plugins.define({
          HTMLElement: {},
          window: {},
        }),
      ],
    });
  }
};
