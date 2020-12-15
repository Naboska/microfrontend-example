const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getPath = (...p) => path.resolve(process.cwd(), ...p);

module.exports = {
  externals: ['vue', 'css-vars-adapter'],
  entry: getPath('src', 'index.ts'),
  target: 'web',
  devtool: 'source-map',
  mode: 'development',
  optimization: {
    minimize: false,
  },
  output: {
    filename: 'mfe-championship-map.js',
    libraryTarget: 'system',
    path: getPath('dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      vue: '@vue/runtime-dom',
      components: getPath('src/components'),
      pages: getPath('src/pages'),
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
};
