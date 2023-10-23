import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";

const MyCart = () => {
    const addedProducts = useLoaderData()
    return (
        <div className="mt-24">
            <div className="max-w-4xl mx-auto grid  gap-5 mb-10">
                {
                    addedProducts.map(product => <div key={product._id} className="flex items-center bg-base-100 shadow-xl">
                    <figure><img className="w-96 h-40" src={product.image} alt=""/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{product.name}</h2>
                      <p>Price: {product.price}TK</p>
                      <p>Type: {product.type}</p>
                    </div>
                      <div className="card-actions md:justify-end mr-3 md:mr-5">
                        <button className="btn btn-primary">Remove</button>
                      </div>
                  </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;