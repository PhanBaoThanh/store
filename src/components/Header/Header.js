import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'
import { CartContext } from '../../CartContext/CartContext'
import './header.scss'
import logo from '../../img/logo.svg'
import logoWhite from '../../img/logoWhite.svg'

const Header = () => {
    const dataNav = [
        {
            name:'Home',
            link: '/',
            icon: "fas fa-home fa-fw"
        },
        {
            name: 'Products',
            link: '/products',
            icon: "fas fa-couch fa-fw"
        },
        {
            name: 'About',
            link: '/about',
            icon: 'fas fa-book fa-fw'
        }
    ]
    const location = useLocation()
    const {
        isOpen,
        setIsOpen,
        cart,
        setCart
    } = useContext(CartContext)
    const [isTransparent,setIsTransparent] = useState(true)
    const [totalCost,setTotalCost] = useState(cart.length > 0 ? Math.floor(cart.reduce((total,item) => total + item.cost  ,0)) : 0)
    const [isClickMobileSidebar,setIsClickMobileSidebar] = useState(false)

    useEffect(() => {
        if(location.pathname === '/' || location.pathname === '/store/'|| location.pathname === '/store')
            setIsTransparent(true)
        else setIsTransparent(false)
    },[location])

    useEffect(() => {
        cart.length > 0 ? setTotalCost(Math.floor(cart.reduce((total,item) => total + item.cost*item.quantity  ,0))) : setTotalCost(0)
    },[cart])

    const handleClickUpQuantity = id => {
        const data = cart.map(item => {
            if(item.id === id)
                item.quantity += 1;
            return item
        })
        localStorage.setItem('cart',JSON.stringify(data))
        setCart(data)
    }

    const handleClickDownQuantity = id => {
        const item = cart.find(item => item.id === id)
        if(item.quantity === 1)
            handleClickRemoveBtn(id)
        else{
            const data = cart.map(item => {
                if(item.id === id)
                    item.quantity -= 1
                return item
            })
            localStorage.setItem('cart',JSON.stringify(data))
            setCart(data)
        }
    }

    const handleClickRemoveBtn = id => {
        localStorage.setItem('cart', JSON.stringify(cart.filter(item => item.id !== id)))
        setCart(JSON.parse(localStorage.getItem('cart')))
    }

    return (
        <>
            <div className={`header ${isTransparent? 'transparent' : ''}`}>
                <div className='header__nav'>
                    {
                        dataNav.map((item,index) => (
                            <Link style={{color: `${isTransparent ? 'white' : 'black'}`}} to={item.link} className='header__nav__item' key={index}>{item.name}</Link> 
                        ))    
                    }
                </div>

                <button className='sidebarBtn' onClick={() => setIsClickMobileSidebar(true)}><i className="fas fa-bars"></i></button>

                <div className='logo'>
                    <img src={isTransparent? logoWhite : logo} alt='ptc' />
                </div>

                <div className='cart' style={{color: `${isTransparent ? 'white' : ''}`}} onClick={() => setIsOpen(true)}>
                    <i className="fas fa-shopping-cart"></i>
                    {
                        cart.length > 0 ? (
                            <div className='cartNumber'>{cart.length}</div>
                        ): (
                            <></>
                        )
                    }
                </div>
            </div>
            <div className={`modal ${isOpen? 'active' : ''}`}>
                <div className={`cartModal ${isOpen ? 'open' : ''}`}>
                    <h2 className='cartModalHeader'>Your Bag</h2>
                    <div className='cartModalItems'>
                    {
                        cart.map(item => (
                            <div className='cartModalItem' key={item.id}>
                                <div className='cartModalItemImg'>
                                    <img src={item.img} alt='ptc'/>
                                </div>
                                <div className='cartModalItemContent'>
                                    <div className='cartModalItemContentText'>
                                        <p>{item.name} <br /> <span>${item.cost}</span></p>
                                        <button className='cartBtnRemove' onClick={() => handleClickRemoveBtn(item.id)}>remove</button>
                                    </div>
                                    <div className='cartModalItemContentBtns'>
                                        <button className='cartModalItemContentBtn' onClick={() => handleClickUpQuantity(item.id)}>
                                            <i className="fas fa-chevron-up"></i>
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button className='cartModalItemContentBtn' onClick={() => handleClickDownQuantity(item.id)}>
                                            <i className="fas fa-chevron-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                        
                    </div>
                    <h2 className='cartModalTotal'>Total: ${totalCost}</h2>
                    <button className='totalBtn'>CHECKOUT</button>
                    <button className='closeBtn' onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></button>
                </div>
            </div>

            <div className={`modalMobile ${isClickMobileSidebar ? 'visible' : ''}`}>
                <div className='modalMobileContent'>
                    <button className='closeModalMobileBtn' onClick={() => setIsClickMobileSidebar(false)}><i className="fas fa-times"></i></button>
                    <div className='modalMobileNav'>
                        {
                            dataNav.map((item,index) => (
                                <Link to={item.link} onClick={() => setIsClickMobileSidebar(false)} className='modalMobileNavItem' key={index}>
                                    <i className={item.icon}></i>
                                    <p>{item.name}</p>
                                </Link>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header