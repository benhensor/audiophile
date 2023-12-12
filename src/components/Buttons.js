import React from 'react'
import { ReactComponent as ArrowRight } from '../assets/shared/desktop/icon-arrow-right.svg'
import '../styles/buttons.css'

export const Button1 = () => (
    <button className='button1'>SEE PRODUCT</button>
)

export const Button2 = () => (
    <button className='button2'>SEE PRODUCT</button>
)

export const Button3 = () => (
    <button className='button3'>SHOP <ArrowRight style={{fill: '#D87D4A'}}/></button>
)
