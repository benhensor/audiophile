import React from 'react'
import { useCart } from '../context/CartItems'
import { ReactComponent as Plus } from '../assets/shared/desktop/icon-plus.svg'
import { ReactComponent as Minus } from '../assets/shared/desktop/icon-minus.svg'
import '../styles/cartpreview.css'

const CartPreview = () => {

    const { cartItems, updateItem, removeItem, clearCart } = useCart()

    const handleClear = () => {
        clearCart()
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
            handleUpdate(id, item.quantity - 1)          
        }
    }


return (
    <div className='cart-preview'>
        <div className='cart-container'>
            {cartItems.length === 0 ? (
                <div className='cart-header'>
                    <h6>Cart</h6>
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <>
                    <div className='cart-header'>
                        <h6>Cart &#40;{cartItems.length}&#41;</h6>
                        <button onClick={handleClear}>Remove all</button>
                    </div>
                    {cartItems.map(cartItem => (
                        <div className='cart-item'>
                            <img src={cartItem.image.cart} alt={cartItem.name} />
                            <div className='cart-item-details'>
                                <h6>{cartItem.name}</h6>
                                <p>${cartItem.price}</p>
                            </div>
                            <div className='art-item-quantity'>
                                <button onClick={() => handleDecrease}><Minus/></button>
                                <p>{cartItem.quantity}</p>
                                <button onClick={() => handleIncrease}><Plus/></button>
                            </div>
                        </div>
                    ))}
                    <div className='cart-total'>
                        <h6>Total</h6>
                        <p>£{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    </div>
                    <button className='cart-checkout'>Checkout</button>
                </>
            )}
        </div>
    </div>
)
}

export default CartPreview