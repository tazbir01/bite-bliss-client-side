import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../Product/Product";

const Products = () => {
    const allProducts = useLoaderData()
    const { brand } = useParams()
    const [brandProducts, setBrandProducts] = useState([])

    useEffect(() => {
        const products = allProducts.filter(product => product.brand === brand)
        setBrandProducts(products)
    }, [allProducts, brand])

    return (
        <div className="mt-20">
            <h2>Products: {allProducts.length}</h2>
            <h2>{brand}: {brandProducts.length}</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-5">
                {
                    brandProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;