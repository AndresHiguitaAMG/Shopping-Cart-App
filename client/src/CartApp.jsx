import { useEffect, useReducer } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./components/reducer/itemsReducer";


const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const onHandlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispatch({
                type: "updateQuantityProductCart",
                payload: product,
            });
        } else {
            dispatch({
                type: "addProductCart",
                payload: product,
            });
        }
    }

    const onHandlerDeleteProductCart = (id) => {
        dispatch({
            type: "deleteProductCart",
            payload: id,
        });
    }

    return (
    <>
        <div className="container my-4">
            <h3>Cart App</h3>
            <CatalogView 
                onHandlerAddProductCart={(product) => onHandlerAddProductCart(product)} //Lo recibe y lo pasa
            />
            {
                cartItems?.length <= 0 ||
                //() --> porqué es un objeto
                (
                <div className="my-4 w-50">
                    <CartView
                        cartItems={cartItems}
                        onHandlerDeleteProductCart={onHandlerDeleteProductCart}
                    />
                </div>
                )
            }
        </div>
    </>
  )
}
