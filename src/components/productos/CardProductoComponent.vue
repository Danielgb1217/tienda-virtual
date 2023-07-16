 <template>
  <div>
    <!-- <router-link :to="ruta"> nombre del producto </router-link> -->
    <router-link :to="ruta">
      <img class="w-3/4 h-60 mx-auto" :src="image" />
      <p class="text-xl font-bold">
        {{ name }}
      </p>
    </router-link>
    <p class="text-2xl text-green-400">{{ "$" + price + ".000" }}</p>
  </div>
</template>
  
  <script>
export default {
  name: "CardProductoComponent",
  props: {
    image: String,
    name: String,
    price: Number,
    ruta: Object,
  },
};
</script>
  
