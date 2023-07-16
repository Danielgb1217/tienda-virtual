<template>
  <div>
    <div class="w-full max-w-xs mx-auto mt-10">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            v-model="userName"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            v-model="password"
            class="
              shadow
              appearance-none
              border border-red-500
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            @click.prevent="login"
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
            type="button"
          >
            Sign In
          </button>
          <a
            class="
              inline-block
              align-baseline
              font-bold
              text-sm text-blue-500
              hover:text-blue-800
            "
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div class=" flex justify-center">
        <router-link
          class="
            content-center
            text-lg
            sm:text-xl
            lg:text-3xl
            font-bold
            text-blue-500
            hover:text-blue-800
            mr-2
            mb-2
          "
          :to="{ name: 'registro' }"
          >Registrarse</router-link
        >
      </div>

      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AuthService from "../../services/AuthService.js";
import router from "../../router";

let userName = ref("");
let password = ref("");

const login = async () => {
  const auth = new AuthService();
  const response = await auth.login(userName.value, password.value);
  console.log(response);

  if (response) {
    // alert("Login Correcto");
    router.push({name: 'productos'})
  } else {
    alert("error de autentcacion");
  }
};
</script>

<style lang="scss" scoped>
</style>