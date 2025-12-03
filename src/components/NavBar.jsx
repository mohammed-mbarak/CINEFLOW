import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-brand'>
                    <Link to='/' className='navbar-brand-link' onClick={closeMenu}>CineHorizon</Link>
                </div>
                
                <div className='navbar-toggle' onClick={toggleMenu}>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to='/' className='nav-link' onClick={closeMenu}>Home</Link>
                    <Link to='/favorites' className='nav-link' onClick={closeMenu}>Favorites</Link>
                </div>
                
                {isMenuOpen && <div className='navbar-overlay' onClick={closeMenu}></div>}
            </div>
        </nav>
    );
};

export default Navbar;