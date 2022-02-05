import React, {useContext} from 'react'
import Menu from '../assets/icon-menu.svg'
import Close from '../assets/icon-close.svg'
import CartIcon from '../assets/icon-cart.svg'
import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.png'
import './css/Header.css'
import { ProductContext } from '../context/ProductProvider';
import Cart from './Cart'


const Header = () => {

    const {cart, toggleCart, setToggleCart, toggleMenu, setToggleMenu} = useContext(ProductContext)

    const menuToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    const cartToggle = () => {
        setToggleCart(!toggleCart)
    }
    
    return (
        <header>
            <div className="menu" onClick={() => menuToggle()}>
                <img src={Menu} alt="" width="20"/>
            </div>
            <nav>
            <div className="logo">
                 <img src={Logo} alt=""/> 
            </div>
                <ul className={toggleMenu ? "toggle" : ""}>
                    <li className='toggleList'>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className="close" onClick={() => menuToggle()}>
                        <img src={Close} alt="" width="20"/>
                    </li>
                </ul>
            </nav>
            <div className='user-div'>
                <div className="nav-cart">
                    <span hidden = {cart.quantity === 0 ? 'hidden' : ''}>{cart.quantity}</span>
                    <img src={CartIcon} onClick={() => cartToggle()} alt="" width="20"/>
                </div>
                <Cart />
                <div className='avatar-div'>
                    <img className='avatar' src={Avatar} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header





