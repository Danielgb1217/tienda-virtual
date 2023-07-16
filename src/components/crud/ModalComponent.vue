<template>
  <div>
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="modal"
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"
        ></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="
              flex
              min-h-full
              items-end
              justify-center
              p-4
              text-center
              sm:items-center sm:p-0
            "
          >
            <transition
              enter-active-class="ease-out duration-300"
              enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to-class="opacity-100 translate-y-0 sm:scale-100"
              leave-active-class="ease-in duration-200"
              leave-class="opacity-100 translate-y-0 sm:scale-100"
              leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                v-show="modal"
                class="
                  relative
                  transform
                  overflow-hidden
                  rounded-lg
                  bg-white
                  text-left
                  shadow-xl
                  transition-all
                  sm:my-8 sm:w-full sm:max-w-2/4 sm:mx-36
                  lg:mx-96
                "
              >
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <!-- <div class="sm:flex sm:items-start"> -->
                  <div class="">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <!-- Titulo del cuadro modal desplegado -->
                      <div class="bg-blue-900 text-center mt-3 py-3">
                        <span
                          v-if="!item.id"
                          class="                            
                            text-lg
                            font-medium
                            leading-6
                            text-white
                          "
                          id="modal-title"
                          >Registrar Producto{{ item.id }}</span
                        >
                        <span
                          v-else
                          class="text-lg font-medium leading-6 text-white"
                          id="modal-title"
                          >Editar Producto</span
                        >
                      </div>
                      <div class="mt-2">
                        <!-- //-----------FORMULARIO DE REGISTRO---------------------------------------------->
                        <div class="mt-10 sm:mt-0">
                          <div class="block">
                            <div class="mt-5 md:mt-0">
                              <form action="#" method="POST">
                                <div
                                  class="overflow-hidden shadow sm:rounded-md"
                                >
                                  <div class="bg-white px-4 py-5 sm:p-6">
                                    <div
                                      class="
                                        block
                                        sm:grid sm:grid-cols-2 sm:gap-3 w-full
                                       
                                      "
                                    >
                                      <div>
                                        <label
                                          for="producto"
                                          class="
                                            block
                                            text-sm
                                            font-medium
                                            text-gray-700
                                          "
                                        >
                                          Producto</label
                                        >
                                        <input
                                          v-model="item.title"
                                          type="text"
                                          name="producto"
                                          id="producto"
                                          class="
                                          text-center
                                            mt-1
                                            h-10
                                            block
                                            w-full
                                            rounded-md
                                            border border-gray-300
                                            shadow-sm
                                            focus:border-indigo-500
                                            focus:ring-indigo-500
                                            sm:text-sm
                                          "
                                        />
                                      </div>

                                      <div class="">
                                        <label
                                          for="precio"
                                          class="
                                            block
                                            text-sm
                                            font-medium
                                            text-gray-700
                                          "
                                          >Precio</label
                                        >
                                        <input
                                          v-model="item.price"
                                          type="number"
                                          name="precio"
                                          id="precio"
                                          class="
                                          text-center
                                            mt-1
                                            h-10
                                            block
                                            w-full
                                            rounded-md
                                            border border-gray-300
                                            shadow-sm
                                            focus:border-indigo-500
                                            focus:ring-indigo-500
                                            sm:text-sm
                                          "
                                        />
                                      </div>

                                      <div class="col-span-2">
                                        <label
                                          for="descripcion"
                                          class="
                                            block
                                            text-sm
                                            font-medium
                                            text-gray-700
                                          "
                                          >Descripcion</label
                                        >
                                        <textarea
                                          v-model="item.description"
                                          type="text"
                                          name="descripcion"
                                          id="descripcion"
                                          autocomplete="email"
                                          class="
                                            mt-1
                                            h-32
                                            block
                                            w-full
                                            rounded-md
                                            border border-gray-300
                                            shadow-sm
                                            focus:border-indigo-500
                                            focus:ring-indigo-500
                                            sm:text-sm
                                          "
                                        />
                                      </div>

                                      <div class="">
                                        <label
                                          for="categoria"
                                          class="
                                            block
                                            text-sm
                                            font-medium
                                            text-gray-700
                                          "
                                          >Categoria</label
                                        >
                                        <select
                                          v-model="item.category"
                                          id="categoria"
                                          name="categoria"
                                          autocomplete="categoria-name"
                                          class="
                                            mt-1
                                            h-10
                                            block
                                            w-full
                                            rounded-md
                                            border border-gray-300
                                            bg-white
                                            py-2
                                            px-3
                                            shadow-sm
                                            focus:border-indigo-500
                                            focus:outline-none
                                            focus:ring-indigo-500
                                            sm:text-sm
                                          "
                                        >
                                          <option>Ropa</option>
                                          <option>Deportes</option>
                                          <option>Tecnologia</option>
                                        </select>
                                      </div>

                                      <div>
                                        <label
                                          class="
                                            block
                                            text-sm
                                            font-medium
                                            text-gray-700
                                          "
                                          >Subir Imagen</label
                                        >
                                        <div
                                          class="
                                            lg:content-center
                                            mt-1
                                            flex
                                            justify-center
                                            rounded-md
                                            border-2
                                            border-dashed
                                            border-gray-300
                                            px-6
                                            pt-5
                                            pb-6
                                          "
                                        >
                                          <div class="space-y-1 text-center">
                                            <svg
                                              class="
                                                mx-auto
                                                h-12
                                                w-12
                                                text-gray-400
                                              "
                                              stroke="currentColor"
                                              fill="none"
                                              viewBox="0 0 48 48"
                                              aria-hidden="true"
                                            >
                                              <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              />
                                            </svg>
                                            <div
                                              class="flex text-sm text-gray-600"
                                            >
                                              <label
                                                for="file-upload"
                                                class="
                                                  relative
                                                  cursor-pointer
                                                  rounded-md
                                                  bg-white
                                                  font-medium
                                                  text-indigo-600
                                                  focus-within:outline-none
                                                  focus-within:ring-2
                                                  focus-within:ring-indigo-500
                                                  focus-within:ring-offset-2
                                                  hover:text-indigo-500
                                                "
                                              >
                                                <span>Cargar</span>
                                                <input
                                                  id="file-upload"
                                                  name="file-upload"
                                                  type="file"
                                                  class="sr-only"
                                                />
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      bg-gray-50
                                      px-4
                                      py-3
                                      text-right
                                      sm:px-6
                                    "
                                  >
                                    <!-- <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    bg-indigo-600
                    py-2
                    px-4
                    text-sm
                    font-medium
                    text-white
                    shadow-sm
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                  "
                >
                  Save
                </button> -->
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <!-- //--------------------------------------FORMULARIO DE REGISTRO---------------------------       -->
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    bg-gray-50
                    px-4
                    py-3
                    sm:flex sm:flex-row-reverse sm:px-6
                  "
                >
                  <button
                    type="button"
                    class="
                      inline-flex
                      w-full
                      justify-center
                      rounded-md
                      border border-transparent
                      bg-blue-600
                      px-4
                      py-2
                      text-base
                      font-medium
                      text-white
                      shadow-sm
                      hover:bg-blue-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:ring-offset-2
                      sm:ml-3 sm:w-auto sm:text-sm
                    "
                  >
                    Guardar
                  </button>
                  <button
                    @click="cerrarModal()"
                    type="button"
                    class="
                      mt-3
                      inline-flex
                      w-full
                      justify-center
                      rounded-md
                      border border-gray-300
                      bg-white
                      px-4
                      py-2
                      text-base
                      font-medium
                      text-gray-700
                      shadow-sm
                      hover:bg-gray-50
                      focus:outline-none
                      focus:ring-2
                      focus:ring-indigo-500
                      focus:ring-offset-2
                      sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                    "
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    cerrarModal() {
      this.$emit("modal", false); //Emitir evento al componente padre para enviar variables
    },
  },
  props: ["item", "modal"],
};
</script>

<style lang="scss" scoped>
</style>