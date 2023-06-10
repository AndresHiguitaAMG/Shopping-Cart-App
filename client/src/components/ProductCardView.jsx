import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const ProductCardView = ({ id, name, description, price, onHandlerAddProductCart }) => {    
    const navigate = useNavigate();

    const onHandlerAddProduct = (product) => {
        // console.log(product)
        onHandlerAddProductCart(product);
        navigate("/cart");
    } 
    
    return (
    <>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
            <button className="btn btn-primary" onClick={() => onHandlerAddProduct({id, name, description, price})}>Agregar</button>
        </div>
    </div>
    </>
  )
}
