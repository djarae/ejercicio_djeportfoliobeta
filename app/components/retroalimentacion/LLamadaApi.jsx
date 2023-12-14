// "use client"
import React, { useState, useEffect } from 'react';


function LLamadaApi() {

    console.log("Ejecutamos llamda api")
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/")
        .then((response)=>response.json())
        .then((data)=> setData(data))
        .then(console.log("funciono"));
    },[]);



return (
    <div>
    <button  onClick={() => LLamadaApi()} variant="text" >ENVIAR</button>
    </div>
);
}
export default LLamadaApi;
