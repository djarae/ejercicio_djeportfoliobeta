"use client"
import Espacios from '../espacios/Espacios.js'
import React, { useState, useEffect,useMutation } from 'react';

function Retroalimentacion() {

    const [nombreHook,setNombreHook] = useState(" ");
    const [consejoHook,setConsejoHook] = useState(" ");
    //const apiURL= "http://localhost:5000/retro"//API URL local
    const apiURL= "https://apiportfolioflaskdjarae.onrender.com/retro"//API URL Cloud
    // const apiURL= "http://localhost:8080//retro" //Api URL Docker local

    function actuNombreHook(val){
        setNombreHook(val);console.log(nombreHook)
     }

     function actuConsejoHook(val){
        setConsejoHook(val);console.log(consejoHook)
     }

    
    // useEffect(()=>{
    //     fetch("http://localhost:5000/")
    //     .then((response)=>response.json())
    //     .then((data)=> setData(data))
    //     .then(console.log("funciono recargar el coso"));
    // },[]);
   
    function conectar (){
        let nombreVar = nombreHook.val
        let consejoVar =  consejoHook.val

        fetch(apiURL, {
          method: "POST",
          mode: 'cors', 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nombreVar,
            consejo: consejoVar,
          }),
        });
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
              <input  id="inputNombre" class="form-control"
                     onChange={e => actuNombreHook({val: e.target.value })}>
              </input>
              
              <Espacios cantidad="5"></Espacios>
              
              <h1 class="display-6 row justify-content-left text-light fs-4"   >
                  Favor de ingresar nombre.
              </h1>
              <input  id="inputRetroalimentacion" class="form-control"
                     onChange={e => actuConsejoHook({val: e.target.value })}>
              </input>
           
              <Espacios cantidad="5"></Espacios>
                <button onClick={conectar}>ENVIAR</button>
              <Espacios  color="secondary" variant="contained" cantidad="5"></Espacios>

        </div>
  </div>
  );
}
export default Retroalimentacion;
