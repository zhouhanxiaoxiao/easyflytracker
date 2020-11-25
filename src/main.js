import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import i18n from "@/i18n";
import 'iview/dist/styles/iview.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import iView from "iview";

Vue.use(iView);

Vue.prototype.$ = $;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
