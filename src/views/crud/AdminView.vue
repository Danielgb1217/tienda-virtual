<template>
  <div>
    <tabla-productos :lista="lista" />
  </div>
</template>
    

<script>
import TablaProductos from "../../components/crud/TablaProductos.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "AdminView",

  components: {
    TablaProductos,
  },

  beforeMount() {
    this.cargarProductos();
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions({ cargarProductos: "cargarProductos" }),
  },

  computed: {
    ...mapState({ lista: "Items" }),
  },
};
</script>

