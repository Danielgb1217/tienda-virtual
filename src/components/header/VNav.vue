<template>
  <div
    class="
      flex flex-wrap
      justify-center
      sm:justify-between
      items-center
      mx-10
      rounded-lg
      border
      py-5
      bg-blue-900
    "
  >
    <div>
      <router-link
        class="text-lg sm:text-xl lg:text-3xl font-bold text-white mx-5"
        :to="{ name: 'home' }"
        >Home</router-link
      >
    </div>
    <div>
      <ul class="flex flex-wrap justify-center sm:justify-between">
        <li class="mr-4">
          <router-link
            class="text-lg sm:text-xl lg:text-3xl font-bold text-white mr-2"
            :to="{ name: 'productos' }"
            >Productos</router-link
          >
        </li>
        <li class="">
          <router-link
            class="text-lg sm:text-xl lg:text-3xl font-bold text-white mr-5"
            :to="{ name: 'categorias', params: { category: 'audiovisual' } }"
            >Categorias</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "VNav",
};
</script>

<style lang="scss" scoped>
</style>