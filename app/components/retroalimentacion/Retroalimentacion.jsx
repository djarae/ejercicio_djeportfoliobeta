"use client"

import LlamadaApi from './LLamadaApi.jsx'
import Espacios from '../espacios/Espacios.js'
import React, { useState, useEffect } from 'react';



// import axios from 'axios';


function Retroalimentacion() {
  console.log("Ejecutamos llamda api")
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/")
        .then((response)=>response.json())
        .then((data)=> setData(data))
        .then(console.log("funciono"));
    },[]);

  function enviarData(){
   console.log("HI")
   let numero = LlamadaApi();
   console.log(numero)
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
                  <LlamadaApi></LlamadaApi>
              <Espacios  color="secondary" variant="contained" cantidad="5"></Espacios>

             
    
       
        </div>
  </div>

  );
}
export default Retroalimentacion;
