


import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <ul>
                            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
                            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Help</h3>
                        <ul>
                            <li><Link to="/payment" className="hover:underline">Payment</Link></li>
                            <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
                            <li><Link to="/cancellation-returns" className="hover:underline">Cancellation & Returns</Link></li>
                            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Consumer Policy</h3>
                        <ul>
                            <li><Link to="/terms-of-use" className="hover:underline">Terms Of Use</Link></li>
                            <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
                            <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
                            <li><Link to="/grievance-redressal" className="hover:underline">Grievance Redressal</Link></li>
                            <li><Link to="/epr-compliance" className="hover:underline">EPR Compliance</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <ul>
                            <li><Link to="/facebook" className="hover:underline">Facebook</Link></li>
                            <li><Link to="/instagram" className="hover:underline">Instagram</Link></li>
                            <li><Link to="/twitter" className="hover:underline">Twitter</Link></li>
                            <li><Link to="/youtube" className="hover:underline">YouTube</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Shopify. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="/become-a-seller" className="hover:underline">Become a Seller</Link>
                        <Link to="/help-center" className="hover:underline">Help Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;