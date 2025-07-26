const Payment = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Payment</h1>
            <p className="mb-4">We accept a wide variety of payment methods.</p>
            <ul className="list-disc pl-5">
                <li>Credit Card (Visa, Mastercard, American Express)</li>
                <li>Debit Card</li>
                <li>Net Banking</li>
                <li>UPI</li>
                <li>Cash on Delivery</li>
            </ul>
        </div>
    )
}
export default Payment