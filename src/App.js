import React , { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import { CartProvider } from './context/CartItems'
import { ProductsProvider } from './context/Products'
import { fetchProductsInformation } from './api/fetchProductsInformation'
import './styles/app.css'

function App() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await fetchProductsInformation()
                setProducts(data)
            } catch (error) {
                console.error("Error fetching products information", error)
                setError(error.message || 'An error occurred')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [products])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fetching products information</p>

    return (
        <div className="app-container">
            <CartProvider>
                <ProductsProvider>
                    <Header />
                        <main className="app-content">
                        
                        <Routes>
                            <Route exact path="/" element={<HomePage products={products} />} />
                            <Route exact path="/category/:categoryName" element={<CategoryPage products={products} /> } />
                            <Route exact path="/product/:productName" element={<ProductPage products={products} /> } />
                            <Route exact path="/checkout" element={<Checkout />} />
                        </Routes>
                        
                        </main>
                    <Footer />
                </ProductsProvider>
            </CartProvider>
        </div>
    );
}

export default App