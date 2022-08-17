import React from "react";
import '../styles/styles.css';
import leftArrow from "../icons/left-arrow.svg";
import rightArrow from "../icons/right-arrow.svg";

const BtnCarrousel = ({ direction, moveSlide }) => {
    return (
        <button
          onClick={moveSlide}
          className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
          <img src={direction === "next" ? rightArrow : leftArrow}  alt="next"/>
        </button>
    );
}
 
export default BtnCarrousel;