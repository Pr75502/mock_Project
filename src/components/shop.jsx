import { setCategory, setSearchTerm, setLiveSearchTerm } from "../redux/features/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { viewDetails } from "../redux/features/productDetailSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
};

const Shop = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const { products, allProducts, liveSearchProducts } = useSelector((state) => state.product);
    const [search, setSearch] = useState("");

    const handleLiveSearch = debounce((value) => {
        dispatch(setLiveSearchTerm(value));
    }, 300);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        handleLiveSearch(value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(search));
        navigate("/shop");
        setSearch("");
        dispatch(setLiveSearchTerm(""));
    };

    const handleSuggestionClick = (product) => {
        dispatch(setSearchTerm(product.title));
        navigate("/shop");
        setSearch("");
        dispatch(setLiveSearchTerm(""));
    };

    const handleCategory = (category) => {
        dispatch(setCategory(category));
    };
    const handleClick = (product) => {
        dispatch(viewDetails(product))
        navigate("/productDetails")

    }

    const uniqueCategories = ["All", ...new Set(allProducts.map((product) => product.category))];

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSearchSubmit} className="relative mb-8 flex justify-center">
                <input
                    placeholder="Search for Products Brands and more"
                    className="w-96 h-10 border border-solid rounded-lg px-4 text-base hover:bg-gray-300"
                    value={search}
                    onChange={handleSearchChange}
                />
                {search && liveSearchProducts.length > 0 && (
                    <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-96 max-h-60 overflow-y-auto shadow-lg top-full">
                        {liveSearchProducts.map((product) => (
                            <div
                                key={product.id}
                                className="p-2 cursor-pointer hover:bg-gray-100 text-base border-b border-gray-200 last:border-b-0"
                                onClick={() => handleSuggestionClick(product)}
                            >
                                {product.title} ({product.category})
                            </div>
                        ))}
                    </div>
                )}
            </form>
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
                    <div key={product.id}
                        onClick={()=>handleClick(product)}
                        className="border p-4 rounded-lg shadow-md bg-white">
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