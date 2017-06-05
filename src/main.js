// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import add from './components/add'
// import search from './components/search'

Vue.config.productionTip = false
Vue.use(router);

// const routes = [{
//   path: '/add',
//   component: add
// }, {
//   path: '/search',
//   component: search
// }];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
