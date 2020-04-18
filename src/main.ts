import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import { MdCard, MdButton, MdRipple, MdField, MdIcon, MdProgress } from 'vue-material/dist/components'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdRipple);
Vue.use(MdField);
Vue.use(MdIcon);
Vue.use(MdProgress);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
