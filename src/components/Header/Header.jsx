import React, { useState, useEffect } from "react";

import { avatar, cart } from "../../constants/images";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import useCartStore from "../../store/useCartStore";

const Header = () => {
  const [size, setSize] = useState(window.innerWidth);

  const toggleCart = useCartStore((state) => state.toggleCart);
  const openCart = useCartStore((state) => state.openCart);
  const cartIsOpen = useCartStore((state) => state.cartIsOpen);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      {size > 1024 ? (
        <DesktopNav
          openCart={openCart}
          cartIsOpen={cartIsOpen}
          toggleCart={toggleCart}
        />
      ) : (
        <MobileNav toggleCart={toggleCart} />
      )}
    </>
  );
};

// Icons

export default Header;
