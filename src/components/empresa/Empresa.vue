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
        { text: "Ações", value: "actions", sortable: false },
      ],
    };
  },
  mounted() {
    this.$http.get("empresas.json").then((res) => {
      const objKeys = Object.keys(res.data);
      this.empresas = Object.values(res.data);
      this.empresas.forEach((empresa, index) => {
        empresa.key = objKeys[index];
      });
    });
  },
};
</script>

<style></style>
