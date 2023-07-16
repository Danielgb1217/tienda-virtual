import axios from 'axios'

const apiProductos={
    productos: function(){
         return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/')
        //return axios.get('www.themealdb.com/api/json/ v1/1/lookup.php?i=52772')
    },
    filtrarProductos: function(filtro){
        return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/?' + filtro)
       //return axios.get('www.themealdb.com/api/json/ v1/1/lookup.php?i=52772')
   },
   obtenerProductos: function(id){
    return axios.get('https://servicios.neunapp.com/api/tienda/producto/' + id + '/')
   //return axios.get('www.themealdb.com/api/json/ v1/1/lookup.php?i=52772')
}
}

export default apiProductos