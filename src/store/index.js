import { createStore } from 'vuex'


export default createStore({
    namespace: true,

    state: {
        token: null,
        Items: [],
        urlBase: 'http://localhost:3000',


    }, mutations: {

        llenarItems(state, data) {
            state.Items = data;
        }

    }, actions: {
        cargarProductos: async function ({ commit }) {

            try {
                const setting = {
                    method: 'GET',
                }
                const url = 'https://fakestoreapi.com/products';
                const data = await fetch(url, setting);
                const json = await data.json();
                commit('llenarItems', json);

            } catch (e) {
                console.log(e);

            }
        },

        async login(email, password) {

        },

        async register(nombre, apellido, cedula, email, password, telefono, admin, confirmado) {

            const uri = `${state.urlBase}/usuarios.php`

            const setting = {
                method: 'POST',
                headers: {                  //y un bodi con la informacion de la consulta 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nombre": nombre,
                    "apellido": apellido,
                    "cedula": cedula,
                    "email": email,
                    "password": password,
                    "telefono": telefono,
                    "admin": admin,
                    "confirmado": confirmado

                })
            }

            const data = await fetch(uri, setting);
            const res = await data.json();

            console.log(res)

        },

        async getUsuarios() {

            const uri = `${state.urlBase}/usuarios.php?page`

            const setting = {
                method: 'GET',
                headers: {                  //y un bodi con la informacion de la consulta 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ${state.token}'
                },
            }

            const data = await fetch(uri, setting);
            const res = await data.json();

            console.log(res)  



        }

    },
    getters: {
        Items(state) {
            return state.Items;
        }
    }
})
