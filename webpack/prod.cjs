const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./common.cjs')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },
  plugins: [new CleanWebpackPlugin(), new webpack.HashedModuleIdsPlugin()],
})
