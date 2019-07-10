const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './app/index.js'
  },
  output: {
    path: path.join(__dirname,'dist/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          { loader: 'less-loader'}
        ]
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader'}
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '前端工程化',
      template: './app/index.html'
    })
  ]
}