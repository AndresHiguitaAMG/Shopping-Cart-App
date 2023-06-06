import { useEffect, useState } from "react";
import { getProduct } from "../services/productServices";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handleAddProductCart }) => {
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        setProducts(getProduct());
      }, []);
      
      return (
      <>
      <div className="row">
        {
        products.map(prod => (
        <div className="col-4 my-2"  key={prod.id}>
            <ProductCardView
                id={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
                handleAddProductCart={handleAddProductCart}
            />
        </div>
        ))}
    </div> 
    </>
  )
}
