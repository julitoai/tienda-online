import "./styles/App.css";
import Products from "./Products.jsx";
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
          <div className="productos">
            <Products />
          </div>
          <div className="productos">
            <Products />
          </div>
        </section>
        <div className="aside">
          <Aside />
        </div>
      </main>
    </>
  );
}

export default App;
