<template>
  <div id="app">
    <v-app>
      <Navbar />
      <router-view />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  components: { Navbar, Footer },
  data() {
    return {};
  },
};
</script>

<style>
body {
  font-family: Roboto, sans-serif;
}
</style>
