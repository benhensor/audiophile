import React from 'react'
import Hero from './Hero'
import HomeCategories from './HomeCategories'
import HomeProductZX9 from './HomeProductZX9'
import HomeProductZX7 from './HomeProductZX7'
import HomeProductYX1 from './HomeProductYX1'
import BestGear from './BestGear'
import '../styles/homepage.css'

const HomePage = ({ products }) => {

    if (!products || products.length === 0) return <p>Loading...</p>;

    return (
        <section className='home'>
            <Hero products={products} />
            <div className="home-container">

                <HomeCategories />

                <div className="home-content">
                    <HomeProductZX9 products={products} />
                    <HomeProductZX7 products={products} />
                    <HomeProductYX1 products={products} />
                    <BestGear />
                </div>

                
            </div>
        </section>
    )
}

export default HomePage