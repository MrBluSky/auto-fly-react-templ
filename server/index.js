const express = require('express');
const path = require('path');
const fs = require('fs');
const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = process.env.NODE_ENV == 'production' ? require('../webpack.prod.js') : require('../webpack.dev.js');

const proxy = require('http-proxy-middleware');
const app = express();

const compiler = Webpack(webpackConfig);

app.use(WebpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {colors: true},
  lazy: false
}));
app.use(WebpackHotMiddleware(compiler));

app.use(proxy('/api', { 
  target: 'http://localhost:3000/'
}));

app.listen(3003, ()=> {
  console.log('服务已启动正在监听3003端口');
})