import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./footer.css";
import ReactDOM from 'react-dom';
// import { SocialIcon } from 'react-social-icons';
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
           
                <div className="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Payment Options</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Online Shop</h4>
                    <ul>
                        <li><a href="#">MobilePhones</a></li>
                        <li><a href="#">Laptops</a></li>
                        <li><a href="#">Headphones</a></li>
                        <li><a href="#">Camera</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Terms & Policies</h4>

                    <ul>
                        <li><a href="#">Policies</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Code of Conduct</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <li><a href="#"><SocialIcon url="https://twitter.com" /></a></li>
                        <li><a href="#"><SocialIcon url="https://facebook.com/" /></a></li>
                        <li><a href="#"><SocialIcon url="https://instagram.com/" /></a></li>
                        <li><a href="#"><SocialIcon url="https://linkedin.com/" /></a></li>
                    </div>
                </div>

                

            </div>
        </div>
    </footer>
  )
}

