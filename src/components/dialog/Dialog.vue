<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
        New Item
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
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
            <v-col cols="8">
              <v-text-field
                v-model="editedItem.cnpj"
                label="CNPJ"
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
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">
          Cancelar
        </v-btn>
        <v-btn color="blue darken-1" text @click="console.log('save')">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      edit: false,
      editedItem: {
        nome: "",
        cnpj: "",
        codigo: "",
        email: "",
        telefone: "",
        endereco: "",
      },
      defaultItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    };
  },
  computed: {
    formTitle() {
      return !this.edit ? "Novo Item" : "Editar Item";
    },
  },
  methods: {
      closeDialog(){
          this.dialog = false;
      }
  }
};
</script>

<style></style>
