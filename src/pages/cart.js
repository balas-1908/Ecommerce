import Cookies from "js-cookie";
import { products } from "../data/prod";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let cart = Cookies.get("cart");
    cart = cart ? JSON.parse(cart) : [];
    setCartItems(cart);
  }, []);

  const cartProducts = cartItems.map(ci => {
    const product = products.find(p => p.id === ci.id);
    return { ...product, qty: ci.qty };
  });

  const total = cartProducts.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-5">
      <h3>Your Cart</h3>

      {cartProducts.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        <>
          {cartProducts.map(item => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5>{item.name}</h5>
                  <p>
                    ${item.price} × {item.qty}
                  </p>
                </div>
                <strong>
                  ${(item.price * item.qty).toFixed(2)}
                </strong>
              </div>
            </div>
          ))}

          <h4 className="text-end mt-3">
            Total: ${total.toFixed(2)}
          </h4>

          <div className="text-end">
            <Link to="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
