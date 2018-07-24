const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const distDir = path.join(__dirname, 'dist');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: distDir,
      filename: 'index.js',
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', { 'modules': false, }, ],
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Dotenv(),
      new CopyWebpackPlugin(),
    ],
  },
];
