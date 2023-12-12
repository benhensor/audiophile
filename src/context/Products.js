import React, { createContext, useContext, useState, useEffect } from 'react'
import productsData from '../data.json'

export const ProductsContext = createContext()

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        const storedCategory = localStorage.getItem('selectedCategory')
        const storedProduct = localStorage.getItem('selectedProduct')

        if (storedCategory) {
            setSelectedCategory(storedCategory)
        }

        if (storedProduct) {
            setSelectedProduct(storedProduct)
        }
            setProducts(productsData)
    }, [])

    useEffect(() => {
        localStorage.setItem('selectedCategory', selectedCategory)
        localStorage.setItem('selectedProduct', selectedProduct)
    }, [selectedCategory, selectedProduct])

    return (
        <ProductsContext.Provider value={{ products, setProducts, selectedCategory, setSelectedCategory, selectedProduct, setSelectedProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}