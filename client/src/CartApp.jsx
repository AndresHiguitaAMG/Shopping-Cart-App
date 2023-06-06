import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";


const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
    const [ cartItems, setCartItems ] = useState(initialCartItems);

    const onHandlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            //Dos formas distintas para este caso, map devuelve un array así que no es necesario usar [...]
            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])
            setCartItems(
                cartItems.map((i) => {
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            )
        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);
        }
    }

    const onHandlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id),
        ]);
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
