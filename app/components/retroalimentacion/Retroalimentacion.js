import Espacios from '../espacios/Espacios.js'
// import {Button} from 'material-ui/core'

function Retroalimentacion() {

    function enviarRetroalimentacion(){
        console.log("Entro")
       // Configuración de la conexión a la base de datos
            //     const connection = mysql.createConnection({
            //     host: 'http://localhost:80/phpmyadmin',
            //     user: 'root',
            //     password: '',
            //     port: 80,
            //     database: 'portfolio'
            //     });
                
            //     // Conexión a la base de datos
            //     connection.connect((err) => {
            //     if (err) {
            //         console.error('Error al conectar a la base de datos: ', err);
            //         return;
            //     }
            //     console.log('Conexión exitosa a la base de datos');
            // });
            return 0;
         }

  return (
<div class="container row justify-content-center" >
        <p class="h1 row justify-content-center" > 
            Retroalimentacion
        </p>
        <div class="container col-6 rounded bg-primary  text-ligth  row justify-content-center" >
              <h1 class="display-6 row justify-content-left text-light fs-4"   >
                  Favor de ingresar su nombre.
              </h1>
              <input  id="inputNombre" class="form-control" ></input>
              <Espacios cantidad="5"></Espacios>
              <h1 class="display-6 row justify-content-left text-light fs-4"   >
                  Favor de ingresar consejo.
              </h1>
              <input  id="inputRetroalimentacion" class="form-control" ></input>
              <Espacios cantidad="5"></Espacios>
                  <button type="button" class="btn btn-success btn-block">Enviar</button>
              
              <Espacios cantidad="5"></Espacios>
        </div>
  </div>

  );
}
export default Retroalimentacion;
