//Imports externos
import 'bootstrap/dist/css/bootstrap.css';

//Imports internos
import './App.css';
import Presentacion from './components/presentacion/Presentacion.js';
import AcercaDeMi from './components/acercademi/AcercaDeMi.js';
import Conocimientos from './components/conocimientos/Conocimientos.js';
import MisProyectos from './components/misproyectos/MisProyectos.js';

function App() {
  return (
    <div className="App">
       
        <header className="App-header">
       
        </header>
        

      <body className="App-body" >
           <Presentacion></Presentacion>
       <AcercaDeMi></AcercaDeMi>
       <Conocimientos></Conocimientos>
       <MisProyectos></MisProyectos>
      </body >
 
    </div>
  );
}
export default App;
