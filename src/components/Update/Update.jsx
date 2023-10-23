import { useLoaderData } from "react-router-dom";

const Update = () => {
    const product = useLoaderData()
    console.log(product)
    // const { name, brand, price, type, category, image, rating, description } = product;
    const handleUpdateProduct = e =>{
        e.preventDefault()

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
                        <input type="text" name="brand" placeholder="Enter brand name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Enter product price" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input type="text" name="type" placeholder="Enter type of product" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Enter product category" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product image</span>
                    </label>
                    <input type="text" name="image" placeholder="Enter product image" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Enter product rating out of 5" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered" placeholder="Enter short description"></textarea>
                </div>
                {/* button */}
                <input type="submit" value="Product Update" className="btn btn-primary w-full mt-4" />
            </form>
        </div>
    );
};

export default Update;