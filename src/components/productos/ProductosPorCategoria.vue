<template>
    <div class="w-4/5 mx-auto my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
      <div class="container" v-for="producto in productos" :key="producto.id">
        <card-producto-component class="w-4/5 h-64 mb-12" 
          :image="producto.main_image"
          :name="producto.name"
          :price="parseFloat(producto.price)"
          :ruta="{name: 'detalle-producto', params:{id: producto.id}}"
        />
      </div>
    </div>
  </template>
  
  <script>
  import apiProductos from "../../api/productos";
  import CardProductoComponent from "../../components/productos/CardProductoComponent.vue";
  
  export default {
    name: "ProductosPorCategoria",
    components: {
      CardProductoComponent,
    },
    data() {
      return {
        productos: [],
      };
    },
    watch:{
  '$route.params.category': function(){
      this.filtrarProductos()
  }
    },
    methods: {
      filtrarProductos: function () {
        let filtro = "category=" + this.$route.params.category; //con route puedo obtener el valor del parametro enviado por get
        apiProductos.filtrarProductos(filtro).then((response) => {
          this.productos = response.data.results;
        });
      },
    },
    beforeMounted() {
      this.filtrarProductos();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>