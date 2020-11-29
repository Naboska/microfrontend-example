const merge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mfe',
    projectName: 'post',
    webpackConfigEnv
  });

  return merge.smart(defaultConfig);
};
