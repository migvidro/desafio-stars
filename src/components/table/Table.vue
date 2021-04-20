<template>
  <div>
    <h1 class="pageTitle">{{ title }}</h1>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      loading-text="Carregando..."
      class="elevation-1 ml-4 mr-4"
      sort-by="codigo"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <Dialog :orig="orig" />
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
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
  methods: {},
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
</style>
