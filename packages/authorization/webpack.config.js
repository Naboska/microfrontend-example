const merge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'bizzen',
    projectName: 'authorization',
    webpackConfigEnv
  });

  return merge.smart(defaultConfig);
};
