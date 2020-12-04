const path = require('path');
const merge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

const getPath = (...p) => path.resolve(process.cwd(), ...p);

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mfe',
    projectName: 'post',
    webpackConfigEnv
  });

  return merge.smart(defaultConfig, {
    resolve: {
      alias: {
        pages: getPath('src/pages')
      }
    }
  });
};
