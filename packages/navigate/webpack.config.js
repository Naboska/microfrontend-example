const path = require('path');

const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const getPath = (...p) => path.resolve(process.cwd(), ...p);

const alias = {
  lib: getPath('src/lib'),
  templates: getPath('src/templates'),
};

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mfe',
    projectName: 'navigate',
    webpackConfigEnv
  });

  return merge(defaultConfig, {
    resolve: {
      alias,
      extensions: ['.ts', '.ejs', '.js', '.css'],
    },
    devServer: {
      hot: true,
      port: 3028,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
    ]
  })
};