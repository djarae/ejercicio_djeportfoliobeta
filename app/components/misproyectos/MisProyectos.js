import Proyecto from './proyecto/Proyecto.js';

function MisProyectos() {
  return (
    <div  class="panel panel-default" className="App"
    style={{ justifyContent: "center", "width" : "50%", justifyContent:'center',  textAlign: 'center' }}>
        <h1 style={{ fontSize: "4rem" }}>
            Mis Proyectos
        </h1>
        <Proyecto></Proyecto>
    </div>


  );
}
export default MisProyectos;
