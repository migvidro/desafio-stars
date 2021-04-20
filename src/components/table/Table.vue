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
          <Dialog :orig="orig" :itemToEdit="itemToEdit" @canReload="reload" />
          <v-dialog v-model="dialogDelete" max-width="560px">
            <v-card>
              <v-card-title class="headline"
                >Tem certeza de que quer deletar esse registro?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDialogDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >Sim</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      <template v-slot:no-data>
        Nenhum registro encontrado
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
    return {
      dialogDelete: false,
      itemToDelete: {},
      itemToEdit: {},
    };
  },
  methods: {
    deleteItem(item) {
      this.dialogDelete = true;
      this.itemToDelete = Object.assign({}, item);
    },
    deleteItemConfirm() {
      const table = this.orig === "E" ? "empresas" : "funcionarios";
      this.$http.delete(`${table}/${this.itemToDelete.key}.json`).then(() => {
        this.closeDialogDelete();
        this.reload();
      });
    },
    editItem(item) {
      this.itemToEdit = item;
    },
    closeDialogDelete() {
      this.dialogDelete = false;
      this.itemToDelete = {};
    },
    reload() {
      const table = this.orig === "E" ? "empresas" : "funcionarios";
      this.$http.get(`${table}.json`).then((res) => {
        const objKeys = Object.keys(res.data);
        this.items = Object.values(res.data);
        this.items.forEach((item, index) => {
          item.key = objKeys[index];
        });
      });
    },
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
</style>
