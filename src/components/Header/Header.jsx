
const Header = () => {
    return (
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-2 gap-5">
            <div className="flex items-center">
                <div className="text-right">
                    <div className="flex justify-center">
                        <img className="w-64" src="https://i.ibb.co/rQKZp5m/mockup-graphics-n-Xjv-Ul-E8418-unsplash-removebg-preview.png" alt="" />
                    </div>
                    <h1 className="text-6xl font-bold mb-3">Hi, from BiteBliss</h1>
                    <p>BiteBliss: Your Ultimate Food and Beverage Paradise. Discover, savor, and indulge in a world of culinary delights. From savory dishes to exquisite beverages, we&#39;re your go-to source for all things food and drink. Join us on a delectable journey through the flavors of the world.</p>
                    <button className="bg-orange-600 text-white font-medium py-3 px-5 my-5 rounded-full">Learn more</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="w-72 " src="https://i.ibb.co/HtxS7bd/mirko-fabian-y-S7-AJp5l-YWk-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Header;