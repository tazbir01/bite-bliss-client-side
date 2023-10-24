import { useLoaderData} from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
    const product = useLoaderData()
    console.log(product)
  
    const { name, brand, price, type, image, rating, description, _id } = product;
    
    const handleUpdateProduct = e => {
        e.preventDefault()
        const name = e.target.name.value
        const brand = e.target.brand.value
        const price = e.target.price.value
        const type = e.target.type.value
        const image = e.target.image.value
        const rating = e.target.rating.value
        const description = e.target.description.value
        const updateProduct = { name, brand, price, type, image, rating, description }
        console.log(updateProduct)

        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                swal("", "Successfully Updated", "success");
            }
        })
    }


    return (
        <div className="md:w-1/2 mx-auto my-24 p-2">
            <h2 className="text-2xl font-bold ">Update product</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className="">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Enter product name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brand" defaultValue={brand} placeholder="Enter brand name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Enter product price" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input type="text" name="type" defaultValue={type} placeholder="Enter type of product" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product image</span>
                    </label>
                    <input type="text" name="image" defaultValue={image} placeholder="Enter product image" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product rating</span>
                    </label>
                    <input type="text" name="rating" defaultValue={rating} placeholder="Enter product rating (1-5)/5" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <textarea name="description" defaultValue={description} className="textarea textarea-bordered" placeholder="Enter short description"></textarea>
                </div>
                {/* button */}
                <input type="submit" value="Product Update" className="btn btn-primary w-full mt-4" />
            </form>
        </div>
    );
};

export default Update;