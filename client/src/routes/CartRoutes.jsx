/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from 'react-router-dom'
import { CatalogView } from '../components/CatalogView'
import { CartView } from '../components/CartView'

export const CartRoutes = ({ onHandlerAddProductCart, onHandlerDeleteProductCart, cartItems }) => {
  return (
  <Routes>
    <Route path="catalog" element={<CatalogView
    onHandlerAddProductCart={(product) => onHandlerAddProductCart(product)} //Lo recibe y lo pasa
    />}/>
    <Route path="cart" element={(
        cartItems?.length <= 0 ?
        <div className="alert alert-warning">¡Ups, No hay productos en el carro de compras!</div>
        :
        //() --> porqué es un objeto
        (
        <div className="my-4 w-50">
            <CartView
                cartItems={cartItems}
                onHandlerDeleteProductCart={onHandlerDeleteProductCart}
            />
        </div>
        )
        )}/>
        <Route path="/" element={<Navigate to={"/catalog"} />} />
  </Routes>
  )
}
