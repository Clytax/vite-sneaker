import React, { useState, useEffect } from "react";

import { Galery, ProductInfo } from "../../components";
import ImageSlider from "../../components/Product/ImageSlider";

const Product = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  return (
    <main className="product">
      {size > 1000 ? <Galery /> : <ImageSlider />}
      <ProductInfo />
    </main>
  );
};

export default Product;
