import React, { useContext, useState }  from 'react';
import './css/Product.css';
import { ProductContext } from '../context/ProductProvider';
import Minus from '../assets/icon-minus.svg'
import Plus from '../assets/icon-plus.svg'
import CartIconWhite from '../assets/icon-cart-white.svg'
import MobileCarousel from './MobileCarousel';
import LightBox from './LightBox';


const Product = () => {

  const {loader, cart, setCart, product, toggleMenu, setToggleMenu} = useContext(ProductContext)
  
  const [count, setCount]                     = useState(0)
  const [mainImgIndex, setMainImgIndex]       = useState(0)
  const [lightboxDisplay, setLightBoxDisplay] = useState(false)

  const increase = () => {
    setCount(count+1)
  }

  const reduce = () => {
    if (count === 0 ){
      return
    }
    setCount(count-1)
  }

  const addToCart = () => {
    setCart({
      quantity: (cart.quantity + count),
      productPrice: (product.price*product.discount),
      total: (cart.quantity*product.price),
      product: product.name,
      productImg: product.images[0]
    })
    setCount(0)
  }

  const showMainImg = (index) => {
    setMainImgIndex(index)
  }

  const showLightBox = () => {
    setLightBoxDisplay(true)
  }

  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }

  const hideHambMenu = () => {
    setToggleMenu(false)
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  return (
          <>
          {
            loader ? 
            (<div className={toggleMenu === false ? "details" : 'overlay'} onClick={hideHambMenu} key={product.id}>
                <div className="big-img">
                  <MobileCarousel />
                  <img className= 'product-image' src={require(`../assets/${product.images[mainImgIndex]}`)} onClick={() => showLightBox()} alt=""/>
                  <div className="thumb">
                  { 
                    product.images.slice(0,4).map((img, index) =>(
                    <img className={index === mainImgIndex ? 'thumb-img-active' : 'thumb-img'} src={require(`../assets/${img}`)} alt="" key={index} onClick={() => showMainImg(index)}/>
                  ))
                  }
                  </div>
                </div>
                <div className="box">
                  <h5 className='product-brand'>{product.brand}</h5>
                  <div className="row">
                    <h1>{product.name}</h1>
                  </div>
                    <p>{product.description}</p>
                    <div className="price-row">
                        <h2 className='product-final-price'>{formatter.format(product.price*product.discount)}</h2>
                        <span>{product.discount * 100}%</span>
                        <h3 className='product-price-responsive'>{formatter.format(product.price)}</h3>
                    </div>
                    <span className='product-price'>{formatter.format(product.price)}</span>
                    <div className="amount-row">                 
                        <div className="amount">
                            <button className="count" onClick={() => reduce()}><img className='minus-svg' src={Minus}  alt=""/></button>
                                <p className='counter'>{count}</p>
                            <button className="count" onClick={() => increase()}><img className='plus-svg' src={Plus}  alt=""/></button>
                        </div>
                        <button disabled={count === 0 ? true :''} className={count === 0 ? "add-to-cart-btn-disabled":"add-to-cart-btn"}onClick={() => addToCart()} >
                            <div className="btn-row">
                              <img src={CartIconWhite} alt="" width="22" height="20" className='cart-icon'/>
                              <p className='add-to-cart'>Add to cart</p>
                            </div>
                        </button>
                    </div>
              </div>
              {
                lightboxDisplay ? 
                <LightBox hideLightBox={hideLightBox} index={mainImgIndex}/>
              : ""
              }
            </div>)
            :
            (<p className='loader'>Loading...</p>)
          }
          </>
        )
}

export default Product;


