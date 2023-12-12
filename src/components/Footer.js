import React from 'react'
import Nav from './Nav'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as Facebook } from '../assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as Twitter } from '../assets/shared/desktop/icon-twitter.svg'
import { ReactComponent as Instagram } from '../assets/shared/desktop/icon-instagram.svg'
import '../styles/footer.css'

const Footer = () => {

    const SocialIcon = ({ iconName, className }) => {
        const icons = {
            facebook: <Facebook className={className} />,
            twitter: <Twitter className={className} />,
            instagram: <Instagram className={className} />
        }

        return icons[iconName] || null
    }

    const year = new Date().getFullYear()

    return (
        <footer>
        <div className="footer-container">
            <div className="footer-top">
                <Logo />
                <Nav className="footer-nav" />
            </div>
            <div className="footer-details">
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
            <div className="footer-bottom">
                <p>Copyright {year}. All Rights Reserved</p>
                <div className="footer-socials">
                    <a href='https://benhensordev.netlify.app/' target="_blank" rel="noopener noreferrer">
                        <SocialIcon iconName="facebook" className="footer-socials-icon" />
                    </a>
                    <a href='https://benhensordev.netlify.app/' target="_blank" rel="noopener noreferrer">
                        <SocialIcon iconName="twitter" className="footer-socials-icon" />
                    </a>
                    <a href='https://benhensordev.netlify.app/' target="_blank" rel="noopener noreferrer">
                        <SocialIcon iconName="instagram" className="footer-socials-icon" />
                    </a>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer