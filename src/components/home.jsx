import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice";
import { viewDetails } from "../redux/features/productDetailSlice";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/features/cartSlice";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.product);
    const { item } = useSelector((state) => state.sellerItem);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === "loading") {
        return <h1 className="h-screen flex items-center justify-center text-4xl">Loading...</h1>;
    }

    if (status === "failed") {
        return <h1 className="h-screen flex items-center justify-center text-4xl">Error: {error}</h1>;
    }

    const handleDetails = (product) => {
        dispatch(viewDetails(product));
        navigate("/productDetails");
    };

    const handleCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart");
    };

    return (
        <div className="bg-gray-100 p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products &&
                    products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                            <div>
                                <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md" />
                                <h1 className="text-xl font-bold mt-4">{product.title}</h1>
                                <h1 className="text-lg text-gray-700">Price: ${product.price}</h1>
                            </div>
                            <div className="mt-4 flex flex-col gap-2">
                                <button
                                    onClick={() => handleDetails(product)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    View Details
                                </button>
                                <button
                                    onClick={() => handleCart(product)}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2"
                                >
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L19 13M7 13V6h13"
                                        />
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="17" cy="21" r="1" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                {item &&
                    item.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                            <div>
                                <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md" />
                                <h1 className="text-xl font-bold mt-4">{product.title}</h1>
                                <h1 className="text-lg text-gray-700">Price: ${product.price}</h1>
                            </div>
                            <div className="mt-4 flex flex-col gap-2">
                                <button
                                    onClick={() => handleDetails(product)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    View Details
                                </button>
                                <button
                                    onClick={() => handleCart(product)}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2"
                                >
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L19 13M7 13V6h13"
                                        />
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="17" cy="21" r="1" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;