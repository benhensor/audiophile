import React from 'react'
import { Button7 } from './Buttons'
import { ReactComponent as TickIcon } from '../assets/cart/tick.svg'
import { Link } from 'react-router-dom'
import '../styles/orderconfirmation.css'

const OrderConfirmation = ({ cartItems }) => {

    const handleEditItemName = (name) => {
        if (!name) return ''
        const suffixes = /Headphones|Speaker|Wireless Earphones/gi;
        const editedName = name.replace(suffixes, '')
        return editedName
    }

    return (
        <div className='order-confirmation'>
            <div className="order-confirmation-container">

                <div className="tick-icon">
                    <TickIcon />
                </div>
                <h3>Thank you <br/> for your order</h3>
                <p className='order-message'>You will receive an email confirmation shortly.</p>
                <div className="order-summary">
                    <div className="order-items">
                        {cartItems.map(item => {
                            return (
                                <div className="order-item" key={item.id}>
                                    <div className="order-item-block">
                                        <div className="order-item-image">
                                            <img src={item.cart} alt={item.name} />
                                        </div>
                                        <div className="order-item-details">
                                            <h6>{handleEditItemName(item.name)}</h6>
                                            <p>£{item.price}</p>
                                        </div>
                                    </div>
                                    <div className="order-item-quantity">
                                        <p>x {item.quantity}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="order-total">
                        <h6>Grand Total</h6>
                        <p>£{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                    </div>
                </div>
                <Link to='/'><Button7 /></Link>

            </div>
        </div>
    )
}

export default OrderConfirmation