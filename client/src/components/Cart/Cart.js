import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkoutform from "../Checkoutform/Checkoutform";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };
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
        {props.cartItems.length === 0 ? (
          "Empty Card"
        ) : (
          <p>There is {props.cartItems.length} Product in Cart</p>
        )}
      </div>
      <Bounce bottom cascade>
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imgUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p>Title: {item.title}</p>
                  <p>Qty: {item.qty} </p>
                  <p>Price: ${item.price}</p>
                </div>
                <button onClick={() => props.removeCart(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total: $
            {props.cartItems.reduce((acc, p) => {
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

export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart }
)(Cart);
