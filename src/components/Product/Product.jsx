
const Product = ({product}) => {
    const { name, brand, price, type, image, rating, description } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-40 w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{brand}</p>
                    <p>{type}</p>
                    <p>{price}</p>
                    <p>{rating}</p>

                    
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Details</div>
                        <div className="badge badge-outline">Update</div>
                    </div>
                </div>
            </div>
    );
};

export default Product;