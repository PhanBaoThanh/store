import React from 'react'
import './home.scss'
import ProductItem from '../ProductItem/ProductItem'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import { CartContext } from '../../CartContext/CartContext'

const Home = () => {
  const {data} = useContext(CartContext)
  return (
    <div className='home'>
      <div className='panel'>
        <div className='panelContent'>
          <h2 className='panelHeader'>Rest, Relax, Unwind</h2>
          <h3 className='panelSlogan'>Embrace your choices - we do</h3>
          <Link to='/products' className='panelBtn'>SHOW NOW</Link>
        </div>
      </div>
      <div className='homeContent'>
        <h3 className='homeContentHeader'><span>/</span> Featured</h3>
        <div className='homeContentProducts'>
        {
          data.slice(0,3).map(item => <ProductItem key={item.id} idProduct={item.id} img={item.img} name={item.name} cost={item.cost} />)
        }
        </div>

        <div className='homeContentBtn'>
          <Link to='/products' className='homeContentBtnItem'>ALL PRODUCTS</Link>
        </div>
      </div>
    </div>
  )
}

export default Home