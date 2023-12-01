/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const userItemsCart = () => {
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]); //Aquí mantenemos actualizado el sessionStorage

    const onHandlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispatch({
                type: UpdateQuantityProductCart,
                payload: product,
            });
        } else {
            dispatch({
                type: AddProductCart,
                payload: product,
            });
        }
    }

    const onHandlerDeleteProductCart = (id) => {
        dispatch({
            type: DeleteProductCart,
            payload: id,
        });
    }

    return {
        cartItems,
        onHandlerAddProductCart,
        onHandlerDeleteProductCart,
    }
}