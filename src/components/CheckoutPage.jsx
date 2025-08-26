import React from 'react';

const CheckoutPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address</label>
                            <input type="text" id="address" name="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-lg font-medium text-gray-700">City</label>
                            <input type="text" id="city" name="city" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="state" className="block text-lg font-medium text-gray-700">State</label>
                                <input type="text" id="state" name="state" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" />
                            </div>
                            <div>
                                <label htmlFor="zip" className="block text-lg font-medium text-gray-700">Zip Code</label>
                                <input type="text" id="zip" name="zip" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="card-number" className="block text-lg font-medium text-gray-700">Card Number</label>
                            <input type="text" id="card-number" name="card-number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="expiry-date" className="block text-lg font-medium text-gray-700">Expiry Date</label>
                                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" />
                            </div>
                            <div>
                                <label htmlFor="cvv" className="block text-lg font-medium text-gray-700">CVV</label>
                                <input type="text" id="cvv" name="cvv" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <button className="w-full md:w-1/2 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-xl">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;