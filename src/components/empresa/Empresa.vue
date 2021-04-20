<template>
  <Table title="Empresas" :headers="headers" :items="empresas" orig="E" />
</template>

<script>
import Table from "../table/Table.vue";

export default {
  components: { Table },
  data() {
    return {
      empresas: [],
      headers: [
        { text: "Código", value: "codigo" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Nome", value: "nome" },
        { text: "Email", value: "email" },
        { text: "Telefone", value: "telefone" },
        { text: "Endereço", value: "endereco", sortable: false },
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
