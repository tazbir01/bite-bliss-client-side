import swal from "sweetalert";

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const name = e.target.name.value
        const brand = e.target.brand.value
        const price = e.target.price.value
        const type = e.target.type.value
        const category = e.target.category.value
        const image = e.target.image.value
        const rating = e.target.rating.value
        const description = e.target.description.value
        const newProduct = { name, brand, price, type, category, image, rating, description }
        console.log(newProduct)

        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                swal("Good job!", "Successfully added your product", "success");
            }
        })

    }
    return (
        <div className="md:w-1/2 mx-auto my-24 p-2">
            <h2 className="text-2xl font-bold ">Add new product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter product name" className="input input-bordered w-full" />
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
                    {/* <input type="text" name="description" placeholder="" className="input input-bordered w-full" /> */}
                    <textarea name="description" className="textarea textarea-bordered" placeholder="Enter short description"></textarea>
                </div>
                {/* button */}
                <input type="submit" value="Add Product" className="btn btn-primary w-full mt-4" />
            </form>
        </div>
    );
};

export default AddProduct;