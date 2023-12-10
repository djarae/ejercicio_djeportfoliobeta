// import './App.css';
import Presentacion from '../presentacion/Presentacion.js';
import AcercaDeMi from '../acercademi/AcercaDeMi';
import Conocimientos from '../conocimientos/Conocimientos.js';
import MisProyectos from '../misproyectos/MisProyectos.js';
import Espacios from '../espacios/Espacios.js';


function Principal() {
  return (
    <div class="container bg-info ">
     <body className="App-body" >
        <Presentacion></Presentacion>
        <AcercaDeMi></AcercaDeMi>
        <Espacios  cantidad="25"></Espacios>
        <Conocimientos></Conocimientos>
        <Espacios cantidad="50"></Espacios>
        <MisProyectos></MisProyectos>
    </body >
   </div>
  );
}
export default Principal;
