import React, { useContext }  from 'react';
import './css/Cart.css'
import { ProductContext } from '../context/ProductProvider';
import DeleteIcon from '../assets/icon-delete.svg'

const Cart = () => {

    const {toggleCart, cart, setCart} = useContext(ProductContext)

    const emptyCart = () => {
        setCart({
            quantity: 0,
            productPrice: 0,
            total: 0,
            product: ''
        })
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    return (
        <>
        {
        toggleCart 
            ? 
            (<div className="cart-dropdown">
                <div className="cart-header">
                    <p>Cart</p>
                </div>
                    <div className="cart-items">
                        {cart.quantity === 0 ? 
                            <span className='empty-cart'> Your cart is empty </span>
                            :
                            (<div className='cart-item'>
                                <img className='cart-img' src={require(`../assets/${cart.productImg}`)} alt='item'/>
                                <div className='item-details'>
                                    <span className='product-name'>{cart.product}</span>
                                    <span className='price'>{formatter.format(cart.productPrice)} x {cart.quantity} = <b>{formatter.format(cart.quantity*cart.productPrice)}</b></span>
                                </div>
                                <img className= 'delete-icon' src={DeleteIcon} onClick={() => emptyCart()} alt="" height='17'/>
                                
                            </div> )
                        }
                        {
                          cart.quantity === 0 ?   
                          ''
                          :
                          <button className="button-checkout">Checkout</button>
                        }    
                                 
                    </div>
             </div>
            )
            :
            ''
        }
        </>
    )
}

export default Cart
