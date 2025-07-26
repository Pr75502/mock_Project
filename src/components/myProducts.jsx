import { useSelector } from "react-redux"
import sellerItemReducer from "../redux/features/sellerItemSlice"
import { Link } from "react-router-dom"

const MyProducts = () => {
    const { item } = useSelector(state => state.sellerItem)
   

    return (
        <div className="h-200">
            <Link to="/seller">
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pr-10 ">Add Products  </button>
            </Link>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-center">
            {item && item.map(product => <div key={product.id}
                onClick={() => handleDetails(product)}
                    className="">
                <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover mb-2" />
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-700">${product.price}</p>
           

                
            </div>)}
            </div>
        </div>
    )
}

export default MyProducts