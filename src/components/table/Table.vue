<template>
  <div>
    <h1 class="pageTitle">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.pageTitle {
    color: #091D31;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 10px 0px;
}
</style>