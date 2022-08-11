// main.js
requirejs.config({
   baseUrl: 'https://cdn.xxx.com',
   map: {
      '*': {
         css: 'require-css',
      },
   },
   paths: {
      echarts: 'echarts@5.1.1',
      vueDemo: 'vue-demo',
      vue: 'vue@3.2.37',
      moment: 'https://cdn/moment@2.29.1.min',
   },
   shim: {
      'ant-design-vue': ['css!https://cdn/ant-design-vue@2.1.6.min.css'],
   },
});

requirejs(['vue', 'vue-demo', 'vue-app'], function (vue, vueDemoModule, VueAppModule) {
   const app = Vue.createApp(VueAppModule.default);
   app.component('vue-demo', vueDemoModule.default);
   const vm = app.mount('#app');
});