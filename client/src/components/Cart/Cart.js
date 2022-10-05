import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkoutform from "../Checkoutform/Checkoutform";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email
    }
    console.log(order);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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

      {props.CartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total: $
            {props.CartItems.reduce((acc, p) => {
              return p.qty !== 0 ? acc + p.price * p.qty : null;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>Select Product</button>
        </div>
      )}
      <Checkoutform
        showForm={showForm}
        handleOnSubmit={handleOnSubmit}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Cart;
