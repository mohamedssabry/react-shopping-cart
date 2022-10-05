import React from "react";
import "../../css/Checkoutform/Checkoutform.css";
import Input from "../Input/Input";

function Checkoutform(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <form onSubmit={props.handleOnSubmit}>
            <Input
              label="Name"
              type="text"
              required
              name="name"
              onChange={props.handleChange}
            />

            <Input
              label="Email"
              type="email"
              required
              name="email"
              onChange={props.handleChange}
            />

            <div>
              <button type="submit">Checkout</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Checkoutform;
