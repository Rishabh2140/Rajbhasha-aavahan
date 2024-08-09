import React, { useState } from 'react';
import './Navbar2.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Rajbhasha</div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#team">Team</a>
                <a href="#events">Events</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
