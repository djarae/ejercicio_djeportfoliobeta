import Tecnologias from './tecnologias/Tecnologias.js';

function Conocimientos() {
  return (
    <div class="container" className="App" style={{ marginBottom: '300px' }}>
        <h1 style={{ fontSize: "4rem" }}>
             Conocimientos
        </h1>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tecnología</th>
                <th scope="col">Años</th>
              </tr>
            </thead>
            <Tecnologias></Tecnologias>
        </table>
    </div>




  );
}
export default Conocimientos;
