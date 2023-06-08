import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productServices";

/* eslint-disable react/prop-types */
export const CartView = ({ cartItems, onHandlerDeleteProductCart }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(calculateTotal(cartItems));
    }, [cartItems]);
    
    
    const onHandlerDeleteProduct = (id) => {
        console.log("eliminar")
        onHandlerDeleteProductCart(id);
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
    </>
  )
}
