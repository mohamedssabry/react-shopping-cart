import React from "react";
import "../../css/Cart/Cart.css";

function Cart(props) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.CartItems.length === 0 ? (
          "Empty Card"
        ) : (
          <p>There is {props.CartItems.length} Product in Cart</p>
        )}
      </div>
      <div className="cart-items">
        {props.CartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imgUrl} alt="" />
            <div className="cart-info">
              <div>
                <p>Title: {item.title}</p>
                <p>Qty: {item.qty} </p>
                <p>Price: ${item.price}</p>
              </div>
              <button onClick={() => props.removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
