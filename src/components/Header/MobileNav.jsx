import React, { useState } from "react";
import { avatar } from "../../constants/images";
import { Cart, CloseIcon, Logo, MenuIcon } from "../Icons/Icons";
import useCartStore from "../../store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [opened, setOpened] = useState(false);

  const toggleCart = useCartStore((state) => state.toggleCart);
  const openCart = useCartStore((state) => state.openCart);
  const cartIsOpen = useCartStore((state) => state.cartIsOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const getCartIsOpen = useCartStore((state) => state.getCartIsOpen);

  const state = useCartStore();

  const getTotalItems = useCartStore((state) => state.getTotalItems);
  return (
    <nav className="mobile-nav | d-flex items-center justify-space-between">
      <div className="mobile-nav__left | d-flex items-center gap-1 ">
        <div className="mobile-nav__menu" onClick={() => setOpened(true)}>
          <MenuIcon />
        </div>
        <div className="mobile-nav__logo">
          <a href="#">
            <Logo color="#1D2026" />
          </a>
        </div>
      </div>
      <div className="mobile-nav__right | d-flex items-center gap-2">
        <div
          className="mobile-nav__cart"
          onClick={() => {
            // wait half a second if cart is open dont open it
            openCart();
            console.log("cartIsOpen", cartIsOpen);
          }}
        >
          <div className="item-amount | fw-bold text-neutral-100">
            {getTotalItems()}
          </div>
          <Cart color="1D2026" />
        </div>
        <div className="mobile-nav__avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      {opened && (
        <AnimatePresence>
          <motion.div
            animate={{
              scaleX: 1,
              opacity: 1,
              originX: 0,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            exit={{ x: "-100%" }}
            className="mobile-nav__container"
          >
            <div className="mobile-nav__panel">
              <div
                className="mobile-nav__close"
                onClick={() => setOpened(false)}
              >
                <CloseIcon w="14" h="15" />
              </div>
              <ul className="mobile__nav-list">
                <li className="fw-bold fs-200 text-neutral-800">
                  <a href="#">Collections</a>
                </li>
                <li className="fw-bold fs-200 text-neutral-800">
                  <a href="#">Men</a>
                </li>
                <li className="fw-bold fs-200 text-neutral-800">
                  <a href="#">Women</a>
                </li>
                <li className="fw-bold fs-200 text-neutral-800">
                  <a href="#">About</a>
                </li>
                <li className="fw-bold fs-200 text-neutral-800">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  );
};

export default MobileNav;
