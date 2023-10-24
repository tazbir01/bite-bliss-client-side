import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { name, brand, price, type, image, rating, _id } = product;

    return (
        <div className="card bg-base-100 shadow-xl flex flex-col">
            <figure><img className="h-40 md:w-full" src={image} alt="" /></figure>
            <div className="px-5 pt-5 mb-2 flex flex-grow">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Type: {type}</p>
                    <p>Brand: {brand}</p>
                    <p>Price: {price}TK</p>
                    <p>Rating: {rating} out of 5</p>
                </div>
            </div>
            <div className="px-5 mb-5">
                <div className="badge badge-outline mr-2"><Link to={`/details/${_id}`}>Details</Link></div>
                <div className="badge badge-outline"><Link to={`/update/${_id}`}>Update</Link></div>
            </div>
        </div>
    );
};

export default Product;