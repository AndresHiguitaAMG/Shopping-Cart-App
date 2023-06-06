import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";


const initialCartItems = [
    // {
    //     product: {},
    //     quantity: 0,
    //     total: 0
    // }
];

export const CartApp = () => {
    const [ cartItems, setCartItems ] = useState(initialCartItems);

    const handleAddProductCart = (product) => {
        setCartItems([
            ...cartItems,
            {
                product,
                quantity: 1,
                total: product.price * 1
            }
        ]);
    }

    return (
    <>
        <div className="container">
            <h3>Cart App</h3>
            <CatalogView 
                handleAddProductCart={(product) => handleAddProductCart(product)} //Lo recibe y lo pasa
            />
            <div className="my-4 w-50">
                <CartView 
                    cartItems={cartItems}
                />
            </div>
        </div>
    </>
  )
}
