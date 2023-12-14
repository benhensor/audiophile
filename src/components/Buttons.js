import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../assets/shared/desktop/icon-arrow-right.svg'
import '../styles/buttons.css'

export const Button1 = ({ to }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        if (to) {
        navigate(to)
        }
    }
    return (
        <button className='button1' onClick={handleClick}>SEE PRODUCT</button>
    )
}

export const Button2 = ({ to }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        if (to) {
        navigate(to)
        }
    }
    return (
        <button className='button2' onClick={handleClick}>SEE PRODUCT</button>
    )
}

export const Button3 = ({ to }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        if (to) {
        navigate(to)
        }
    }
    return (
        <button className='button3' onClick={handleClick}>SHOP <ArrowRight style={{fill: '#D87D4A'}}/></button>
    )
}

export const Button4 = ({ onClick }) => (
    <button className='button4' onClick={onClick}>ADD TO CART</button>
)

export const Button5 = ({ onClick }) => (
    <button className='button5' onClick={onClick}>CHECKOUT</button>
)

export const Button6 = ({ onClick }) => (
    <button className='button6' onClick={onClick}>CONTINUE & PAY</button>
)

export const Button7 = ({ onClick }) => (
    <button className='button7' onClick={onClick}>BACK TO HOME</button>
)