import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";

const Products = () => {
    const allProducts = useLoaderData()
    const { brand } = useParams()
    const [brandProducts, setBrandProducts] = useState([])

    useEffect(() => {
        const products = allProducts.filter(product => product.brand === brand)
        setBrandProducts(products)
    }, [allProducts, brand])

    if(!brandProducts){
        return setBrandProducts('No product available.')
    }
    
    return (
        <div className="mt-16">
            {/* slider section */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/H4WNS8m/id-OKp-Yns-Fd.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/CMtkYK8/Coke-Vending-About-Us-Banner-Scale-Max-Width-Wz-E0-NDBd.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gywjzZ1/herobanner.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* product card */}
            {/* <h2>Products: {allProducts.length}</h2>
            <h2>{brand}: {brandProducts.length}</h2> */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-5 my-20">
                {
                    brandProducts.length === 0 
                    ? <div className="flex justify-center items-center col-span-4">
                        <h4 className="text-2xl"><span className="text-black font-semibold">{brand}</span> No product available.</h4>
                        </div>
                    : brandProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;