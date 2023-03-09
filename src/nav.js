import { Link } from "react-router-dom";

export default function Nav()
{
    return (
        <div className="mt-5 ml-5">
            <Link to="/" className="bg-sky-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-5 mr-5" >
                Home
            </Link>
            <Link to="/products" className="bg-sky-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-5" >
                Products
            </Link>
        </div>
    )
}
