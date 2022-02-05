import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductProvider';
import BtnCarousel from './BtnCarousel';
import Close from '../assets/icon-close.svg'
import './css/LightBox.css';

const LightBox = ({hideLightBox, index}) => {

    const {product} = useContext(ProductContext)

    const slicedImages = product.images.slice(0,4)

    const [imageToShow, setImageToShow] = useState(slicedImages[index]);

    const showNext = () => {
        let currentIndex = slicedImages.indexOf(imageToShow);
        if (currentIndex >= slicedImages.length - 1) {
            setImageToShow(slicedImages[0])
        } else {
          let nextImage = slicedImages[currentIndex + 1];
          setImageToShow(nextImage);
        }
    };
    
    const showPrev = () => {
        let currentIndex = slicedImages.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setImageToShow(slicedImages[slicedImages.length - 1])
        } else {
          let nextImage = slicedImages[currentIndex - 1];
          setImageToShow(nextImage);
        }
    };

    const showThumb = (index) => {
        let thumbImage = slicedImages[index]
        setImageToShow(thumbImage)
    }

    return (
        <div className='lightbox'>
            <div className='imgs-display'>
                <div className="img-box">
                    <img className='close-btn' src={Close} alt="" onClick={hideLightBox} width={15}/>
                    <img className='lightbox-img' alt='' src={require(`../assets/${imageToShow}`)}></img>
                    <BtnCarousel moveSlide={showNext} direction={"next"} />
                    <BtnCarousel moveSlide={showPrev} direction={"prev"} />
                </div>
                <div className="thumb-lb">
                    { 
                        product.images.slice(0,4).map((img, index) =>(
                        <img className={index === slicedImages.indexOf(imageToShow) ? 'thumb-img-lb-active' : 'thumb-img-lb'} src={require(`../assets/${img}`)} alt="" key={index} onClick={() => showThumb(index)}/>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LightBox


