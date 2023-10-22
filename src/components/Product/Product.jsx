
const Product = ({product}) => {
    const { name, brand, price, type, image, rating} = product;
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
                        <div className="badge badge-outline">Details</div>
                        <div className="badge badge-outline">Update</div>
                    </div>
                </div>
            </div>
    );
};

export default Product;