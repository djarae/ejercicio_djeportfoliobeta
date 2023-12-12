import PortfolioTexto from './portfolio.json';
function Portfolio() {
  return (
  <div class="container col-6 rounded bg-primary  text-dark  row justify-content-rigth" >
        <p class="h1 row justify-content-center text-light" > 
             Portfolio - React JS
        </p>
        <h1 class="display-6 row justify-content-rigth text-light fs-3"   >
                {PortfolioTexto[0].texto}
        </h1>


  </div>
  );
}
export default Portfolio;
