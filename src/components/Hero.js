import React from 'react'
import { Button1 } from './Buttons'
import '../styles/hero.css'

const Hero = ({ products }) => {

    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <div className="hero-details">
                        <span className='hero-subtitle'>New Product</span>
                        <h1>{products[3].name}</h1>
                        <p>{products[3].description}</p>
                        <Button1 />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Hero