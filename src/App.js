import './App.scss';
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import Header from './components/Header/Header'
import About from './components/About/About'
import img1 from './img/product-1.jpeg'
import img2 from './img/product-2.jpeg'
import img3 from './img/product-3.jpeg'
import img4 from './img/product-4.jpg'
import img5 from './img/product-5.jpg'
import img6 from './img/product-6.jpeg'
import img7 from './img/product-7.jpg'
import img8 from './img/product-8.jpg'
import img9 from './img/product-9.jpg'
import img10 from './img/product-10.jpg'
import img11 from './img/product-11.jpeg'
import img12 from './img/product-12.jpg'
import {CartContext} from './CartContext/CartContext.js'

function App() {
  const data=[
    {
      id: 1,
      name: 'High-Back Bench',
      cost: 9.99,
      type: 'Ikea',
      color: ['#f15025','#222'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img1
    },
    {
      id: 2,
      name: 'Albany Table',
      cost: 79.99,
      type: 'Marcos',
      color: ['#f15025','#222'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img2
    },
    {
      id: 3,
      name: 'Accent Chair',
      cost: 25.99,
      type: 'Caressa',
      color: ['#222','#0000ff','#f15025'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img3
    },
    {
      id: 4,
      name: 'Wooden Table',
      cost: 45.99,
      type: 'Caressa',
      color: ['#f15025','#0000ff'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img4
    },
    {
      id: 5,
      name: 'Dining Table',
      cost: 6.99,
      type: 'Caressa',
      color: ['#ff0000','#f15025'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img5
    },
    {
      id: 6,
      name: 'Sofa Set',
      cost: 69.99,
      type: 'Liddy',
      color: ['#0000ff'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge      ',
      img: img6
    },
    {
      id: 7,
      name: 'Modern Bookshelf',
      cost: 8.99,
      type: 'Marcos',
      color: ['#00ff00','#f15025','#ff0000'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img7
    },
    {
      id: 8,
      name: 'Emperor Bed',
      cost: 21.99,
      type: 'Liddy',
      color: ['#f15025'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img8
    },
    {
      id: 9,
      name: 'Utopia Sofa',
      cost: 39.95,
      type: 'Marcos',
      color: ['#00ff00','#0000ff'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img9
    },
    {
      id: 10,
      name: 'Entertainment Center',
      cost: 29.98,
      type: 'Liddy',
      color: ['#ff0000','#00ff00'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img10
    },
    {
      id: 11,
      name: 'Albany Sectional',
      cost: 10.99,
      type: 'Ikea',
      color: ['#ff0000','#00ff00'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img11
    },
    {
      id: 12,
      name: 'Leather Sofa',
      cost: 9.99,
      type: 'Liddy',
      color: ['#222'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img12
    }
  ]

  useEffect(() => {
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart',JSON.stringify([]))
      setCart([])
    }
  },[])

  const [isOpen,setIsOpen] = useState(false)
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? [])
  return (
    <CartContext.Provider value={{
      isOpen,
      setIsOpen,
      cart,
      setCart,
      data
    }}>
      <div className="App">
        <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/store' element={<Home />}/>
            <Route path='/products' element={<Products />} />
            <Route path='/:productId' element={<Product />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
