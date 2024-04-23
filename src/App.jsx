import "./styles/App.css";
import Product from "./Product.jsx";
import Aside from "./Aside.jsx";
import Marco from "./assets/marco-aurelio.jpg";
import Platon from "./assets/plato.jpg";
import Julio from "./assets/julio-cesar.jpg";
import Header from "./Header.jsx";

//const URL_PRODUCTOS = "https://fakestoreapi.com/"

function App() {
  let displayProductos = () => { return Array.from({ length: 10 }).map((_, index) => (
    <Product key={index} id={index} />
  ))}

  let productos = displayProductos();

  return (
    <>
      <Header/>
      <main className="grid-container">
        {/* <section className="container-productos"> */}
        <div className="div-productos">{...productos.slice(0, 5)}</div>
        <div className="div-productos">{...productos.slice(5)}</div>
        {/* </section> */}
        <Aside />
      </main>
    </>
  );
}

export default App;
