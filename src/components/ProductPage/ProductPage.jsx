import { useLoaderData, useParams } from "react-router-dom";

const ProductPage = () => {
    const products = useLoaderData()
    const {brand_name} = useParams()
    console.log(brand_name)

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