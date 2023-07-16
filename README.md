
# Tienda Online

Este es un proyecto base para desarrollar una tienda en línea con Vue 3 y Vite.

## Configuración recomendada del IDE

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **/src**: Contiene el código fuente de la aplicación.
  - **/views**: Directorio que contiene las vistas de la aplicación.
    - **HomeView.vue**: Vista de la página de inicio.
    - **ProductosView.vue**: Vista de la página de productos.
    - **CategoriasView.vue**: Vista de la página de categorías.
    - **productosCategoriasView.vue**: Vista de la página de productos filtrados por categoría.
    - **productoDetailView.vue**: Vista de detalles de un producto.
  - **/router**: Directorio que contiene el enrutador de la aplicación.
    - **index.js**: Configuración de las rutas de la aplicación.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- **axios**: Permite realizar solicitudes HTTP para obtener datos de la API de la tienda.
- **vue**: La biblioteca principal de Vue para construir interfaces de usuario.
- **vue-router**: Biblioteca para manejar el enrutamiento dentro de la aplicación.

## API de Productos

El archivo `apiProductos.js` contiene una interfaz para interactuar con la API de la tienda y obtener información sobre los productos. Utiliza la biblioteca `axios` para realizar solicitudes HTTP a la API y obtener los datos necesarios para mostrar en la tienda.

## Instrucciones adicionales

Recuerda configurar la base de datos y la API correctamente para que la tienda funcione correctamente. Asegúrate de tener acceso a la API de productos y de configurar las rutas adecuadamente en el archivo `index.js` del directorio `/src/router`.


