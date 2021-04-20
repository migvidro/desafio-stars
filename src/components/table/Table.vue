<template>
  <div>
    <h1 class="pageTitle">{{ title }}</h1>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="elevation-1 ml-4 mr-4"
      sort-by="codigo"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <Dialog :orig="orig" class="tableButton"/>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Dialog from "../dialog/Dialog.vue";

export default {
  components: { Dialog },
  props: ["title", "headers", "items", "orig"],
  data() {
    return {};
  },
};
</script>

<style>
.pageTitle {
  color: #091d31;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: center;
  margin: 10px 0px;
}
td {
  text-align: center;
}
.tableButton {
  align-self: left;
}
</style>
