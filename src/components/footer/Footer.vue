<template>
  <v-footer padless absolute class="footer" :color="'#091D31'">
    <v-col class="footerText" cols="12">
      {{ new Date().getFullYear() }} — Made with <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  text-align: center;
}
.footerText{
  color: #FDD92D;
}
</style>
