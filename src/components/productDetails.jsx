import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { details } = useSelector(state => state.productDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCart = () => {
        dispatch(addToCart(details));
        navigate("/cart");
    };

    if (!details) {
        return <div className="text-center p-10">No product details available.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <img
                            className="w-full h-auto object-cover"
                            src={details.images[0]}
                            alt={details.title}
                        />
                    </div>
                    <div className="p-4">
                        <h1 className="text-3xl font-bold mb-2">{details.title}</h1>
                        <p className="text-gray-700 mb-4">{details.description}</p>

                        <div className="flex justify-between items-center mb-4">
                            <p className="text-2xl font-bold text-red-500">${details.price}</p>
                            <p className="text-sm text-gray-500">{details.discountPercentage}% off</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <p><strong>Rating:</strong> {details.rating}</p>
                            <p><strong>Stock:</strong> {details.stock}</p>
                            <p><strong>Category:</strong> {details.category}</p>
                            <p><strong>Brand:</strong> {details.brand}</p>
                            <p><strong>Weight:</strong> {details.weight}</p>
                            {details.dimensions && <p><strong>Dimensions:</strong> {details.dimensions.width} x {details.dimensions.height} x {details.dimensions.depth}</p>}
                            <p><strong>Warranty:</strong> {details.warrantyInformation}</p>
                            <p><strong>Shipping:</strong> {details.shippingInformation}</p>
                            <p><strong>Status:</strong> {details.availabilityStatus}</p>
                        </div>
                        <button
                            onClick={handleCart}
                            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                        >
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L19 13M7 13V6h13" />
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="17" cy="21" r="1" />
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
