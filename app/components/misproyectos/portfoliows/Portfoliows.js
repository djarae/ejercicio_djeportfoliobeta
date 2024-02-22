import PortfolioWSTexto from './portfoliows.json';
function PortfolioWS() {
  return (
  <div class="container col-6 rounded bg-primary  text-dark  row justify-content-left" >
        <p class="h1 row justify-content-center" > 
            
               Portfolio - Microservicio
        </p>
        <p class = "h1 row justify-content-center" >
                {PortfolioWSTexto[0].texto}
        </p>
  </div>
  );
}
export default PortfolioWS;
