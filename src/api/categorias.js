import axios from 'axios'

const apiCategorias={
    categorias: function(){
         return axios.get('https://servicios.neunapp.com/api/tienda/categorias/lista/')
        //return axios.get('www.themealdb.com/api/json/ v1/1/lookup.php?i=52772')
    }
}

export default apiCategorias