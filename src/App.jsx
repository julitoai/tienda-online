import "./styles/App.css";
import Product from "./Product.jsx";
import Aside from "./Aside.jsx";
import Marco from "./assets/marco-aurelio.jpg";
import Platon from "./assets/plato.jpg";
import Julio from "./assets/julio-cesar.jpg";

//const URL_PRODUCTOS = "https://fakestoreapi.com/"

function App() {
  return (
    <>
      <h2 className="h2-app">Decoración para el hogar</h2>
      <main className="grid-container">
        <section className="container-productos">
            <Product />
            <Product />
        </section>
          <Aside />
      </main>
    </>
  );
}

export default App;
