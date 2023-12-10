import Tecnologias from './tecnologias/Tecnologias.js';
function Conocimientos() {


   function getTecnologias(){
    let tecnologias = [];
    for (let i=0;i<ConocimientosJson.length;i++){
    
      tecnologias.push(  
      <tr>
        <td>{ConocimientosJson[i].id}</td>
        <td>{ConocimientosJson[i].tecnologia}</td>
        <td>{ConocimientosJson[i].anos}</td>
     </tr>)
    }
    return(
      tecnologias
    );
  }

  return (
      <div class="container col-6 rounded bg-primary  text-dark  row justify-content-center" >
        <p class="h1 row justify-content-center" > 
             Conocimientos
        </p>
        <table class="table  table-dark table-striped w-50  " >
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




  );
}
export default Conocimientos;
