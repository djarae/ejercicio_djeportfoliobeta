import Tecnologias from './tecnologias/Tecnologias.js';
import Espacios from '../../components/espacios/Espacios.js'


function Conocimientos() {

  return (
    <div class="container justify-content-center">
            <p class="h1 row justify-content-center" > 
                Conocimientos
            </p>
          <Espacios cantidad="3"></Espacios>

            <div class="container col-6 rounded bg-transparent  text-dark " >
                  <table class="table  table-ligth table-striped    justify-content-center " >
                      <thead class="thead-light"> 
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Tecnología</th>
                          <th scope="col">Años</th>
                        </tr>
                      </thead>
                      <Tecnologias></Tecnologias>
                  </table>
            </div>
    </div>


  );
}
export default Conocimientos;
