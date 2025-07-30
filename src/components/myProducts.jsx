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
        <div className="h-200">
            <Link to="/seller">
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pr-10 ">Add Products  </button>
            </Link>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-center">
            {item && item.map(product => <div key={product.id}
               
                    className="">
                <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover mb-2" />
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-700">${product.price}</p>

           
                
                <button onClick={() => handleDetails(product)}>View More</button>
                <button onClick={()=>handleDelete(product.id)}>Delete</button>
                <button onClick={()=>handleUpdate(product)}>Update</button>
            </div>)}
            </div>
        </div>
    )
}

export default MyProducts