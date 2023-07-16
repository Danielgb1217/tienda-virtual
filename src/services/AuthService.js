//Funcion para conectarse a la api 
import { ref } from 'vue'
import { mapState} from "vuex";

class AuthService {

    constructor() {

        this.jwt = ref('')      //la variable jwt es una referencia lo que significa que es reactiva
        this.error = ref('')

    }

    getJwt() {
        return this.jwt
    }
    //esta funcion es llamada desde el componente pasandole el usuario y contrasenia y asu vez esta funcion se 
    //enviarda la solicitud a la api con los datos en el boy para obtener la respuesta( un token)
    async login(email, password) {

        try {
            // const response = await fetch('http://localhost:3000/auth.php', {

            //     method: 'POST',             //El metodo fetch necesita aparte de la direccion de la api un cabecero con informacion de estado
            //     headers: {                  //y un bodi con la informacion de la consulta 
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         usuario: email,
            //         password: password
            //     })
            // })
            //const res = await response.json()   // convierto a json la respuesta de la api (el token)

            const setting = {
                method: 'POST',
                headers: {                  //y un bodi con la informacion de la consulta 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({//convierte a json
                    usuario: email,
                    password: password
                })
            }
            const url = 'http://localhost:3000/auth.php'; //url de la api para loguear usuario
            const data = await fetch(url, setting);
            const res = await data.json();

            console.log(res)
            if (res.status == 'error') {                
                this.error = 'Error en login'
                return false
            }else{
                this.jwt = res.result.token
                mapState.token = this.jwt       //si el login es correcto actualizo el state token con el token de la api
                // console.log(mapState.token)
                return true
            }            

        } catch (error) {
            console.log(error)
            return false
        }


    }

}

export default AuthService      //se exporta para que este disponible la clase