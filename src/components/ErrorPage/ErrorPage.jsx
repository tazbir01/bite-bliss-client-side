import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-40 space-y-5">
            <h1 className="text-3xl">404</h1>
            <h1 className="text-6xl font-bold">Page Not Found</h1>
            <p className="text-2xl font-medium">Sorry, we couldn&#39;t find the page</p>
            <Link to="/"><button className="btn btn-ghost text-indigo-600"><BsArrowLeft></BsArrowLeft>Go back to home</button></Link>
        </div>
    );
};

export default ErrorPage;