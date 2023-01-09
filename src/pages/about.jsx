import React from 'react'
import image1 from './9.png';
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';
import "./about.css";

 export const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam aliquam enim
               consectetur quae ducimus earum est nesciunt nostrum esse?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed iste fugit
               consequatur deleniti! Quasi possimus quae recusandae tempora? Vitae obcaecati 
               a dolorem odit asperiores cum repellendus, voluptates voluptatem doloremque 
               dolores nisi, fugiat deleniti temporibus. Quod, qui dicta? Magni perferendis
                enim omnis laborum, numquam quia cupiditate porro mollitia tempora, voluptatibus
                 consequatur architecto ullam, illo laudantium sequi? Velit ea at veniam, iusto 
                 dicta distinctio ab quas, saepe quibusdam officiis?</p>

                   <div className="button">
                    <a href="">Read More</a>
                   </div>
          </div>
          {/* <div className="social">
                        <a href="#"><SocialIcon url="https://twitter.com" /></a>
                        <a href="#"><SocialIcon url="https://facebook.com/" /></a>
                        <a href="#"><SocialIcon url="https://instagram.com/" /></a>
                        <a href="#"><SocialIcon url="https://linkedin.com/" /></a>
          </div> */}
        </div>
        <div className="image-section">
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  )
}


