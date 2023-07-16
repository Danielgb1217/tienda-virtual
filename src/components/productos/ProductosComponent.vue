<template>
  <div class="container w-11/12 text-center content-center mx-auto">
    <div class="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="producto in productos" :key="producto.id">
        <card-producto-component
          :image="producto.main_image"
          :name="producto.name"
          :price="parseFloat(producto.price)"
          :ruta="{name: 'detalle-producto', params:{id: producto.id}}"
        />
      </div>
    </div>
  </div>
</template>
  <!-- Recupero los productos y como tienen el atributo id se envia por parametro a la url solicitada, con esta id se recupera el producto especifico -->
  <script>
import CardProductoComponent from "../productos/CardProductoComponent.vue";
import apiProductos from "../../api/productos";

export default {
  components: {
    CardProductoComponent,
  },
  name: "ProductosComponent",
  data() {
    return {
      productos: [],
    };
  },
  methods: {
    cargarProductos: function () {
      apiProductos.productos().then((response) => {
        //console.log(response.data.results);
        this.productos = response.data.results;
      });
    },
  },
  mounted() {
    this.cargarProductos();
  },
};
</script>
  
