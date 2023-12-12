import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => {

    const tabs = [
        {name: 'Home',path: '/'},
        {name: 'Headphones',path: '/category/headphones'},
        {name: 'Speakers',path: '/category/speakers'},
        {name: 'Earphones',path: '/category/earphones'}
    ]

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                {tabs.map(tab => {
                    return (
                        <li className='navbar-list-item' key={tab.name}>
                            <button><Link to={tab.path}>{tab.name}</Link></button>
                        </li>
                    )
                })}
            </ul>
         </nav>
    )
}

export default Nav