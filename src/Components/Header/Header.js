import React from 'react';
import Welcome from '../Sections/Welcome/Welcome'

const Header =()=> {
  return (
      <div>
        <header className="header-bg">
          <div className="content">
            <div className="top-header content top-header-interval flex-between margin-bottom-60">
              <div>
                <a className="navbar-brand" href=""><img src="images/logo.png" alt=""/></a>
                <h1 className="text-indent">Consult Plus</h1>
              </div>
              <nav>
                <ul className="main-nav flex-between">
                  <li><a href="" className="active-page disabled">Home</a></li>
                  <li><a href="about-us.html">About us</a></li>
                  <li><a href="industry.html">Industry</a></li>
                  <li><a href="404.html">Services</a></li>
                  <li><a href="pricing.html">Pages</a></li>
                  <li><a href="contact-us.html">Contact us</a></li>
                </ul>
                <button className="button-mob"></button>
                <ul className="mobile-menu">
                  <li><a href="" className="active-page disabled">Home</a></li>
                  <li><a href="">About us</a></li>
                  <li><a href="">Industry</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Pages</a></li>
                  <li><a href="">Contact us</a></li>
                </ul>
              </nav>
              <div className="flex-between header-contact">
                <a href="tel:+9156856664555" className="phone-link">+91 5685 6664 555</a>
                <button className="button button-message"></button>
              </div>
            </div>
            <Welcome/>
          </div>
        </header>
      </div>
  )
};

export default Header;

