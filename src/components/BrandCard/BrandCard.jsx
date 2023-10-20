import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { brand_name, brand_image } = brand;
    return (
        <Link to={`/productpage/${brand_name}`}>
            <div className="card  bg-base-100 shadow-lg hover:shadow-2xl">
                <figure><img className="w-60 h-60" src={brand_image} alt="image" /></figure>
                <div className="p-3">
                    <h2 className="text-center text-xl font-bold">{brand_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;