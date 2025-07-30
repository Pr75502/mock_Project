import { useSelector } from "react-redux"
import sellerItemReducer from "../redux/features/sellerItemSlice"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeItem, setEditingItem } from "../redux/features/sellerItemSlice";
import { viewDetails } from "../redux/features/productDetailSlice";


const MyProducts = () => {
    const { item } = useSelector(state => state.sellerItem)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleDelete=(id)=>{
        dispatch(removeItem(id))
        navigate("/home")
        
    }

    const handleDetails=(product)=>{
        dispatch(viewDetails(product))
        navigate("/productDetails")
    }
    const handleUpdate = (product) => {
        dispatch(setEditingItem(product));
        navigate("/sellerItemDetails");
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">My Products</h1>
                <Link to="/seller">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item && item.map(product => (
                    <div key={product.id} className="bg-white border rounded-lg shadow-md p-4 text-center">
                        <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover mb-2" />
                        <h2 className="text-xl font-bold">{product.title}</h2>
                        <p className="text-gray-700">${product.price}</p>
                        <div className="mt-4 flex justify-around">
                            <button onClick={() => handleDetails(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View More</button>
                            <button onClick={() => handleDelete(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            <button onClick={() => handleUpdate(product)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Update</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyProducts