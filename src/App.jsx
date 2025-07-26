import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { Home, SignUp, Login, Shop, Footer, Navbar, Cart, ProductDetails, Seller, ContactUs, Careers, Payment, Shipping, CancellationReturns, FAQ, TermsOfUse, Privacy, Sitemap, GrievanceRedressal, EPRCompliance, Facebook, Instagram, Twitter, YouTube, BecomeASeller, HelpCenter,SellerItemDetails, MyProducts } from './imports.jsx';


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <Routes>
          <Route path="/myProducts" element={<MyProducts/>}/>
        <Route path="/productDetails" element={<ProductDetails/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sellerItemDetails" element={<SellerItemDetails />} />
          <Route path="/seller" element={<Seller />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/cancellation-returns" element={<CancellationReturns />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
        <Route path="/epr-compliance" element={<EPRCompliance />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/become-a-seller" element={<BecomeASeller />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
