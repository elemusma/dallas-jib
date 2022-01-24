import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import HeroSection from './HeroSection';
// import logo from '/images/Analyzr-Logo.png';

function Navbar () {
    const [click, setClick] = useState(false);
    const [desktopShow, setDesktopShow] = useState(true);
    const [mobileShow, setMobileShow] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showDesktop = () => {
        if(window.innerWidth <=960) {
            setDesktopShow(false);
        } else {
            setDesktopShow(true);
        }
    };

    useEffect(() => {
        showDesktop();
    }, []);
    window.addEventListener('resize', showDesktop);

    const showMobile = () => {
        if(window.innerWidth <=960) {
            setMobileShow(true);
        } else {
            setMobileShow(false);
        }
    };

    useEffect(() => {
        showMobile();
    }, []);
    window.addEventListener('resize', showMobile);

    return (
    <>
    <nav className="nav">
        <div className="secondary bg-black w-100 py-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-1">
                    <Link to={"//www.linkedin.com/"} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"25px",height:"auto"}} viewBox="0 0 448.1 512"><path fill="white" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"/></svg>
                    </Link>
                    </div>
                    <div className="col-10">
                    {desktopShow &&
                    <ul className={click ? 'nav-menu active d-flex justify-content-start align-items-center list-unstyled mb-0' : 'nav-menu d-flex justify-content-start align-items-center list-unstyled mb-0'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about/' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/gallery/' className='nav-links' onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>
                </ul>
                }
                {mobileShow &&
                <div className={click ? 'open navToggle' : 'closed navToggle d-lg-none d-block'} style={{display:"inline-block"}}>

                    <div className="hamburger-menu" style={{display:"inline-block"}}>
                    <div className="line-1 hamburger-bar"></div>
                    <div className="line-2 hamburger-bar"></div>
                    <div className="line-3 hamburger-bar"></div>
                    </div>

                </div>
                }
                    </div>
                </div>
            </div>
        </div>
        
    </nav>
    </>
    );
}

export default Navbar;
