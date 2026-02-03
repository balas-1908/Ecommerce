import Cookies from "js-cookie";
import { products } from "../data/prod";
import { useState } from "react";

function Checkout() {
  let cart = Cookies.get("cart");
  cart = cart ? JSON.parse(cart) : [];

  const items = cart.map(ci => {
    const product = products.find(p => p.id === ci.id);
    return { ...product, qty: ci.qty };
  });

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const tax = subtotal * 0.05; // 5% tax example
  const total = subtotal + tax;

  const [payment, setPayment] = useState("card");

  return (
    <div className="container mt-5">
      <div className="row">

        {/* LEFT SIDE – USER & PAYMENT */}
        <div className="col-md-7">
          <h4>Checkout</h4>

          <div className="card p-4 mb-4">
            <h6>Billing Details</h6>

            <input className="form-control mb-2" placeholder="Full Name" />
            <input className="form-control mb-2" placeholder="Email" />
            <input className="form-control mb-2" placeholder="Phone Number" />
            <input className="form-control mb-2" placeholder="Address" />
          </div>

          <div className="card p-4">
            <h6>Payment Method</h6>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
              <label className="form-check-label">
                Credit / Debit Card
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                checked={payment === "upi"}
                onChange={() => setPayment("upi")}
              />
              <label className="form-check-label">
                UPI / Google Pay / PhonePe
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              <label className="form-check-label">
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – ORDER SUMMARY */}
        <div className="col-md-5">
          <div className="card p-4">
            <h5>Order Summary</h5>

            {items.map(item => (
              <div key={item.id} className="d-flex justify-content-between mb-2">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Tax (5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="btn btn-success w-100 mt-3">
              Pay ${total.toFixed(2)}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
