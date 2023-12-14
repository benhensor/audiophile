import React from 'react'
import { useCart } from '../context/CartItems'
import { Button5 } from './Buttons'
import { Link } from 'react-router-dom'
import '../styles/cartpreview.css'

const CartPreview = ({ setIsCartOpen }) => {

    const { cartItems, updateItem, removeItem, clearCart } = useCart()

    const handleClear = () => {
        clearCart()
        setIsCartOpen(false)
    }

    const handleUpdate = (itemId, quantity) => {
        updateItem(itemId, quantity)
        if (quantity === 0) removeItem(itemId)
    }

    const handleIncrease = (id) => {
        const item = cartItems.find((item) => item.id === id)
        if (item) {
            handleUpdate(id, item.quantity + 1)          
        }
    }

    const handleDecrease = (id) => {
        const item = cartItems.find((item) => item.id === id)
        if (item) {
            if (item.quantity > 1) {
            handleUpdate(id, item.quantity - 1)          
            } else {
                removeItem(id)
            }
        }
    }

    const handleEditItemName = (name) => {
        const suffixes = /Headphones|Speaker|Wireless Earphones/gi;
        const editedName = name.replace(suffixes, '')
        return editedName
    }

    const handleQuantity = (action, id) => {
        const item = cartItems.find((item) => item.id === id)
        if (item) {
            if (action === 'increase') {
                handleIncrease(id)
            } else if (action === 'decrease') {
                handleDecrease(id)
            }
        }         
    }

    return (
        <div className='cart-preview'>
            <div className='cart-container'>
                {cartItems.length === 0 ? (
                    <div className='cart-header-empty'>
                        <h6>Cart</h6>
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-content">
                            <div className='cart-header'>
                                <h6>Cart &#40;{cartItems.length}&#41;</h6>
                                <button onClick={handleClear}>Remove all</button>
                            </div>
                            {cartItems.map(cartItem => (
                                <div key={cartItem.id} className='cart-item'>
                                    <div className='cart-item-details'>
                                        <img src={cartItem.cart} alt={cartItem.name} />
                                        <div className='cart-item-details-text'>
                                            <h6>{handleEditItemName(cartItem.name)}</h6>
                                            <p>£{cartItem.price}</p>
                                        </div>
                                    </div>
                                    <div className="cart-item-controls">
                                        <div className="item-add-subtract">
                                            <button onClick={() => handleQuantity('decrease', cartItem.id)} className='product-quantity-control'>-</button>
                                            <p>{cartItem.quantity}</p>
                                            <button onClick={() => handleQuantity('increase', cartItem.id)} className='product-quantity-control'>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='cart-total'>
                            <div className="cart-total-text">
                                <h6>Total</h6>
                                <p><strong>£{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</strong></p>
                            </div>                           
                            <Link to='/checkout'>
                                <Button5 className='cart-checkout' onClick={() => setIsCartOpen(false)}/>
                            </Link>
                        </div>
                        
                    </>
                )}
            </div>
        </div>
    )
}

export default CartPreview