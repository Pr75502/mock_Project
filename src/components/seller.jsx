
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Seller = () => {
    const { loginUser }=useSelector(state=>state.user)
    const navigate = useNavigate()
    
    const handleClick = () => {
        if (loginUser == null) {
            navigate("/login")
        } else {
            navigate("/sellerItemDetails")
      }
       
    }
        
    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('/src/assets/sellerBg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-lg max-w-2xl w-full text-white">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Become a Seller</h1>
                <p className="text-gray-300 text-lg mb-4">
                    Welcome to the Seller Portal! Join our marketplace and reach millions of customers.
                    As a seller, you can list your products, manage orders, and grow your business with ease.
                </p>
                <ul className="list-disc pl-6 text-gray-400 mb-6">
                    <li>Easy product listing and management</li>
                    <li>Secure payments and fast settlements</li>
                    <li>Dedicated support for sellers</li>
                    <li>Access to analytics and growth tools</li>
                </ul>
                
                <button
                    onClick={handleClick}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Start Selling
                    </button>
               
            </div>
        </div>
    );
};

export default Seller;