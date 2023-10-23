import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { BsCart4 } from "react-icons/bs";
import swal from "sweetalert";

const ProductDetails = () => {
    const products = useLoaderData()
    // console.log(products)
    const {id} = useParams()
    // const idInt = parseInt(id)
    // console.log(idInt) 

    const productDetails = products.filter(product => product._id === id)
    // console.log(productDetails)

    const handleCartButton = (product) =>{
        console.log(product)
        // e.preventDefault()
        fetch('http://localhost:5000/cart',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                swal("Successfully Added To Cart","", "success");
            }
        })

    }
        
    // const { name, brand, price, type, category, image, rating, description } = details;
    return (
        <div>
            {
                productDetails.map(proInfo => <div className="md:flex gap-5 mt-20 md:mt-36 mb-20 md:h-[50vh] max-w-5xl mx-auto" key={proInfo._id}>
                    <img className="" src={proInfo.image} alt="" />
                    <div className="space-y-4 p-3 md:p-0">
                        <h4 className="text-2xl font-bold">{proInfo.name}</h4>
                        <p className="font-medium">{proInfo.description}</p>
                        <p className="font-bold">Price: {proInfo.price}TK</p>
                        <p className="font-bold">From {proInfo.brand}.</p>
                        <button onClick={()=>handleCartButton(proInfo)} className="flex items-center gap-2 btn bg-red-600 text-white"><BsCart4 className="text-2xl"></BsCart4>Add to cart</button>
                    </div>
                </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;