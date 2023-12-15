import React, { useState, useEffect } from 'react'
import HomeCategories from './HomeCategories'
import BestGear from './BestGear'
import UseMediaQuery from '../hooks/UseMediaQuery'
import { useParams } from 'react-router-dom'
import { Button1, Button4 } from './Buttons'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartItems'
import '../styles/productpage.css'


const ProductPage = ({ products }) => {

    const navigate = useNavigate()

    const { addItem } = useCart()
    const { productName } = useParams()
    const [product, setProduct] = useState(() => {
        const savedProduct = localStorage.getItem('product')
        return savedProduct ? JSON.parse(savedProduct) : null
    })

    useEffect(() => {
        if (products && Array.isArray(products)) {
            const foundProduct = products.find(product => product.name === productName)
            if (foundProduct) {
                setProduct(foundProduct)
                localStorage.setItem('product', JSON.stringify(foundProduct))
            }
        }
    }, [productName, products])

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setQuantity(0)
    }, [product])

    if (!product) {
        return (
            <div className="centered-message">
                {products && Array.isArray(products) ? <p>Product not found...</p> : <p>Loading...</p>}
            </div>
        );
    }

    const isDesktop = UseMediaQuery('(min-width: 1024px)').matches;
    const isTablet = UseMediaQuery('(min-width: 376px) and (max-width: 1023px)').matches;
    const isMobile = UseMediaQuery('(max-width: 375px)').matches;

    const getProductImage = (product) => {
        if (isDesktop) {
            return product.image.desktop
        } else if (isTablet) {
            return product.image.tablet
        } else if (isMobile) {
            return product.image.mobile
        } else {
            return null
        }
    }

    const getGalleryImage = (product) => {
        if (isDesktop) {
            return [product.gallery.first.desktop, product.gallery.second.desktop, product.gallery.third.desktop]
        } else if (isTablet) {
            return [product.gallery.first.tablet, product.gallery.second.tablet, product.gallery.third.tablet]
        } else if (isMobile) {
            return [product.gallery.first.mobile, product.gallery.second.mobile, product.gallery.third.mobile]
        } else {
            return []
        }
    }

    const getSuggestionsImage = (product) => {
        return product.others.map(otherProduct => {
            if (isDesktop) {
                return otherProduct.image.desktop
            } else if (isTablet) {
                return otherProduct.image.tablet
            } else if (isMobile) {
                return otherProduct.image.mobile
            } else {
                return null
            }
        })
    }

    const suggestedProductImages = getSuggestionsImage(product)
    const featureParagraphs = product.features.split('\n\n');
    const galleryImages = getGalleryImage(product)

    const handleBackClick = () => {
        navigate(-1)
    }

    const handleAddToCart = () => {
        addItem(product, quantity)
        setQuantity(0)
    }

    const handleQuantity = (e) => {
        if (e.target.innerText === '+') {
            setQuantity(quantity + 1)
        } else if (e.target.innerText === '-' && quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='product-page'>
            <div className="product-page-container">
                <button className='product-back-button' onClick={handleBackClick}>Go Back</button>
                <div className="product-preview">
                    <div className="product-image-container">
                        <img src={getProductImage(product)} alt={product.name} />
                    </div>
                    <div className="product-details">
                        <p className='overline'>new product</p>
                        <h2>{product.name}</h2>
                        <p className='product-description'>{product.description}</p>
                        <h6>£{product.price}</h6>
                        <div className="product-controls">
                            <div className="product-add-subtract">
                                <button onClick={handleQuantity} className='product-quantity-control'>-</button>
                                <p>{quantity}</p>
                                <button onClick={handleQuantity} className='product-quantity-control'>+</button>
                            </div>
                            <Button4 onClick={handleAddToCart}/>
                        </div>
                    </div>
                </div>

                <div className="product-features-container">
                    <div className="product-features">
                        <h3>Features</h3>
                        {featureParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}                       
                    </div>
                    <div className="product-contents">
                        <h3>In the box</h3>
                        <ul>
                            {product.includes && product.includes.map((item, index) => {
                                return (
                                    <li key={index}><span>{item.quantity} x</span> {item.item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="product-gallery">
                    <div className="smaller-images">
                        <div className="gallery-image-container">
                            {galleryImages[0] && <img src={galleryImages[0]} alt={`${product.name}`} />}
                        </div>
                        <div className="gallery-image-container">
                            {galleryImages[1] && <img src={galleryImages[1]} alt={`${product.name}`} />}
                        </div>
                    </div>
                    <div className="bigger-image">
                        <div className="gallery-image-container">
                            {galleryImages[2] && <img src={galleryImages[2]} alt={`${product.name}`} />}
                        </div>
                    </div>
                </div>

                <div className="product-suggestions-container">
                    <h3>You may also like</h3>
                    <div className="product-suggestions">
                        {product.others && product.others.map((otherProduct, index) => {
                            const editedProductName = otherProduct.name.replace('Headphones', '')
                            return (
                                <div className="product-suggestion" key={index}>
                                    <img src={suggestedProductImages[index]} alt={otherProduct.name} />
                                    <h6>{editedProductName}</h6>
                                <Button1 to={`/product/${otherProduct.name}`} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <HomeCategories />
                <BestGear />

            </div>
        </div>
    )
}

export default ProductPage