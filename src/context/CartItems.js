import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    
        const [cartItems, setCartItems] = useState(() => {
            const savedCartItems = localStorage.getItem('cartItems')
            return savedCartItems ? JSON.parse(savedCartItems) : []
        })
    
        useEffect(() => {
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }, [cartItems])

        const addItem = (item, quantityToAdd) => {
            setCartItems(prevItems => {
                const existingItem = prevItems.find(i => i.id === item.id)
                if (existingItem) {
                    return prevItems.map(i => 
                        i.id === item.id ? { ...i, quantity: i.quantity + quantityToAdd } : i)
                } else {
                    return [...prevItems, { ...item, quantity: quantityToAdd }]
                }
            })
        }

        const removeItem = (itemId) => {
            setCartItems(prevItems => prevItems.filter(i => i.id !== itemId))
        }

        const updateItem = (itemId, quantity) => {
            setCartItems(prevItems => prevItems.map(i =>
                i.id === itemId ? { ...i, quantity } : i
                ))
        }     
        
        const clearCart = () => setCartItems([])

    
        return (
            <CartContext.Provider value={{ cartItems, addItem, removeItem, updateItem, clearCart }}>
                {children}
            </CartContext.Provider>
        )
    }