import { setCategory } from "../redux/features/productSlice";
import { useSelector, useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
    const { products, allProducts } = useSelector((state) => state.product);

    const handleCategory = (category) => {
        dispatch(setCategory(category));
    };

    const uniqueCategories = ["All", ...new Set(allProducts.map((product) => product.category))];

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {uniqueCategories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategory(category)}
                        className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white">
                        <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover mb-2 rounded-md" />
                        <h2 className="text-xl font-bold mb-1">{product.title}</h2>
                        <p className="text-gray-700">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;