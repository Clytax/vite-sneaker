import React, { useState } from "react";

import { avatar } from "../../constants/images";
import { Cart, Logo } from "../Icons/Icons";

import useCartStore from "../../store/useCartStore";

const DesktopNav = ({ toggleCart, openCart, cartIsOpen }) => {
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  const state = useCartStore();
  return (
    <nav className="desktop-nav">
      <div className="nav__section">
        <div className="nav__logo">
          <Logo color="#1D2026" />
        </div>
        <div className="nav__items">
          <li className="| fs-200 lh-2 text-neutral-700">
            <a href="#">Collections</a>
          </li>
          <li className="| fs-200 lh-2 text-neutral-700">
            <a href="#">Men</a>
          </li>
          <li className="| fs-200 lh-2 text-neutral-700">
            <a href="#">Women</a>
          </li>
          <li className="| fs-200 lh-2 text-neutral-700">
            <a href="#">About</a>
          </li>
          <li className="| fs-200 lh-2 text-neutral-700">
            <a href="#">Contact</a>
          </li>
        </div>
      </div>
      <div className="nav__section">
        <div
          className="nav__cart"
          onClick={() => {
            openCart();
            console.log(cartIsOpen);
          }}
        >
          <div className="item-amount | fw-bold text-neutral-100">
            {getTotalItems()}
          </div>
          <Cart color="#69707D" />
        </div>
        <div className="nav__avatar ">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
