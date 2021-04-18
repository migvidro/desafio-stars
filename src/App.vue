<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";

export default {
  components: { Navbar },
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
