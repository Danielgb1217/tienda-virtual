<template>
  <div>
    <productos-por-categoria />
  </div>
</template>

<script>
import ProductosPorCategoria from "../../components/productos/ProductosPorCategoria.vue";
export default {
  components: { ProductosPorCategoria },
  name: "ProductosCategoriasView.vue",
};
</script>
