<template>
  <div>
    <div></div>
    <h1 class="text-4xl font-bold text-center py-5 mb-10">Lista de Productos</h1>
    <productos-component />
  </div>
</template>

<script>
import ProductosComponent from "../../components/productos/ProductosComponent.vue";

export default {
  components: {ProductosComponent },
  name: "ProductosVIew",
};
</script>

