<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark class="tableButton" v-bind="attrs" v-on="on">
          Novo Item
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline" v-if="orig === 'E'">Empresa</span>
          <span class="headline" v-else>Funcionário</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  v-model="editedItem.codigo"
                  label="Código"
                ></v-text-field>
              </v-col>
              <v-col cols="8" v-if="orig === 'E'">
                <v-text-field
                  v-model="editedItem.cnpj"
                  label="CNPJ"
                ></v-text-field>
              </v-col>
              <v-col cols="8" v-else>
                <v-text-field
                  v-model="editedItem.cpf"
                  label="CPF"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.nome"
                  label="Nome"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="editedItem.email"
                  label="Email"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="editedItem.telefone"
                  label="Telefone"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.endereco"
                  label="Endereço"
                ></v-text-field>
              </v-col>
              <v-col cols="12" v-if="orig === 'F'">
                <v-text-field
                  v-model="editedItem.empresa"
                  label="Empresa"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["orig", "itemToEdit"],
  data() {
    return {
      dialog: false,
      editFlag: false,
      editedItem: {
        nome: "",
        cnpj: "",
        cpf: "",
        codigo: "",
        email: "",
        telefone: "",
        endereco: "",
        empresa: "",
      },
      defaultItem: {
        nome: "",
        cnpj: "",
        cpf: "",
        codigo: "",
        email: "",
        telefone: "",
        endereco: "",
        empresa: "",
      },
    };
  },
  watch: {
    itemToEdit() {
      this.editedItem = this.itemToEdit;
      this.editFlag = true;
      this.dialog = true;
    },
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.editFlag = false;
      this.editedItem = Object.assign({}, this.defaultItem);
    },
    save() {
      const table = this.orig === "E" ? "empresas" : "funcionarios";

      if (this.editFlag) {
        this.saveEditedItem(this.editedItem, table);
      } else {
        this.saveNewItem(this.editedItem, table);
      }
      this.closeDialog();
    },
    saveNewItem(item, table) {
      this.$http.post(`${table}.json`, item).then(() => {
        this.$emit('canReload');
      });
    },
    saveEditedItem(item, table) {
      this.$http.patch(`${table}/${item.key}.json`, item).then(() => {
        this.$emit('canReload');
      });
    },
    reload(table) {
      this.$http.get(`${table}.json`);
    },
  },
};
</script>

<style scoped>
.tableButton {
  background-color: #091d31;
  color: #fdd92d;
}
</style>
