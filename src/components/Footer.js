import React from 'react';
import "./Footer.css";


const Footer = ()=>{
     return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-section'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className='footer-section'>
                    <h3>Contact Us</h3>
                    <p>Email: pankaj86015anu@gmail.com</p>
                    <p>phone: +91-8601551776</p>
                </div>
            </div>

            <div className='footer-bottem'>
                <p>&copy; 2025 Company. All rights reserved.</p>
            </div>
        </footer>
     )
}

export default Footer;
