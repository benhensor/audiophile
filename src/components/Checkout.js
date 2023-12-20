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
    const [formErrors, setFormErrors] = useState({});

    const handleEditItemName = (name) => {
        if (!name) return ''
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

    const handlePayment = (e) => {
        e.preventDefault(); 
    
        const formValues = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            postcode: document.getElementById('postcode').value,
            city: document.getElementById('city').value,
            country: document.getElementById('country').value,
        }

        const errors = validate(formValues)
        setFormErrors(errors)
    
        if (Object.keys(errors).length === 0) {
            setIsOrderConfirmedOpen(true);
        }
    }

    const handleClose = () => {
        setIsOrderConfirmedOpen(false)
    }

    const validate = (values) => {
        const errors = {};
    
        if (!values.name) {
          errors.name = "Required";
        } else if (values.name.length > 15) {
          errors.name = "Must be 15 characters or less";
        }
    
        if (!values.phone) {
          errors.phone = "Required";
        } else if (!/^\d{9,16}/g.test(values.phone)) {
          errors.phone = "Invalid phone number";
        }
    
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
    
        if (!values.address) {
          errors.address = "Required";
        } else if (values.address.length < 10) {
          errors.address = "Invalid address";
        }
    
        if (!values.postcode) {
            errors.postcode = "Required";
        } else if (!/^(GIR ?0AA|[A-Z]{1,2}[0-9][0-9A-Z]? ?[0-9][A-Z]{2})$/i.test(values.postcode)) {
            errors.postcode = "Invalid postcode";
        }
    
        if (!values.city) {
          errors.city = "Required";
        } else if (!/^[A-Za-z\s]{4,26}$/.test(values.city)) {
          errors.city = "Invalid city";
        }
    
        if (!values.country) {
          errors.country = "Required";
        } else if (!/^[A-Za-z\s]{4,56}$/.test(values.country)) {
          errors.country = "Invalid country";
        }
    
        return errors;
      };


    return (
        <div className='checkout-page'>
            <div className="checkout-page-container">

                <button className='checkout-back-button' onClick={handleBackClick}>Go Back</button>

                <div className="checkout-content-container">

                    <div className="checkout-form-container">
                        <h3 className='checkout-title'>Checkout</h3>

                        <div className="checkout-form">

                            <form action="" onSubmit={handlePayment}>
                                <h6 className='checkout-subtitle'>Billing Details</h6>
                                <div className="form-grid">
                                    <div className="checkout-form-group">
                                        <label htmlFor="name">Name</label>
                                        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                                        <input type="text" id='name' name='name' className={formErrors.name ? 'error' : ''} placeholder='' required/>
                                        
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="email">Email Address</label>
                                        {formErrors.name && <span className="error-message">{formErrors.email}</span>}
                                        <input type="email" id='email' name='email' className={formErrors.email ? 'error' : ''} />
                                       
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        {formErrors.name && <span className="error-message">{formErrors.phone}</span>}
                                        <input type="tel" id='phone' name='phone' className={formErrors.phone ? 'error' : ''} placeholder='' required/>
                                        
                                    </div>
                                </div>
                            </form>

                            <form action="" onSubmit={handlePayment}>
                                <h6 className='checkout-subtitle'>Shipping Info</h6>
                                <div className="checkout-form-group-address">
                                    <label htmlFor="address">Address</label>
                                    {formErrors.name && <span className="error-message">{formErrors.address}</span>}
                                    <input type="text" id='address' name='address' className={formErrors.address ? 'error' : ''}  placeholder='' required/>
                                   
                                </div>
                                <div className="form-grid">
                                    <div className="checkout-form-group">
                                        <label htmlFor="zip">Post Code</label>
                                        {formErrors.name && <span className="error-message">{formErrors.postcode}</span>}
                                        <input type="text" id='postcode' name='postcode' className={formErrors.postcode ? 'error' : ''}  placeholder='' required/>
                                        
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="city">City</label>
                                        {formErrors.name && <span className="error-message">{formErrors.city}</span>}
                                        <input type="text" id='city' name='city' className={formErrors.city ? 'error' : ''}  placeholder='' required/>
                                        
                                    </div>
                                    <div className="checkout-form-group">
                                        <label htmlFor="country">Country</label>
                                        {formErrors.name && <span className="error-message">{formErrors.country}</span>}
                                        <input type="text" id='country' name='country' className={formErrors.country ? 'error' : ''}  placeholder='' required/>
                                        
                                    </div>
                                </div>
                            </form>

                            <form action="" onSubmit={handlePayment}>
                                <h6 className='checkout-subtitle'>Payment Details</h6>
                                <div className="payment-method">
                                    <div className="checkout-form-group">
                                        <label htmlFor="name">Payment Method</label>
                                            <label className='payment-method-label'>
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
                                            </label>
                                    </div>
                                    <div className="checkout-form-group">
                                        <label className='payment-method-label'>
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
                                        </label>
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