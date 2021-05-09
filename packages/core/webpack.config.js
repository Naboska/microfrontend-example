const path = require('path');

const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const CopyPlugin = require('copy-webpack-plugin');

const getPath = (...p) => path.resolve(process.cwd(), ...p);

const alias = {
  lib: getPath('src/lib'),
};

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mfe',
    projectName: 'core',
    webpackConfigEnv,
    disableHtmlGeneration: true
  });

  return merge(defaultConfig, {
    resolve: {
      alias
    },
    devServer: {
      hot: true,
      port: 3025,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "public/", to: '.', force: true },
        ],
      }),
    ]
  })
}