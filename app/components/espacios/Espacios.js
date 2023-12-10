function Espacios(props) {




  function getEspacios(){
    let espaciosFor = [];
    for (let i=0;i<props.cantidad;i++){
    
      espaciosFor.push(  
        <p class="h1 row justify-content-center bg-transparent" >   </p>
        )
    }
    return(
      espaciosFor
    );
  }



  return (
      <div class="container col-6 rounded bbg-transparent  text-dark  row justify-content-center" >
             {getEspacios()}
    </div>


  );
}
export default Espacios;
