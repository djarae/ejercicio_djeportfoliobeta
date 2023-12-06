// import Button from '@mui/material/Button';
import ProyectoTexto from './Proyecto.json';
function Proyecto() {
  return (
    <div style={{  justifyContent:'center', alignItems:'center'}}>  
        <thead>
            <h1 style={{ fontSize: "3rem" }}>
                Proyecto Portfolio - React JS
           </h1>
        </thead>
        <tbody >
           <h1 style={{ fontSize: "1.5rem", justifyContent: "left", "width" : "100%",  textAlign: 'left' }}  >
                {ProyectoTexto[0].texto}
            </h1>
        </tbody>
    </div>
  );
}

export default Proyecto;
