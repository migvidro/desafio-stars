import Vue from "vue";
import Router from "vue-router";
import Empresa from "./components/empresa/Empresa.vue";
import Funcionario from "./components/funcionario/Funcionario.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Empresa
    },
    {
      path: "/funcionarios",
      component: Funcionario
    },
  ],
});
