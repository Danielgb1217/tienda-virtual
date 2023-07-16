<template>
  <div>
    <div v-if="producto">
      <img class="mt-7 w-full h-80 mx-auto" :src="producto.main_image" />
      <div class="">
        <div class="mx-auto sm:flex ">
          <img class="mt-3 sm:mr-3 mx-auto w-28 h-28" :src="producto.second_image" />
          <img class="mt-3 sm:ml-3 mx-auto w-28 h-28" :src="producto.third_image" />
        </div>
      </div>
      <div>
        <h3 class="font-bold">{{ producto.name }}</h3>
        <p>
          <span v-for="categoria in producto.category" :key="categoria.id">
            {{ categoria.name }}
          </span>
        </p>
        <p>
          <span
            v-for="color in producto.colors"
            :key="color.id"
            :style="{ background: color.value }"
          >
          </span>
        </p>
        <p>{{ producto.price }}</p>
      </div>
      <div>
        <p v-html="producto.description"></p>
      </div>
    </div>
  </div>
</template>
  
  <script>
import apiProductos from "../../api/productos";
export default {
  name: "ProductoDetail",
  data() {
    return {
      producto: null,
    };
  },
  methods: {
    obtenerProducto: function () {
      apiProductos.obtenerProductos(this.$route.params.id).then((response) => {
        this.producto = response.data;
      });
    },
  },
  beforeMount() {
    this.obtenerProducto();
  },
};
</script>