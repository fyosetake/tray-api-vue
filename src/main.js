import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import CadastrarVendedor from './components/CadastrarVendedor.vue';
import CadastrarVenda from './components/CadastrarVenda.vue';
import EditarVendedor from './components/EditarVendedor.vue';
import ListarVendas from './components/ListarVendas.vue';
import ListarVendedores from './components/ListarVendedores.vue';
import ListarVendasVendedor from './components/ListarVendasVendedor.vue';
import ExcluirVendedor from './components/ExcluirVendedor.vue';
import PaginaInicial from './components/PaginaInicial.vue';
import AutenticarUsuario from './components/AutenticarUsuario.vue';
import RegistrarUsuario from './components/RegistrarUsuario.vue';

const routes = [
    { path: '/autenticar-usuario', component: AutenticarUsuario },
    { path: '/registrar-usuario', component: RegistrarUsuario },
    { path: '/pagina-inicial', component: PaginaInicial },
    { path: '/cadastrar-vendedor', component: CadastrarVendedor },
    { path: '/cadastrar-venda', component: CadastrarVenda },
    { path: '/editar-vendedor', component: EditarVendedor },
    { path: '/listar-vendas', component: ListarVendas },
    { path: '/listar-vendedores', component: ListarVendedores },
    { path: '/listar-vendas-vendedor', component: ListarVendasVendedor },
    { path: '/excluir-vendedor', component: ExcluirVendedor }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');