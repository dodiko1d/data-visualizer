// Vue import.
import Vue from 'vue'

// Main app import.
import App from './App.vue'

// Plugins import.
import {
  BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons,
  LayoutPlugin
} from 'bootstrap-vue'

import './assets/scss/vue-bootstrap.scss'


// Vue modules adding to entry point ("main.js").
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(LayoutPlugin);


// Vue components integration.
import './assets/js/components_import.js';


// App's rendering for "index.html".
new Vue({
  el: '#app',
  render: h => h(App)
});
