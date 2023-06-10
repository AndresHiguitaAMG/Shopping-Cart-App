import { userItemsCart } from "../src/hooks/useItemsCart";
import { NavBar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    const { cartItems, onHandlerAddProductCart, onHandlerDeleteProductCart } = userItemsCart();

    return (
    <>
        <NavBar />
        <div className="container my-4">
            <h3>Cart App</h3>
            <CartRoutes
                cartItems={cartItems} 
                onHandlerAddProductCart={onHandlerAddProductCart} 
                onHandlerDeleteProductCart={onHandlerDeleteProductCart}
            />
        </div>
    </>
  )
}
