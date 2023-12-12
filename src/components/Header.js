import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import CartPreview from './CartPreview'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as Menu } from '../assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as Close } from '../assets/shared/tablet/icon-close.svg'
import { ReactComponent as Cart } from '../assets/shared/desktop/icon-cart.svg'
import UseMediaQuery from '../hooks/UseMediaQuery'
import '../styles/header.css'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const showControls = UseMediaQuery('(max-width: 1439px)').matches;

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
                <div className={`header-navbar ${isMenuOpen ? 'visible' : ''}`}><Nav /></div>
                <div className="header-cart-container">
                    <button className='header-cart' onClick={() => setIsCartOpen(!isCartOpen)} >
                        <Cart className='icon-cart'/>
                        <p className='header-cart-quantity'>9</p>
                    </button>
                    {isCartOpen && (
                        <CartPreview />   
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header