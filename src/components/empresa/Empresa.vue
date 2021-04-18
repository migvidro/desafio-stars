<template>
  <Table title="Empresas" :headers="headers" :items="empresas" />
</template>

<script>
import Table from "../table/Table.vue";

export default {
  components: { Table },
  data() {
    return {
      empresas: [],
      headers: [
        { text: "Codigo", value: "codigo" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Nome", value: "nome" },
        { text: "Email", value: "email" },
        { text: "Telefone", value: "telefone" },
        { text: "Endereco", value: "endereco", sortable: false },
      ],
    };
  },
  mounted() {
    this.$http.get("empresas.json").then((res) => {
      this.empresas = Object.values(res.data);
    });
  },
};
</script>

<style></style>
