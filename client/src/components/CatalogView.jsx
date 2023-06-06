import { useEffect, useState } from "react";
import { getProduct } from "../services/productServices";
import { ProductCardView } from "./ProductCardView";

// eslint-disable-next-line react/prop-types
export const CatalogView = ({ onHandlerAddProductCart}) => {
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
                onHandlerAddProductCart={onHandlerAddProductCart}
            />
        </div>
        ))}
    </div> 
    </>
  )
}
