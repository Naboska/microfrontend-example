const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getPath = (...p) => path.resolve(process.cwd(), ...p);

const htmlPluginConfig = () => new HtmlWebpackPlugin({
  inject: false,
  template: getPath('src', 'html-template.ejs'),
  templateParameters: {
    isLocal: false,
  },
});

const copyPluginConfig = new CopyWebpackPlugin({
  patterns: [
    {from: 'public'}
  ]
});

module.exports = {
  entry: getPath('src', 'index.ts'),
  externals: ["single-spa", /^@mfe\/.+$/],
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false
  },
  output: {
    filename: "core.js",
    libraryTarget: "system",
    path: getPath('dist')
  },
  resolve: {
    alias: {
      lib: getPath('src/lib')
    },
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        parser: {
          system: false
        }
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
    htmlPluginConfig(),
    copyPluginConfig
  ],
};
