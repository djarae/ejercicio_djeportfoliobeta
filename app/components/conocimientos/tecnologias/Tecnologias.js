

import ConocimientosJson from './Tecnologias.json'
function Tecnologias() {

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
    <tbody>
      {getTecnologias()}
    </tbody>
  );
}

export default Tecnologias;
