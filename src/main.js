import Vue from 'vue'
import App from './App.vue'
import TechnicalTest from './plugins/technical-test';

Vue.config.productionTip = false

Vue.use(TechnicalTest);

new Vue({
  render: h => h(App),
}).$mount('#app')
