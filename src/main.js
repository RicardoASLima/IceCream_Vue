import  Vue from 'vue';
import VueRouter from 'vue-router';
import App from './Pedidos.vue';
import Home from './components/Home.vue';
import Confirma from './components/Confirma.vue';
import Lista from './components/Lista.vue';
import Produtos from './components/Produtos.vue';
import Sabores from './components/Sabores.vue';
import Adicionais from './components/Adicionais.vue';


Vue.use (VueRouter);

const router =  new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/confirma',
            name: 'Confirma',
            component: Confirma
        },
        {
            path: '/lista',
            name: 'Lista',
            component: Lista
        },
        {
            path: '/produtos',
            name: 'Produtos',
            component: Produtos
        },
        {
            path: '/sabores',
            name: 'Sabores',
            component: Sabores
        },
        {
            path: '/adicionais',
            name: 'Adicionais',
            component: Adicionais
        }
    ]
})


Vue.config.productionTip = false

new Vue ({
    router,
    render: h=> h(App),
}).$mount('#app')
