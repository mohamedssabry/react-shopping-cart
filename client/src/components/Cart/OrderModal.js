import React from "react";
import Modal from "react-modal";
import { words } from "../../words";

function OrderModal(props) {
  const { order, closeModal, cartItems } = props;
  return (
    <>
      {order && (
        <Modal isOpen={order} onRequestClose={closeModal}>
          <div className="order-info">
            <span className="close-icon" onClick={closeModal}>
              &times;
            </span>
            <p className="alert-success">{ words.orderdone}</p>
            <table>
              <tr>
                <td>{ words.name}</td>
                <td>{order.name}</td>
              </tr>
              <tr>
                <td>{words.email}</td>
                <td>{order.email}</td>
              </tr>
              <tr>
                <td>{ words.total2}</td>
                <td>
                  $
                  {cartItems.reduce((acc, p) => {
                    return p.qty !== 0 ? acc + p.price * p.qty : null;
                  }, 0)}
                </td>
              </tr>
              <tr>
                <td>{ words.orderselect}</td>
                <td>
                  {cartItems.map((p) => (
                    <div className="cart-data">
                      <p>Number of this products: {p.qty}</p>
                      <p>Title of products: {p.title}</p>
                      <br />
                    </div>
                  ))}
                </td>
              </tr>
            </table>
          </div>
        </Modal>
      )}
    </>
  );
}

export default OrderModal;
