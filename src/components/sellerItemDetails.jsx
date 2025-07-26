import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/sellerItemSlice';

const SellerItemDetails = () => {
    const dispatch = useDispatch();
    const [item, setItem] = useState({
        id: Date.now(),
        title: '',
        description: '',
        price: '',
        images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleAddItem = () => {
        dispatch(addItem(item));
        setItem({ id:Date.now(), title: '', description: '', price: '', images: [] })
    };

    return (
        <div className="p-10 h-200">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                <div className="space-y-4">
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        value={item.title}
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea 
                        name="description" 
                        placeholder="Description" 
                        value={item.description}
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="number" 
                        name="price" 
                        placeholder="Price" 
                        value={item.price}
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="text" 
                        name="images" 
                        placeholder="Image URL" 
                        value={item.images[0] || ''}
                        onChange={(e) => setItem(prev => ({...prev, images: [e.target.value]}))} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    onClick={handleAddItem} 
                    className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Add Item
                </button>
            </div>
        </div>
    );
};

export default SellerItemDetails;