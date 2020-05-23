const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const htmlConfig = require('./htmlConfig.cjs');
const htmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  entry: ['./src/index.tsx'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
          'eslint-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: './public', to: './' }] }),
    new Dotenv(),
    new htmlWebpackPlugin(htmlConfig),
  ],
};
