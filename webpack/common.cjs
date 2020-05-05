const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const htmlConfig = require('./htmlConfig.cjs')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index.tsx'],
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: ['ts-loader', 'eslint-loader']
      }
      // {
      //   test: /\.m?js$/,
      //   include: path.resolve(__dirname, '../src'),
      //   use: ['babel-loader']
      // }
    ]
  },
  plugins: [
    new CopyPlugin([{ from: './public', to: './' }]),
    new Dotenv(),
    new htmlWebpackPlugin(htmlConfig)
  ]
}
