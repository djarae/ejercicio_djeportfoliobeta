import Portfolio from './portfolio/Portfolio.js';
// import PortfolioWS from './portfoliows/PortfolioWS.js';
import Espacios from '../../components/espacios/Espacios.js'

function MisProyectos() {
  return (
    <div class="container" >
        <p class="h1 row justify-content-center" > 
            Proyectos
        </p>
        <Espacios cantidad="3"></Espacios>
        <div class="container d-flex justify-content-center" >
        <Portfolio></Portfolio>
        </div>
        <Espacios cantidad="3"></Espacios>
        {/* <div class="container d-flex justify-content-center" >
             <PortfolioWS></PortfolioWS>
        </div>
      
        */}
   
   
        
  </div>

  );
}
export default MisProyectos;
