import "./Product.css"


function Product(props) {
    return <div className="contenedor">
        <img className="img-producto" src={props.img}/>
        <h3>{props.descripcion}</h3>
        <h3>{props.precio}</h3>
        <button >Agregar</button>

    </div>
}

export default Product;