import React from 'react'
import UseMediaQuery from '../hooks/UseMediaQuery'
import '../styles/bestgear.css'

const BestGear = () => {

    const isDesktop = UseMediaQuery('(min-width: 1024px)').matches;
    const isTablet = UseMediaQuery('(min-width: 376px) and (max-width: 1023px)').matches;
    const isMobile = UseMediaQuery('(max-width: 375px)').matches;

    const getImage = () => {
        if (isDesktop) {
            return '/images/shared/desktop/image-best-gear.jpg'
        } else if (isTablet) {
            return '/images/shared/tablet/image-best-gear.jpg'
        } else if (isMobile) {
            return '/images/shared/mobile/image-best-gear.jpg'
        }
    }

    return (
        <div className='bestgear-container'>
            <div className="bestgear-details">
            <h2>Bringing you the <span>best</span> audio gear</h2>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <div className="bestgear-image">
                <img src={getImage()} alt="best gear" />
            </div>
        </div>
    )
}

export default BestGear