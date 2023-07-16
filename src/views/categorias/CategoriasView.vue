<!-- grid grid-cols-1 sm:grid-cols-2 -->

<template>
    <div class="container mr-1 p-2
      sm:flex sm:justify-around   
    ">
      <div class="mt-1 sm:w-80 lg:w-96">
      
        <lista-categorias />
      </div>
      <div>
        
        <div>
           <v-colores/>
        </div>
        <div class="w-full xl:mr-0 pr-0">
          <router-view/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import VColores from '../../components/categorias/VColores.vue';
  import ListaCategorias from "../../components/categorias/ListaCategorias.vue";
  
  export default {
    name: "CategoriasView",
    components: {
      ListaCategorias,
      VColores,
    },
    data() {
      return {};
    },
  };
  </script>
  
