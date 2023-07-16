<template>
  <div>
    <ul class="mt-12 ml-16">
      <li class="py-1 text-2xl hover:text-blue-2" v-for="categoria in listaCategorias" :key="categoria.id">
        <router-link :to="{name: 'categorias', params:{'category': categoria.name_unique}}">{{categoria.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiCategorias from "../../api/categorias";
export default {
  name: "ListaCategorias",
  data() {
    return {
      listaCategorias: [],
    };
  },
  methods: {
    cargarCategorias: function () {
      apiCategorias.categorias().then((response) => {
        this.listaCategorias = response.data;
      });
    },
  },
  beforeMount() {
    this.cargarCategorias();
  },
};
</script>

