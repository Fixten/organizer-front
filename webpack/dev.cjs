const path = require('path')
const webpack = requre('webpack')
const merge = require('webpack-merge')
const common = requrie('./common.cjs')

const apiLink = 'http://localhost:3001'

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    pathinfo: false,
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true,
    port: 3000,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api', '/avatars', '/logos', '/portfolios'],
        target: apiLink,
        changeOrigin: true
      }
    ],
    quiet: true,
    https: true
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.js$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
