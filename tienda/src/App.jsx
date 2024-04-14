import React, { useEffect } from "react";
import "./App.css"
import Product from "./Product.jsx"
import Marco  from "./assets/marco-aurelio.jpg"
import Platon from "./assets/plato.jpg"
import Julio from "./assets/julio-cesar.jpg"

const URL_PRODUCTOS = "https://fakestoreapi.com/"


function App() {

   useEffect(()=>{
    fetch
   },[])


  return <>
  <h2 className="h2-app">Decoración para el hogar</h2>
  <main className="producto-container">
    <Product img={Marco} descripcion="Busto de Marco Aurelio" precio="$10.000"/>
    <Product img={Platon} descripcion="Busto de Platón" precio="$10.000"/>
    <Product img={Julio} descripcion="Busto de Julio César" precio="$10.000"/>

  </main>

  </>
}

export default App;
