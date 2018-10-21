const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
  	rules: [
  	  {
  	  	test: /\.(js|jsx)$/,
  	  	use: {
  	  	  loader: 'babel-loader',
  	  	  options: {
  	  	  	presets: [
              "@babel/preset-env",
              "@babel/preset-react"
  	  	  	]
  	  	  }
  	  	},
  	  	exclude: /node_modules/
  	  }
  	]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      inject: true
    })
  ],
  devServer: {
    contentBase: './build'
  }
};