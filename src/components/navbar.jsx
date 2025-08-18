import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginUser } = useSelector((state) => state.user);

    


    return (
        <div className="flex justify-between items-center px-10 py-6 bg-gray-200 text-2xl relative">
            

  
        <div className="flex justify-between items-center px-10 py-6 bg-gray-200 text-2xl relative">
            <div className="flex items-center gap-10">
                <svg width="270" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="50" fontFamily="Arial" fontSize="56" fill="blue" fontWeight="bold">SHOPIFY</text>
                </svg>
                <Link to="/home" className="text-2xl hover:underline">Home</Link>
                <Link to="/shop" className="text-2xl hover:underline">Shop</Link>
            </div>

            <div className="flex items-center gap-8">
                <Link to="/home">Home</Link>
                <Link to="/myProducts">My products</Link>
                <Link to="/shop">Shop By Filter</Link>
                <Link to="/login" className="hover:underline">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                </Link>
                <Link to="/cart" className="hover:underline">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
                    </svg>
                </Link>
                <Link to="/seller">
                    <p className="hover:underline cursor-pointer">Become a seller</p>
                </Link>
            </div>
            </div>
            </div>
    );
};

export default Navbar;