
import AcercaDeMiTexto from './AcercaDeMi.json'
function AcercaDeMi() {
  return (
    <div className="App">
      <header className="App-header">
        <div  class="panel panel-default"   
        style={{ justifyContent: "center", "width" : "50%", justifyContent:'center',  textAlign: 'center' }}>
            <h1 style={{ fontSize: "5rem" }}>
                Acerca De Mi
            </h1>
            <h1 style={{  fontSize: "1.5rem"}}>
              {AcercaDeMiTexto[0].texto}
            </h1>
        </div >
      </header>
    </div>
  );
}
export default AcercaDeMi;
