import React, { useState } from "react";

import { Next, Prev } from "../Icons/Icons";
import {
  next,
  product1,
  product2,
  product3,
  product4,
} from "../../constants/images";

const ImageSlider = () => {
  const [sliderData, setSliderData] = useState([
    {
      image: product1,
      alt: "product1",
    },
    {
      image: product2,
      alt: "product2",
    },
    {
      image: product3,
      alt: "product3",
    },
    {
      image: product4,
      alt: "product4",
    },
  ]);
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log("test");
  return (
    <div className="slider">
      <div className="slider__prev" onClick={() => prevSlide()}>
        <Prev />
      </div>
      <div className="slider__next" onClick={() => nextSlide()}>
        <Next />
      </div>
      <div className="slide">
        {sliderData.map((slide, index) => {
          return (
            <React.Fragment key={index}>
              {index === current && (
                <img src={slide.image} className="image" alt={slide.alt} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
