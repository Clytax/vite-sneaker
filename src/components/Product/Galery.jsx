import React, { useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import GalleryModal from "../Modal/GalleryModal";

const Galery = () => {
  const [focused, setFocused] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="galery">
      <div className="galery__focus | br-image">
        <motion.button
          whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.9, rotate: -10, transition: { duration: 0.5 } }}
          className="save-button"
          onClick={() => (modalOpen ? close() : open())}
        >
          <img
            draggable="false"
            className="focused-image"
            src={
              focused === 1
                ? product1
                : focused === 2
                ? product2
                : focused === 3
                ? product3
                : product4
            }
            alt="product"
          />
        </motion.button>
      </div>
      <div className="galery__thumbnails">
        <div
          onClick={() => setFocused(1)}
          className={`${focused === 1 && "active-thumbnail"} galery__thumbnail`}
        >
          <img
            draggable="false"
            src={thumbnail1}
            alt="thumbnail of product image 1"
          />
        </div>
        <div
          onClick={() => setFocused(2)}
          className={`${
            focused === 2 && "active-thumbnail"
          } galery__thumbnail `}
        >
          <img
            draggable="false"
            src={thumbnail2}
            alt="thumbnail of product image 1"
          />
        </div>
        <div
          onClick={() => setFocused(3)}
          className={`${focused === 3 && "active-thumbnail"} galery__thumbnail`}
        >
          <img
            draggable="false"
            src={thumbnail3}
            alt="thumbnail of product image 1"
          />
        </div>
        <div
          onClick={() => setFocused(4)}
          className={`${focused === 4 && "active-thumbnail"} galery__thumbnail`}
        >
          <img
            draggable="false"
            src={thumbnail4}
            alt="thumbnail of product image 1"
          />
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <GalleryModal handleClose={close} image={focused} text="Saved!" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galery;
