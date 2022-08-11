import path from 'path';
import VueLoader from 'vue-loader';

const VueLoaderPlugin = VueLoader.VueLoaderPlugin;

const __dirname = path.resolve();

export default {
  mode: 'development',
  entry: path.resolve(__dirname, './src/vue-demo.vue'),
  output: {
    filename: 'vue-demo.esm.js',
    path: path.resolve(__dirname, 'components'),
    library: { type: 'module' }
  },
  experiments: { outputModule: true },
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
    vue: 'https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.esm-browser.js',
    'lodash': 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.js'
  }
};

/**
 * 使用上述配置打包后产物，中会把 'vue' 替换为 externals 中的 cdn 地址
 * 
 * // 输入
 * import Vue from 'vue';
 * 
 * // 输出结果
 * import Vue from 'https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.esm-browser.js';
 * 
 */