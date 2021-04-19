<template>
  <v-footer padless absolute class="footer">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — Made with <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  text-align: center;
}
</style>
