<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
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
