import React, { useContext, useState }  from 'react';
import './css/MobileCarousel.css';
import { ProductContext } from '../context/ProductProvider';
import BtnCarousel from './BtnCarousel';

const MobileCarousel = () => {

    const {product} = useContext(ProductContext)

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== product.images.length-1){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === product.images.length-1){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(product.images.length-1)
        }
    }

    return (
        <div className='container-slider'>
            { 
                product.images.slice(0,4).map((img, index) =>(
                    <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img 
                            src={require(`../assets/${img}`)} 
                            alt=""
                            key={index} 
                        />
                    </div>
                ))
            }
            <BtnCarousel moveSlide={nextSlide} direction={"next"} />
            <BtnCarousel moveSlide={prevSlide} direction={"prev"}/>
        </div>  
    )
}

export default MobileCarousel
