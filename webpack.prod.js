const Webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  devtool: 'source-map',
  mode: "production",
  plugins: [
    //代码压缩
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new Webpack.DefinePlugin({
      //为开发环境提供 环境标识变量
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
