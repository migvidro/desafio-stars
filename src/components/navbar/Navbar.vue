<template>
  <div>
    <v-app-bar :color="backgroundColor">
      <v-icon :color="'#FDD92D'">mdi-star-half-full</v-icon>
      <v-app-bar-title class="navbarTitle">Stars Poker Club</v-app-bar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundColor: "#091D31",
    };
  },
};
</script>

<style scoped>
.navbarTitle {
  color: #FDD92D;
  font-family: Roboto, sans-serif;
  font-weight: 400;
}
</style>
