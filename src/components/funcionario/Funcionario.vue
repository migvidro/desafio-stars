<template>
  <Table title="Funcionários" :headers="headers" :items="funcionarios" orig="F"/>
</template>

<script>
import Table from "../table/Table.vue";

export default {
  components: { Table },
  data() {
    return {
      funcionarios: [],
      headers: [
        { text: "Código", value: "codigo" },
        { text: "CPF", value: "cpf" },
        { text: "Nome", value: "nome" },
        { text: "Email", value: "email" },
        { text: "Telefone", value: "telefone" },
        { text: "Endereço", value: "endereco", sortable: false },
        { text: "Empresa", value: "empresa" },
      ],
    };
  },
  mounted() {
    this.$http.get("funcionarios.json").then((res) => {
      this.funcionarios = Object.values(res.data);
    });
  },
};
</script>

<style></style>
