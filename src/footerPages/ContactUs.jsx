const ContactUs = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">We'd love to hear from you! Please reach out to us using the information below.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Our Address</h2>
                    <p>Shopify Internet Private Limited,</p>
                    <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
                    <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                    <p>Bengaluru, 560103, Karnataka, India</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                    <p><strong>Email:</strong> support@shopify.in</p>
                    <p><strong>Phone:</strong> 044-45614700</p>
                </div>
            </div>
        </div>
    )
}
export default ContactUs