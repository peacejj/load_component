import Component from '../demo/a.vue';

if(!window.share) {
  window.share = {};
}

window.share[Component.name] = Component;
