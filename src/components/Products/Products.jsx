import { useLoaderData, useParams } from "react-router-dom";
import {useState, useEffect} from "react";

const Products = () => {
    const allProducts = useLoaderData()
    const {brand} = useParams()
    const [brandProducts, setBrandProducts] = useState([])

    useEffect(()=>{
        const products = allProducts.filter(product => product.brand === brand)
        setBrandProducts(products)
    },[allProducts, brand])

    return (
        <div className="mt-20">
            <h2>Products: {allProducts.length}</h2>
            <h2>{brand}: {brandProducts.length}</h2>
            <h2></h2>
        </div>
    );
};

export default Products;