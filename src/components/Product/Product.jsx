import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { name, brand, price, type, image, rating, _id } = product;   

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-40 md:w-full" src={image} alt="" /></figure>
            <div className="p-5">
                <h2 className="card-title">{name}</h2>
                <p>Type: {type}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}TK</p>
                <p>Rating: {rating}</p>
                <div className="mt-3 card-actions justify-end">
                    <div className="badge badge-outline"><Link to={`/details/${_id}`}>Details</Link></div>
                    <div className="badge badge-outline"><Link to={`/update/${_id}`}>Update</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Product;