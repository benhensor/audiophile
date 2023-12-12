import React from 'react'
import { Button3 } from './Buttons'
import '../styles/buttons.css'
import '../styles/homecategories.css'

const HomeCategories = () => {

    const categories = [
        { name: 'headphones', image: '/images/shared/desktop/image-category-thumbnail-headphones.png' },
        { name: 'speakers', image: '/images/shared/desktop/image-category-thumbnail-speakers.png' },
        { name: 'earphones', image: '/images/shared/desktop/image-category-thumbnail-earphones.png' },
    ]

    return (
        <div className="home-categories-container">
            <div className="home-categories">
                {categories.map((category, index) => (
                    <div key={index} className='home-category'>
                        <img className='home-category-image' src={category.image} alt={category.name} />
                        <h6>{category.name}</h6>
                        <Button3 />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeCategories