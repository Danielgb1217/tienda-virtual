<template>
    <div>
      <producto-detail />
    </div>
  </template>
  
  <script>
  import ProductoDetail from "../../components/productos/ProductoDetail.vue";
  
  export default {
    name: "ProductoDetailView",
    components: {
      ProductoDetail,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>