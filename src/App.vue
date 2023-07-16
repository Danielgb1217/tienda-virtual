<template>
  <div>
    <div class="flex justify-between align-middle my-6 mx-10">
      <router-link :to="{ name: 'home' }"
        ><h1 class="text-6xl text-center font-bold my-3 text-blue-900 hover:text-blue-600">
          Virtual Store
        </h1>
      </router-link>
      <div class="mt-10  mr-0">
        <button class="mr-4">
          <router-link
            class="
              mr-0
              border border-black
              p-3
              text-2xl text-white
              rounded
              bg-blue-900
            "
            :to="{ name: 'admin' }"
          >
            Admin</router-link
          >
        </button>
        <button class="mr-0">
          <router-link
            class="
              mr-0
              border border-black
              p-3
              text-2xl text-white
              rounded
              bg-blue-900
            "
            :to="{ name: 'auth' }"
            >Login</router-link
          >
        </button>
      </div>
    </div>
    <v-nav />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import VNav from "./components/header/VNav.vue";
export default {
  components: { VNav },
  name: "App",
};
</script>

<style lang="scss" scoped>
</style>