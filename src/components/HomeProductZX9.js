import React from 'react'
import { Button2 } from './Buttons'
import UseMediaQuery from '../hooks/UseMediaQuery'
import '../styles/buttons.css'
import '../styles/homeproductzx9.css'

const HomeProductZX9 = ({ products }) => {

    const isDesktop = UseMediaQuery('(min-width: 1024px)');
    const isTablet = UseMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isMobile = UseMediaQuery('(max-width: 767px)');

    const getImage = () => {
        if (isDesktop.matches) {
            return '/images/home/desktop/image-speaker-zx9.png'
        } else if (isTablet.matches) {
            return '/images/home/tablet/image-speaker-zx9.png'
        } else if (isMobile.matches) {
            return '/images/home/mobile/image-speaker-zx9.png'
        }
    }

    return (
        <div className="home-zx9-speaker">
            <div className="home-zx9-speaker-image">
                <img src={getImage()} alt={products[5].name} />
            </div>
            <div className="home-zx9-speaker-details">
                <div className='home-zx9-speaker-information'>
                    <h1>{products[5].slug}</h1>
                    <p>{products[5].description}</p>
                    <Button2 />
                </div>
            </div>
        </div>
    )
}

export default HomeProductZX9