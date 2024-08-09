import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import Font Awesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">Rajbhasha</span>
          </div>
          <div className="media-icons">
            <a href="#" target='_blank'><i className="fab fa-facebook-f"></i></a>
            <a href="#" target='_blank'><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/rajbhasha_nit_raipur/" target='_blank'><i className="fab fa-instagram"></i></a>
            <a href="#" target='_blank'><i className="fab fa-linkedin-in"></i></a>

          </div>
        </div>
        <div className="link-boxes">
          <div className='box box1'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti dolorum libero dolore voluptas id mollitia assumenda quidem esse perferendis,
              quo nobis magnam atque quam autem consequuntur eveniet tempore veritatis pariatur.</p>
          </div>
          <ul className="box box2">
            <li className="link_name">Links</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Events</a></li>
          </ul>
          <ul className="box box3">
            <li className="link_name">Events</li>
            <li><a href="#">Nukkad Natak</a></li>
            <li><a href="#">Kavita Lekhan</a></li>
            <li><a href="#">Faculty Event</a></li>
            <li><a href="#">Students Event</a></li>
          </ul>

        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright © 2024 <a href="#">Rajbhasha.</a></span>
          {/* <span className="policy_terms">
            <a href="#">Privacy policy</a>
          </span> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
