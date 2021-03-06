import Vue from 'vue';
import App from './vue/App.vue';
import store from './vuex';
import router from './router';

new Vue({
  el: '#app',
  components: {App},
  render: createEl => createEl('App'),
  store,
  router
});
