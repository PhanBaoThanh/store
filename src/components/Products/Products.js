import React from 'react'
import './products.scss'
import {useState,useRef,useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../CartContext/CartContext'
import ProductItem from '../ProductItem/ProductItem'

const Products = () => {
  const {
    data
  } = useContext(CartContext)
  const location = useLocation()

  const [value,setValue] = useState("")
  const [type,setType] = useState('all')
  const [product,setProduct] = useState(data)
  const [range,setRange] = useState(80)
  const inputRef = useRef()
  const rangeRef = useRef()

  const handleChangeInput = () => {
    setValue(inputRef.current.value)
    if(value === "")
      if(type === 'all')
        setProduct(data.filter(item => item.cost <= rangeRef.current.value ))
      else
        setProduct(data.filter(item => item.type.toLowerCase() === type && item.cost <= rangeRef.current.value))
    else
      if(type==='all')
        setProduct(data.filter(item => item.name.toLowerCase().includes(inputRef.current.value.toLowerCase()) && item.cost <= rangeRef.current.value))
      else
        setProduct(data.filter(item => item.name.toLowerCase().includes(inputRef.current.value.toLowerCase()) && item.type.toLowerCase() === type && item.cost <= rangeRef.current.value))

  }

  const handleClickNavItem = string => {
    setValue("")
    setType(string)
    if(string === "all")
      setProduct(data.filter(item => item.cost <= range))
    else
      setProduct(data.filter(item => item.type.toLowerCase() === string && item.cost <= range))
  }

  const handleChangeRange = () => {
    setRange(rangeRef.current.value)
    if(type === 'all')
      if(value === "")
        setProduct(data.filter(item => item.cost <= rangeRef.current.value))
      else
        setProduct(data.filter(item =>item.name.toLowerCase().includes(inputRef.current.value.toLowerCase()) && item.cost <= rangeRef.current.value))

    else
      if(value === "")
        setProduct(data.filter(item => item.cost <= rangeRef.current.value && item.type.toLowerCase() === type))
      else
        setProduct(data.filter(item => item.cost <= rangeRef.current.value && item.type.toLowerCase() === type && item.name.toLowerCase().includes(inputRef.current.value.toLowerCase())))

  }

  return (
    <div className="productsBox">

      <div className='productsHeader'>Home / {location.pathname.split('/')}</div>
      <div className='productsContent'>
        <div className='nav'>
          <div className='navSticky'>
            <input ref={inputRef} type='text' placeholder='search...' value={value} className='navInput' onInput={handleChangeInput} />
            <div className='navItems'>
              <h4 className='navHeader'>Company</h4>
              <p className='navItem' onClick={()=>handleClickNavItem("all")}>All</p>
              <p className='navItem' onClick={()=>handleClickNavItem('ikea')}>Ikea</p>
              <p className='navItem' onClick={()=>handleClickNavItem('marcos')}>Marcos</p>
              <p className='navItem' onClick={()=>handleClickNavItem('caressa')}>Caressa</p>
              <p className='navItem' onClick={()=>handleClickNavItem('liddy')}>Liddy</p>
            </div>
            <h4 className='rangeHeader'>Price</h4>
            <input ref={rangeRef} type='range' step='1' min='0' max='80' onInput={handleChangeRange} value={range} defaultValue='80' className='inputRange' />
            <p className='rangeValue'>Value: ${range}</p>
          </div>
        </div>
        <div className='products'>
        {
          product.length > 0 ? 
            (product.map(item => (
              <ProductItem key={item.id} idProduct={item.id} img={item.img} name={item.name} cost={item.cost} />
            ))) : (
              <p>Sorry, no products matched your search</p>
            )
        }
          
        </div>
      </div>
    </div>
  )
}

export default Products