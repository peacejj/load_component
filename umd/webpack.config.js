// 组件打包 Webpack 配置
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './comps/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'umd' }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  externals: {
    vue: 'vue',
    lodash: 'lodash',
  }
};