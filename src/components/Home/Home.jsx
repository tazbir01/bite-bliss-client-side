import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BrandCard from "../BrandCard/BrandCard";

const Home = () => {
    const brands = useLoaderData()

    return (
        <div className="">
            {/* header */}
            <Header></Header>
            {/* body */}
            <div className="grid md:grid-cols-3 gap-5 mt-20">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;