import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import {
  product1,
  product2,
  product3,
  product4,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
} from "../../constants/images";
import { CloseIcon, Next, Prev } from "../Icons/Icons";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const GalleryModal = ({ handleClose, image }) => {
  useEffect(() => {
    setCurrent(image);
  }, [image]);

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
    console.log(length - 1);
    setCurrent(current === length ? 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 1 ? length : current - 1);
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div className="modal__big-container">
          <motion.div className="modal__close" onClick={handleClose}>
            <CloseIcon color="#FFFFFF" />
          </motion.div>
          <motion.div className="modal__focused-container">
            <motion.div className="modal__prev" onClick={() => prevSlide()}>
              <Prev />
            </motion.div>
            <motion.img
              draggable="false"
              src={
                current === 1
                  ? product1
                  : current === 2
                  ? product2
                  : current === 3
                  ? product3
                  : product4
              }
              alt="Product"
            />
          </motion.div>
          <motion.div className="modal__next" onClick={() => nextSlide()}>
            <Next />
          </motion.div>
        </motion.div>
        <motion.div className="modal__thumbnails">
          <motion.div
            onClick={() => setCurrent(1)}
            className={`modal__thumbnail ${
              current === 1 && "modal-focused-thumbnail"
            }`}
          >
            <motion.img
              draggable="false"
              src={thumbnail1}
              alt="thumbnail of product image 1"
            />
          </motion.div>
          <motion.div
            onClick={() => setCurrent(2)}
            className={`modal__thumbnail ${
              current === 2 && "modal-focused-thumbnail"
            }`}
          >
            <motion.img
              draggable="false"
              src={thumbnail2}
              alt="thumbnail of product image 1"
            />
          </motion.div>
          <motion.div
            onClick={() => setCurrent(3)}
            className={`modal__thumbnail ${
              current === 3 && "modal-focused-thumbnail"
            }`}
          >
            <motion.img
              draggable="false"
              src={thumbnail3}
              alt="thumbnail of product image 1"
            />
          </motion.div>
          <motion.div
            onClick={() => setCurrent(4)}
            className={`modal__thumbnail ${
              current === 4 && "modal-focused-thumbnail"
            }`}
          >
            <motion.img
              draggable="false"
              src={thumbnail1}
              alt="thumbnail of product image 1"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Backdrop>
  );
};

export default GalleryModal;
