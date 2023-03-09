import { Link } from "react-router-dom";

export default function Home()
{
    return (
        <>
            <Link to="/products" className="bg-sky-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-5" >
                Products
            </Link>
        </>
    )
}
