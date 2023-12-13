"use client"

import Espacios from '../espacios/Espacios.js'

function Retroalimentacion() {

function enviarData(){
  console.log("HI")


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

                 <button  onClick={() => enviarData()} variant="text" >ENVIAR</button>
              
              <Espacios  color="secondary" variant="contained" cantidad="5"></Espacios>
        </div>
  </div>

  );
}
export default Retroalimentacion;
