import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Nav = ({ setIsMenuOpen }) => {

    const tabs = [
        {name: 'Home',path: '/'},
        {name: 'Headphones',path: '/category/headphones'},
        {name: 'Speakers',path: '/category/speakers'},
        {name: 'Earphones',path: '/category/earphones'}
    ]

    const handleClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav>
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
    )
}

export default Nav