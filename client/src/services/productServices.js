export const getProduct = async () => {
    const response = await fetch("http://localhost:8080/api/products")
    const products = await response.json();
    return products;
};

export const calculateTotal = (cartItems) => {
    return cartItems.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0);
};