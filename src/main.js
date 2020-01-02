import Vue from 'vue';
import App from './App.vue';

import UI from './index.js';
Vue.use(UI);

new Vue({
  el: '#app',
  render: h => h(App)
})
