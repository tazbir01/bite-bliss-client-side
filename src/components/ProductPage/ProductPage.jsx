import { useLoaderData, useParams } from "react-router-dom";

const ProductPage = () => {
    const products = useLoaderData()
    console.log(products)
    const {brand_name, _id} = useParams()
    console.log(brand_name, _id)

    const product = products.filter(product => product.brand == brand_name)
 
    return (
        <div className="mt-20">
            <h2>{product.length}</h2>
            <h2>{products.length}</h2>
            
            {/* {
                products.map(product => <p key={product._id}>{product._id}{product.brand}</p>)
            } */}
        </div>
    );
};

export default ProductPage;