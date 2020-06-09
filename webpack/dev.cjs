const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.cjs');

const apiLink = 'http://localhost:4444';

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    pathinfo: false,
    path: path.resolve(__dirname, './devBuild'),
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './dev-build'),
    hot: true,
    port: 3333,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: apiLink,
        changeOrigin: true,
      },
    ],
    https: true,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
