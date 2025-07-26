const FAQ = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-bold">How do I place an order?</h2>
                    <p>You can place an order by adding items to your cart and proceeding to checkout.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">How can I track my order?</h2>
                    <p>You can track your order from your account page.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">What is your return policy?</h2>
                    <p>We have a 30-day return policy for all our products.</p>
                </div>
            </div>
        </div>
    )
}
export default FAQ