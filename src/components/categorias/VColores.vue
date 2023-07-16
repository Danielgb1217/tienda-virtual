<template>
  <div>
    <ul class="block mt-9 sm:flex justify-center">
      <li class="border border-l-black w-6 h-5  mx-3" v-for="color in colores" :key="color.id">
        <a
          href=""
          
          :style="{ background: color.value }" 
        >
          color
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import apiColores from "../../api/colores";
export default {
  name: "VColores",
  data() {
    return {
      colores: [],
    };
  },
  methods: {
    cargarColores: function () {
      apiColores.colores().then((response) => {
        this.colores = response.data;
      });
    },
  },
  beforeMount() {
    this.cargarColores();
  },
};
</script>

