import React from 'react'
import HomeCategories from './HomeCategories'
import BestGear from './BestGear'
import { Button1 } from './Buttons'
import { useParams } from 'react-router-dom'
import UseMediaQuery from '../hooks/UseMediaQuery'
import '../styles/categorypage.css'

const CategoryPage = ({ products }) => {

    const isDesktop = UseMediaQuery('(min-width: 1024px)').matches;
    const isTablet = UseMediaQuery('(min-width: 376px) and (max-width: 1023px)').matches;
    const isMobile = UseMediaQuery('(max-width: 375px)').matches;

    const getCategoryImage = (product) => {
        if (isDesktop) {
            console.log(product.categoryImage.desktop)
            return product.categoryImage.desktop
        } else if (isTablet) {
            console.log(product.categoryImage.tablet)
            return product.categoryImage.tablet
        } else if (isMobile) {
            console.log(product.categoryImage.mobile)
            return product.categoryImage.mobile
        }
    }

    const { categoryName } = useParams()

    const filteredProducts = products.filter(product => product.category === categoryName)
    const reversedProducts = filteredProducts.reverse()

    console.log(filteredProducts[0].categoryImage.desktop)

    return (
        <div className='category-page'>
            <div className="category-header">
                <h2>{categoryName}</h2>
            </div>
            <div className="category-page-container">
                <div className="category-content">
                    {reversedProducts.map(product => {
                        return (
                            <div className="category-product" key={product.id}>
                                <div className="category-product-image">
                                    <img src={getCategoryImage(product)} alt={product.name} />
                                </div>
                                <div className="category-product-details">
                                    {product.new && <div className="overline">New Product</div>}
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <Button1 />
                                </div>
                                
                            </div>
                        )
                    })}
                    <HomeCategories />
                    <BestGear />
                </div>
                
            </div>
        </div>
    )
}

export default CategoryPage