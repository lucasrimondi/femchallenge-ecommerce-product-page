import React, { useState, useEffect } from 'react'

export const ProductContext = React.createContext() 

const ProductProvider = (props) => {

    const initialCart = {
        quantity: 0,
        productPrice: 0,
        total: 0,
        product: '',
        productImg: ''
    }

    const [product, setProduct]       = useState([])
    const [cart, setCart]             = useState(initialCart)
    const [toggleCart, setToggleCart] = useState(false)
    const [loader, setLoader]         = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect(() => {
        fetch("https://www.mockachino.com/b045b644-d886-4e/products/7d6f7710-95d0-4a27-ae6c-b02c6cb0348f")
        .then(response => response.json())
        .then((data) => {
            setProduct(data) 
            setLoader(true)
            }
        )  
    }, []) 
   
    return (
        <ProductContext.Provider value={{product, cart, setCart, toggleCart, setToggleCart, loader, toggleMenu, setToggleMenu}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
