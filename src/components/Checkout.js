import React, { useState } from 'react'
import { useCart } from '../context/CartItems'
import { Button6 } from './Buttons'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as PaymentIcon } from '../assets/cart/payment.svg'
import OrderConfirmation from './OrderConfirmation'
import '../styles/checkout.css'

const Checkout = () => {

    const navigate = useNavigate()
    const { cartItems } = useCart()

    const [payMethod, setPayMethod] = useState('eMoney')
    const [isOrderConfirmedOpen, setIsOrderConfirmedOpen] = useState(false)

    const handleEditItemName = (name) => {
        const suffixes = /Headphones|Speaker|Wireless Earphones/gi;
        const editedName = name.replace(suffixes, '')
        return editedName
    }

    const handleBackClick = () => {
        navigate(-1)
    }

    const calulateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }

    const calculateVAT = () => {
        const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        const vat = total * 0.2
        return vat.toFixed(2)
    }

    const calculateGrandTotal = () => {
        const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        const grandTotal = total + 50
        return grandTotal.toFixed(2)
    }

    const subTotal = calulateSubtotal()
    const vat = calculateVAT()
    const grandTotal = calculateGrandTotal()

    const handlePayment = () => {
        setIsOrderConfirmedOpen(true)
    }

    const handleClose = () => {
        setIsOrderConfirmedOpen(false)
    }


    return (
        <div className='checkout-page'>
            <div className="checkout-page-container">

                <button className='checkout-back-button' onClick={handleBackClick}>Go Back</button>

                <div className="checkout-content-container">

                    <div className="checkout-form-container">
                        <h3 className='checkout-title'>Checkout</h3>

                        <div className="checkout-form">

                            <form action="">
                                <h6 className='checkout-subtitle'>Billing Details</h6>
                                <div className="form-grid">
                                    <div className="checkout-form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id='name' name='name' placeholder='' required/>
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id='email' name='email'/>
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id='phone' name='phone' placeholder='' required/>
                                    </div>
                                </div>
                            </form>

                            <form action="">
                                <h6 className='checkout-subtitle'>Shipping Info</h6>
                                <div className="checkout-form-group-address">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id='address' name='address' placeholder='' required/>
                                </div>
                                <div className="form-grid">
                                    <div className="checkout-form-group">
                                        <label htmlFor="zip">Post Code</label>
                                        <input type="text" id='zip' name='zip' placeholder='' required/>
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" id='city' name='city' placeholder='' required/>
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="country">Country</label>
                                        <input type="text" id='country' name='country' placeholder='' required/>
                                    </div>
                                </div>
                            </form>

                            <form action="">
                                <h6 className='checkout-subtitle'>Payment Details</h6>
                                <div className="payment-method">
                                    <div className="checkout-form-group">
                                        <label htmlFor="name">Payment Method</label>
                                        <div className="radio-input">
                                            <input 
                                                type="radio" 
                                                id="eMoney" 
                                                name="paymentMethod" 
                                                value="eMoney"
                                                checked={payMethod === 'eMoney'}
                                                onChange={(e) => setPayMethod(e.target.value)}
                                                required />
                                            <label htmlFor="eMoney"></label>
                                            e-Money
                                        </div>
                                    </div>
                                    <div className="checkout-form-group">
                                        <div className="radio-input">
                                            <input 
                                                type="radio" 
                                                id="cash" 
                                                name="paymentMethod" 
                                                value="cash"
                                                onChange={(e) => setPayMethod(e.target.value)}
                                                required />
                                            <label htmlFor="cash"></label>
                                            Cash on Delivery
                                        </div>
                                    </div>
                                </div>
                                {payMethod === 'eMoney' ? (
                                <div className="form-grid">
                                    <div className="checkout-form-group">
                                        <label htmlFor="card">e-Money Number</label>
                                        <input type="text" id='card' name='card' placeholder='' required/>
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="date">e-Money Pin</label>
                                        <input type="text" id='date' name='date' placeholder='' required/>
                                    </div>
                                </div>
                                ) : (
                                <div className="payment-information">
                                    <PaymentIcon />
                                    <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                </div>
                                )}
                            </form>

                        </div>

                    </div>

                    <div className="checkout-summary-container">
                        <div className="checkout-content">
                            <div className='checkout-header'>
                                <h6>Summary</h6>
                            </div>
                            {cartItems.map(cartItem => (
                                <div key={cartItem.id} className='checkout-item'>
                                    <div className='checkout-item-details'>
                                        <img src={cartItem.cart} alt={cartItem.name} />
                                        <div className='checkout-item-details-text'>
                                            <p>{handleEditItemName(cartItem.name)}</p>
                                            <p className='summary-item-price'>£{cartItem.price}</p>
                                        </div>
                                    </div>
                                    <div className="summary-item-quantity">
                                        <p>x {cartItem.quantity}</p>
                                    </div>
                                </div>
                            ))}                       
                        </div>

                        <div className='checkout-total-calculation'>
                        <div className="checkout-total">
                                <h6>Total</h6>
                                <p><strong>£{subTotal}</strong></p>
                            </div> 
                            <div className="checkout-shipping">
                                <h6>Shippng</h6>
                                <p><strong>£50</strong></p>
                            </div>
                            <div className="checkout-vat">
                                <h6>VAT &#40;Included&#41;</h6>
                                <p><strong>£{vat}</strong></p>
                            </div> 
                            <div className="checkout-grand-total">
                                <h6>Grand Total</h6>
                                <p><strong>£{grandTotal}</strong></p>
                            </div>                           
                            <Button6 className='checkout-pay-button' onClick={handlePayment}/>
                        </div>
                    </div>
                </div>

                {isOrderConfirmedOpen && (
                    <>
                        <div className='order-confirmation-backdrop' onClick={handleClose}></div>
                        <OrderConfirmation cartItems={cartItems}/>
                    </>
                )}

            </div>
        </div>
    )
}

export default Checkout