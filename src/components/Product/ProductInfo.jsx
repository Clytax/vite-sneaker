import React, { useState } from "react";
import { Cart, Minus, Plus } from "../Icons/Icons";

import useCartStore from "../../store/useCartStore";

import { thumbnail1 } from "../../constants/images";

const ProductInfo = () => {
  const [value, setValue] = useState(0);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const isItemInCart = useCartStore((state) => state.isItemInCart);
  const addQuantity = useCartStore((state) => state.addQuantity);

  const handleValueChange = (e) => {
    if (e === "plus") {
      setValue(value + 1);
    } else {
      if (value > 0) {
        setValue(value - 1);
      }
    }
  };

  const handlePurchase = () => {
    if (value > 0) {
      addToCart(
        {
          id: 1,
          name: "Fall Limited Edition Sneakers",
          price: 125,
          image: thumbnail1,
        },
        value
      );
    }
  };
  return (
    <div className="product__info">
      <p className="company-title | fs-100 text-primary-400">Sneaker Company</p>
      <div className="product-title | fs-600">
        Fall Limited Edition Sneakers
      </div>
      <p className="product-text | fs-300">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product__price-container">
        <p className="product__price__current | fs-800 fw-bold text-neutral-800">
          $125.00
        </p>
        <p className="product__price__prev | fs-300 fw-bold text-neutral-500 line-through">
          $250.00
        </p>
      </div>
      <div className="product__action-container | clr-neutral-800">
        <div className="product__amount | button-br d-flex items-center justify-space-between ">
          <div
            className="product__minus"
            onClick={() => handleValueChange("minus")}
          >
            <Minus />
          </div>
          <div className="product__amount__value | fw-bold fs-300 text-neutral-800">
            {value}
          </div>
          <div
            className="product__plus"
            onClick={() => handleValueChange("plus")}
          >
            <Plus />
          </div>
        </div>
        <div
          onClick={handlePurchase}
          className="product__buy | button-br bg-primary-400 text-neutral-100 fw-bold d-flex items-center justify-center"
        >
          <Cart color="#FFFFFF" />
          <span>Add to Cart</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
