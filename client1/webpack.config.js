const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  mode: 'development',
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.js', '.vue'],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: '/dist',
    filename: '[name].bundle.js',
  },

  // Customize the webpack build process
  plugins: [
    // Vue plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },

  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
  },
}
