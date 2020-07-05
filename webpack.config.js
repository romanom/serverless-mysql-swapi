const path = require('path');
const webpack = require('webpack');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpack = require('copy-webpack-plugin');
const env = process.env.NODE_ENV || 'development';


module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  devtool: 'nosources-source-map',
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new CopyWebpack([
      { from: 'src/i18n/json', to: 'i18n/json' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'helpers': path.resolve(__dirname, 'src/helpers'),
      'database': path.resolve(__dirname, 'src/database'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'controllers': path.resolve(__dirname, 'src/controllers'),
      'repositories': path.resolve(__dirname, 'src/database/repositories'),
      'services': path.resolve(__dirname, 'src/services'),
      'requests': path.resolve(__dirname, 'src/requests'),
      'dtos': path.resolve(__dirname, 'src/dtos'),
    }
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  }
}