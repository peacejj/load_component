const list = ref([]);

const addComp = async () => {
  const VueDemo = await import(/* @vite-ignore */`http://cdn/components/vue-demo.esm.js`)
  window.app.component('vue-demo', VueDemo.default);
  list.value.push({ key: new Date().valueOf(), name: 'vue-demo' });
}