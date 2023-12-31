import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartPreview from './CartPreview'
import { useCart } from '../context/CartItems'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as Menu } from '../assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as Close } from '../assets/shared/tablet/icon-close.svg'
import { ReactComponent as Cart } from '../assets/shared/desktop/icon-cart.svg'
import UseMediaQuery from '../hooks/UseMediaQuery'
import '../styles/nav.css'
import '../styles/header.css'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const showControls = UseMediaQuery('(max-width: 1439px)').matches;

    const { cartItems } = useCart()

    const tabs = [
        {name: 'Home',path: '/'},
        {name: 'Headphones',path: '/category/headphones'},
        {name: 'Speakers',path: '/category/speakers'},
        {name: 'Earphones',path: '/category/earphones'}
    ]

    const handleClick = () => {
        setIsMenuOpen(false)
    }

    const handleClose = () => {
        setIsCartOpen(false)
    }

    return (
        <header>
            <div className="header-container">
                {showControls && (
                    <button className='header-menu-controls' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <Close className='header-icon-close'style={{ fill: '#ffffff' }}/> : <Menu className='header-icon-menu'/>}
                </button>
                )}
                
                <Link to='/' className='header-logo'>
                    <Logo />
                </Link>

                <div className={`header-navbar ${isMenuOpen ? 'visible' : ''}`}>
                    <nav >
                        <ul className='navbar-list'>
                            {tabs.map(tab => {
                                return (
                                    <li className='navbar-list-item' key={tab.name}>
                                        <Link to={tab.path} onClick={handleClick}>{tab.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>

                <div className="header-cart-container">
                    <button className='header-cart' onClick={() => setIsCartOpen(!isCartOpen)} >
                        <Cart className='icon-cart'/>
                        <p className='header-cart-quantity'>{cartItems.length}</p>
                    </button>
                    {isCartOpen && (
                        <>
                            <div className='header-cart-backdrop' onClick={handleClose}></div>
                                    <CartPreview setIsCartOpen={setIsCartOpen}/>
                            
                        </>                   
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header