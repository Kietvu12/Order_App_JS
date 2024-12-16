import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid quidem nisi quaerat voluptate pariatur perspiciatis numquam sunt, debitis ducimus minima quisquam doloremque necessitatibus eius iste voluptates. Numquam, maxime distinctio.</p>
                    <div className="flex justify-center items-center gap-6">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>09999999999</li>
                        <li>Instagram: @yourinstagram</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 - All Right Reserved</p>
        </div>
    )
}

export default Footer