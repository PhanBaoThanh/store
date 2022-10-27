import React from 'react'
import './productitem.scss'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import { CartContext } from '../../CartContext/CartContext'

const ProductItem = ({idProduct,img,name,cost}) => {
    const {
        data,
        setIsOpen,
        cart,
        setCart
    } = useContext(CartContext)

    const handleClickBuyProduct = id => {
        setIsOpen(true)
        let dataCart;
        if(cart.some(item => item.id === id))
            dataCart = cart.map(item => {
                if(item.id === id)
                    item.quantity += 1
                return item
            })
        else
            dataCart = [
                ...cart,
                {
                    ...data.find(item => item.id === id),
                    quantity: 1
                }
            ]
        localStorage.setItem('cart',JSON.stringify(dataCart))
        setCart(dataCart)
    }
    return (
        <div className='homeContentProduct'>
            <div className='homeContentProductImg'>
                <img src={img} alt='ptc' />
                <div className='homeContentProductImgBtns'>
                    <Link to={`/${idProduct}`} className='homeContentProductImgBtn'><i className="fas fa-search"></i></Link>
                    <div className='homeContentProductImgBtn' onClick={() => handleClickBuyProduct(idProduct)}><i className="fas fa-shopping-cart"></i></div>
                </div>
            </div>

            <p className='homeContentProductName'>{name}</p>
            <p className='homeContentProductCost'>${cost}</p>
        </div>    
    )
}

export default ProductItem