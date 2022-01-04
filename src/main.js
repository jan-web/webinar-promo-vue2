import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue2-animate/dist/vue2-animate.min.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
