import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BrandCard from "../BrandCard/BrandCard";
import TestSection from "../TestSection/TestSection";
import AboutSection from "../AboutSection/AboutSection";


const Home = () => {
    const brands = useLoaderData()
    
    return (
        <div>
            {/* header */}
            <Header></Header>
            {/* test section */}
            <TestSection></TestSection>
            
            {/* body */}
            <div className="grid md:grid-cols-3 gap-5 p-6 bg-base-200">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
            {/* about section */}
            <AboutSection></AboutSection>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;