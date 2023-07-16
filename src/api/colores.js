import axios from 'axios'

const apiColores={
    colores: function(){
         return axios.get('https://servicios.neunapp.com/api/tienda/colores/lista/')
        //return axios.get('www.themealdb.com/api/json/ v1/1/lookup.php?i=52772')
    }
}

export default apiColores