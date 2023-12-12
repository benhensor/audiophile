import React from 'react'
import { Button2 } from './Buttons'
import UseMediaQuery from '../hooks/UseMediaQuery'
import '../styles/buttons.css'
import '../styles/homeproductzx7.css'

const HomeProductZX7 = ({ products }) => {

    const isDesktop = UseMediaQuery('(min-width: 1024px)').matches;
    const isTablet = UseMediaQuery('(min-width: 376px) and (max-width: 1023px)').matches;
    const isMobile = UseMediaQuery('(max-width: 375px)').matches;

    const getImage = () => {
        if (isDesktop) {
            return '/images/home/desktop/image-speaker-zx7.jpg'
        } else if (isTablet) {
            return '/images/home/tablet/image-speaker-zx7.jpg'
        } else if (isMobile) {
            return '/images/home/mobile/image-speaker-zx7.jpg'
        }
    }

    return (
        <div className="home-zx7-container">
            <div className="home-zx7-image">
                <img src={getImage()} alt={products[4].name} />
            </div>
            <div className="home-zx7-details">
                <div className='home-zx7-information'>
                    <h4>{products[4].slug}</h4>
                    <Button2 />
                </div>
            </div>
        </div>
    )
}

export default HomeProductZX7