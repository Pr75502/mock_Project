import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/features/cartSlice";
import { viewDetails } from "../redux/features/productDetailSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleDetails = (item) => {
        dispatch(viewDetails(item));
    };

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <img src={'https://www.shuvautsav.com/frontend/dist/images/logo/no-item-found-here.png'} alt="No items in cart" className="w-64 h-auto mb-8" />
                <p className="text-xl text-gray-600">Your cart is empty.</p>
                <Link to="/shop" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                            <div>
                                <img src={item.images[0]} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                                <p className="text-gray-700 mb-1">Category: {item.category}</p>
                                <p className="text-gray-700 mb-2">Price: ${item.price}</p>
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <button
                                        onClick={() => dispatch(decrementQuantity(item.id))}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-lg"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-semibold">Quantity: {item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(incrementQuantity(item.id))}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-lg"
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="text-lg font-bold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className="mt-4 flex flex-col gap-2">
                                <button
                                    onClick={() => handleDetails(item)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    View Details
                                </button>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m5 0V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
                    <p className="text-2xl font-bold text-center mb-4">Order Summary</p>
                    <p className="text-lg mb-2"><b>Items:</b> {cart.length}</p>
                    <p className="text-lg font-bold mb-4"><b>Total:</b> ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                    <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;