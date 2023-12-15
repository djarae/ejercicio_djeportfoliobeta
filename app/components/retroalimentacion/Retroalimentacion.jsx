"use client"

import Espacios from '../espacios/Espacios.js'
import React, { useState, useEffect,useMutation } from 'react';



// import axios from 'axios';


function Retroalimentacion() {
 console.log("Ejecutamos llamda api")

    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/")
        .then((response)=>response.json())
        .then((data)=> setData(data))
        .then(console.log("funciono recargar el coso"));
    },[]);

    














    //use mutation
    

    function conectar (){
        console.log("click")


       
       let  datajson = {
            "employees":[
              {"firstName":"John", "lastName":"Doe"},
              {"firstName":"Anna", "lastName":"Smith"},
              {"firstName":"Peter", "lastName":"Jones"}
            ]
            }

        const requestOptions = {
          mode: 'no-cors',
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
          'Conten-length' : '221'},
          body: datajson
      };
      fetch('http://localhost:5000/retro', requestOptions)





      }


      



    

    //fin use mut

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
              <button onClick={conectar}>CONECTAR</button>
              <Espacios cantidad="5"></Espacios>
          

             
              <Espacios  color="secondary" variant="contained" cantidad="5"></Espacios>

              {/* <LlamadaApi></LlamadaApi> */}


             
    
       
        </div>
  </div>

  );
}
export default Retroalimentacion;
