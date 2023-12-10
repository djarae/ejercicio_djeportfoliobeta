import PortfolioTexto from './Portfolio.json';
function Portfolio() {
  return (
  <div class="container col-6 rounded bg-primary  text-dark  row justify-content-rigth" >
        <p class="h1 row justify-content-center" > 
        Portfolio - React JS
        </p>
        <p h1 row justify-content-center >
                {PortfolioTexto[0].texto}
        </p>


  </div>
  );
}
export default Portfolio;
