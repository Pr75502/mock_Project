import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, clearEditingItem } from '../redux/features/sellerItemSlice';
import { useNavigate } from 'react-router-dom';

const SellerItemDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { editingItem } = useSelector(state => state.sellerItem);

    const [item, setItem] = useState({
        id: Date.now(),
        title: '',
        description: '',
        price: '',
        images: [],
        discountPercentage: '',
        rating: '',
        stock: '',
        category: '',
        brand: '',
        weight: '',
        dimensions: { width: '', height: '', depth: '' },
        warrantyInformation: '',
        shippingInformation: '',
        availabilityStatus: '',
    });

    useEffect(() => {
        if (editingItem) {
            setItem(editingItem);
        }
    }, [editingItem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleDimensionChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            dimensions: {
                ...prevItem.dimensions,
                [name]: value
            }
        }));
    };

    const handleAddItem = () => {
        dispatch(addItem(item));
        setItem({ id: Date.now(), title: '', description: '', price: '', images: [], discountPercentage: '', rating: '', stock: '', category: '', brand: '', weight: '', dimensions: { width: '', height: '', depth: '' }, warrantyInformation: '', shippingInformation: '', availabilityStatus: '' });
        navigate("/myProducts");
    };

    const handleUpdateItem = () => {
        dispatch(updateItem(item));
        dispatch(clearEditingItem());
        navigate("/myProducts");
    };

    return (
        <div className="p-10 h-300">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">{editingItem ? 'Update Product' : 'Add New Product'}</h2>
                <div className="space-y-4">
                    <input type="text" name="title" placeholder="Title" value={item.title} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea name="description" placeholder="Description" value={item.description} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="price" placeholder="Price" value={item.price} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="images" placeholder="Image URL" value={item.images[0] || ''} onChange={(e) => setItem(prev => ({ ...prev, images: [e.target.value] }))} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="discountPercentage" placeholder="Discount Percentage" value={item.discountPercentage} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="rating" placeholder="Rating" value={item.rating} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="stock" placeholder="Stock" value={item.stock} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="category" placeholder="Category" value={item.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="brand" placeholder="Brand" value={item.brand} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="weight" placeholder="Weight" value={item.weight} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div className="grid grid-cols-3 gap-2">
                        <input type="number" name="width" placeholder="Width" value={item.dimensions.width} onChange={handleDimensionChange}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="number" name="height" placeholder="Height" value={item.dimensions.height} onChange={handleDimensionChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="number" name="depth" placeholder="Depth" value={item.dimensions.depth} onChange={handleDimensionChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <input type="text" name="warrantyInformation" placeholder="Warranty Information" value={item.warrantyInformation} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="shippingInformation" placeholder="Shipping Information" value={item.shippingInformation} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="availabilityStatus" placeholder="Availability Status" value={item.availabilityStatus} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button onClick={editingItem ? handleUpdateItem : handleAddItem} className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {editingItem ? 'Update Item' : 'Add Item'}
                </button>
            </div>
        </div>
    );
};

export default SellerItemDetails;