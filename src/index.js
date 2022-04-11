import React from 'react';
import ReactDOM from 'react-dom';

function App () {
  return "Hola Mundo"

}

ReactDOM.render(<App/>, document.getElementById("root"));



//1) Tener la variable react en scope
//2) Tener la variable reactDOM en scope
//3) Tener la variable App (la variable que contiene todo el codigo de la aplicacion) en scope
//4) Hacer render de la App en el DOM
