import React from 'react'
import './css/BtnCarousel.css';
import previousArrow from '../assets/icon-previous.svg'
import nextArrow from '../assets/icon-next.svg'

const BtnCarousel = ({ direction, moveSlide }) => {
    return (
        <button
          onClick={moveSlide}
          className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
          <img src={direction === "next" ? nextArrow : previousArrow} alt=''/>
        </button>
      );
}

export default BtnCarousel
