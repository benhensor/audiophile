import React from 'react'
import { Button1 } from './Buttons'
import '../styles/hero.css'

const Hero = ({ products }) => {

    const product = products[3]

    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <div className="hero-details">
                        <span className='hero-subtitle'>New Product</span>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <Button1 to={`/product/${product.name}`}/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Hero