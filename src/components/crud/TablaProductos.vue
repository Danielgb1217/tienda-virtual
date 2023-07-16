<template>
  <div>
    <h1 class="text-4xl my-4 font-bold text-center">Tabla de usuarios</h1>
    <div class="flex justify-end mx-10">
      <button
        @click="nuevoProducto()"
        class="bg-blue-900 m-4 p-2 rounded-xl text-white font-medium"
      >
        Crear Producto
      </button>
    </div>

    <modal-component
      :modal="modal"
      @modal="modal = $event"
      :item="itemSelected"
    />

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-2/4 mx-auto text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="
            text-xs text-gray-700
            uppercase
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    border-gray-300
                    rounded
                    focus:ring-blue-500
                    dark:focus:ring-blue-600
                    dark:ring-offset-gray-800
                    dark:focus:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600
                  "
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
            <th scope="col" class="px-6 py-3 font-bold text-xl">Producto</th>
            <th scope="col" class="px-6 py-3 font-bold text-xl">Precio</th>
            <th scope="col" class="px-6 py-3 font-bold text-xl">Descripcion</th>
            <th scope="col" class="px-6 py-3 font-bold text-xl">Categoria</th>
            <th scope="col" class="px-6 py-3 font-bold text-xl">imagen</th>
            <th scope="col" class="px-6 py-3 font-bold text-xl">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in lista"
            :key="item.id"
            class="
              bg-white
              border-b
              dark:bg-gray-800 dark:border-gray-700
              hover:bg-gray-50
              dark:hover:bg-gray-600
            "
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    border-gray-300
                    rounded
                    focus:ring-blue-500
                    dark:focus:ring-blue-600
                    dark:ring-offset-gray-800
                    dark:focus:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600
                  "
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <th
              scope="row"
              class="px-0 py-4 font-medium text-gray-900 dark:text-white"
            >
              {{ item.title }}
            </th>
            <td class="px-6 py-4">{{ item.price }}</td>
            <td class="px-6 py-4">{{ item.description }}</td>
            <td class="px-6 py-4">{{ item.category }}</td>
            <td class="px-6 py-4">
              <img :src="item.image" />
            </td>
            <td class="flex items-center px-6 py-4 space-x-3">
              <a
                href="#"
                @click="editarProducto(item)"
                class="
                  font-medium
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                "
                >Editar</a
              >

              <a
                href="#"
                class="
                  font-medium
                  text-red-600
                  dark:text-red-500
                  hover:underline
                "
                >Eliminar</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ModalComponent from "./ModalComponent.vue";

export default {
  components: { ModalComponent },
  name: "TablaProductos",
  data() {
    return {
      modal: false,
      itemSelected: {},
    };
  },
  props: ["lista"],
  methods: {
    nuevoProducto() {
      (this.modal = true),
        (this.itemSelected = {
          title: "",
          price: 0,
          description: "",
        });
    },
    editarProducto(item) {
      (this.modal = true), (this.itemSelected = item);
    },
  },
};
</script>

