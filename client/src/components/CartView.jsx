import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productServices";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CartView = ({ cartItems, onHandlerDeleteProductCart }) => {
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(cartItems));
    }, [cartItems]); //Aquí se encarga de manejar el total
    
    
    const onHandlerDeleteProduct = (id) => {
        onHandlerDeleteProductCart(id);
    }

    const onHandlerCatalog = () => {
        navigate("/catalog");
    }

  return (
  <>
  <h3>Carro de compras</h3>
  <table className="table table-hover table-striped">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
        </tr>
    </thead>
    
    <tbody>
        {
        cartItems.map(item => (
        <tr key={item.product.id}>
            <td>{item.product.name}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity * item.product.price}</td>
            <td><button className="btn btn-danger" onClick={() => onHandlerDeleteProduct(item.product.id)}>Eliminar</button></td>
        </tr>
        ))
        }
    </tbody>
    
    <tfoot>
        <tr>
            <td colSpan="3" className="text-end fw-bold">Total</td>
            <td colSpan="2" className="text-start fw-bold">{total}</td>
        </tr>
    </tfoot>
    </table>
    <button className="btn btn-success" onClick={onHandlerCatalog}>Seguir comprando</button>
    </>
    )
};
