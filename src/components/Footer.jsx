import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-container'>

                <div className='footer-section'>
                    <h3 className='footer-brand'>
                        <span className="cine">Cine</span><span className="flow">Horizon</span>
                    </h3>
                    <p className='footer-tagline'>Your ultimate movie exploration companion.</p>
                </div>

                <div className='footer-section'>
                    <h4>Quick Links</h4>
                    <ul className='footer-links'>
                        <li><Link to='/' className='footer-link'>Home</Link></li>
                        <li><Link to='/favorites' className='footer-link'>Favorites</Link></li>
                        <li><a href='https://www.themoviedb.org/' className='footer-link' target='_blank' rel='noopener noreferrer'>TMDB API</a></li>
                    </ul>
                </div>

                <div className='footer-section'>
                    <h4>About</h4>
                    <p className='footer-about'>
                        CineFlow is powered by TMDB to bring trending and fresh movie discoveries to your screen in real-time.
                    </p>
                </div>

            </div>

            <div className='footer-bottom'>
                <p>&copy; {currentYear} CineFlow — Powered by TMDB Movie Database.</p>
            </div>
        </footer>
    );
};

export default Footer;
