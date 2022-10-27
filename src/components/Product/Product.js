import React from 'react'
import './product.scss'
import {useContext} from 'react'
import {CartContext} from '../../CartContext/CartContext'
import {useParams} from 'react-router-dom'

const Product = () => {
  const {
    data,
    cart,
    setCart,
    setIsOpen
  } = useContext(CartContext)
  const {productId} = useParams()
  const value = data.find(item => item.id.toString() === productId)

  const handleClickBuyProduct = () => {
    setIsOpen(true)
    let dataCart;
    if(cart.some(item => item.id.toString() === productId))
        dataCart = cart.map(item => {
            if(item.id.toString() === productId)
                item.quantity += 1
            return item
        })
    else
        dataCart = [
            ...cart,
            {
                ...data.find(item => item.id.toString() === productId),
                quantity: 1
            }
        ]
    localStorage.setItem('cart',JSON.stringify(dataCart))
    setCart(dataCart)
  }

  return (
    <div className='containerProduct'>
      <div className='containerProductHeader'>Home / {value.name}</div>
      <div className='content'>
        <div className='img'>
          <img src={value.img} alt='ptc' />
        </div>

        <div className='text'>
          <h3 className='headerText'>{value.name}</h3>
          <p className='type'>{value.type}</p>
          <p className='cost'>${value.cost}</p>
          <div className='colors'>
            {
              value.color.map((item,index) => (
                <div className='color' key={index} style={{backgroundColor: `${item}`}}></div>
              ))
            }
          </div>

          <p className='description'>{value.description}</p>
          <button className='textBtn' onClick={handleClickBuyProduct}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product