import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function ProductCard({ product }) {
  const [qty, setQty] = useState(0);

  useEffect(() => {
    let cart = Cookies.get("cart");
    cart = cart ? JSON.parse(cart) : [];

    const item = cart.find(i => i.id === product.id);
    if (item) setQty(item.qty);
  }, [product.id]);

  const updateCart = (newQty) => {
    let cart = Cookies.get("cart");
    cart = cart ? JSON.parse(cart) : [];

    const index = cart.findIndex(i => i.id === product.id);

    if (newQty === 0) {
      if (index !== -1) cart.splice(index, 1);
    } else {
      if (index !== -1) {
        cart[index].qty = newQty;
      } else {
        cart.push({ id: product.id, qty: newQty });
      }
    }

    Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
    setQty(newQty);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-img-top" />

      <div className="card-body">
        <h5>{product.name}</h5>
        <p>${product.price}</p>

        {qty === 0 ? (
          <button
            className="btn btn-success"
            onClick={() => updateCart(1)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-outline-danger"
              onClick={() => updateCart(qty - 1)}
            >−</button>

            <strong>{qty}</strong>

            <button
              className="btn btn-outline-success"
              onClick={() => updateCart(qty + 1)}
            >+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
