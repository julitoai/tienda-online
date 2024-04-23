import "./styles/App.css";

function Aside() {
  return (
    <div className="contenedor-aside">
      <h3 className="filtrar-acordion">Filtrar</h3>
      <div className="accordion">
        <input type="radio" name="toggle" className="accordion-toggle" readOnly />
        <div className="accordion-header">Velas y Aceites</div>
        <div className="accordion-content">
          <a href="#">Velas comunes</a><br />
          <a href="#">Velas con formas</a><br />
          <a href="#">Aceites escenciales</a><br />

        </div>

        <input type="radio" name="toggle" className="accordion-toggle" />
        <div className="accordion-header">Bustos</div>
        <div className="accordion-content">
        <a href="#">Bustos de arcilla</a><br />
        <a href="#">Bustos de porcelana</a><br />
        </div>

        <input type="radio" name="toggle" className="accordion-toggle" />
        <div className="accordion-header">Varios</div>
        <div className="accordion-content">
        <a href="#">Porta llaves</a><br />
        <a href="#">Percheros</a><br />
        <a href="#">Llaveros</a><br />
        </div>
      </div>
    </div>
  );
}

export default Aside;
