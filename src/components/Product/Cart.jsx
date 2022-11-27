import React, { useRef } from "react";
import useCartStore from "../../store/useCartStore";
import { Delete } from "../Icons/Icons";

import useOutsideAlerter from "../../hooks/useOutsideClick";
const Cart = () => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const cart = useCartStore((state) => state.cart);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const cartIsOpen = useCartStore((state) => state.cartIsOpen);

  return (
    cartIsOpen && (
      <div className="cart" ref={wrapperRef}>
        <h1 className="fs-300 fw-bold text-neutral-800">Cart</h1>
        <div className="cart-divider"></div>
        <div className="cart-items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item__image">
                  <img src={item.image} alt={item.name} />
                </div>
                {/* Info */}
                <div className="cart-item__info">
                  <h2 className="fs-300 text-neutral-700 fw-regular lh-2">
                    {item.name}
                  </h2>
                  <div className="cart-item__info__price">
                    <p className="fs-300 text-neutral-700 lh-2">
                      {item.price}.00 x {item.quantity} {"  "}
                      <span className="fw-bold text-neutral-800">
                        ${item.price * item.quantity}.00
                      </span>
                    </p>
                  </div>
                </div>
                {/* Delete */}
                <div
                  className="cart-teim__remove"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  <Delete />
                </div>
              </div>
            ))
          ) : (
            <h2 className="empty-cart | text-neutral-700 fw-bold fs-300 ">
              Your cart is empty
            </h2>
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-container">
            <div className="cart__checkout | fs-300 text-neutral-100 fw-bold">
              Checkout
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Cart;
