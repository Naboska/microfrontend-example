const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const getPath = (...p) => path.resolve(process.cwd(), ...p);

module.exports = {
  target: 'web',
  entry: getPath('src', 'index.ts'),
  externals: ["single-spa", /^@mfe\/.+$/],
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false
  },
  output: {
    filename: "mfe-navigate.js",
    libraryTarget: "system",
    path: getPath('dist'),
    jsonpFunction: `webpackJsonp_sspahtmlwithjs`,
  },
  resolve: {
    alias: {
      lib: getPath('src/lib'),
      templates: getPath('src/templates'),
    },
    extensions: ['.ts', '.ejs'],
  },
  module: {
    rules: [
      {
        parser: {
          system: false
        }
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{loader: "babel-loader"}]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
