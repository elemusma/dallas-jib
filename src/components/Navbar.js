import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';
// import HeroSection from './HeroSection';
// import logo from '/images/Analyzr-Logo.png';

function Navbar () {
    const [click, setClick] = useState(false);
    const [desktopShow, setDesktopShow] = useState(true);
    const [mobileShow, setMobileShow] = useState(true);


    const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const showDesktop = () => {
        if(window.innerWidth <=992) {
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
        if(window.innerWidth <=991) {
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
                <div className="row align-items-center justify-content-lg-start justify-content-between">
                    {mobileShow && 
                    <div className="col-7">
                        <Logo />
                    </div>
                    }
                    <div className="col-md-1 col-2 text-center text-md-start">
                    <Link to={"//www.linkedin.com/in/rick-dodd-3b120928/"} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"25px",height:"auto"}} viewBox="0 0 448.1 512"><path fill="white" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"/></svg>
                    </Link>
                    </div>
                    <div className="col-lg-8 col-3 text-center text-lg-start">
                    {desktopShow &&
                    <ul className="nav-menu d-flex justify-content-start align-items-center list-unstyled mb-0">
                    <li className="nav-item">
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about/' className='nav-links'>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/gallery/' className='nav-links'>
                            Gallery
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact/' className='nav-links'>
                            Contact
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                    
                    </li> */}
                </ul>
                }
                {mobileShow &&
                <div onClick={handleClick} className={click ? 'open navToggle' : 'closed navToggle'} style={{display:"inline-block"}}>

                    <div className="hamburger-menu" style={{display:"inline-block"}}>
                    <div className="line-1 hamburger-bar"></div>
                    <div className="line-2 hamburger-bar"></div>
                    <div className="line-3 hamburger-bar"></div>
                    </div>

                </div>
                }
                <div onClick={handleClick} className={click ? 'nav-overlay active' : 'nav-overlay'}></div>
                <div className={click ? 'col-lg-6 col-md-8 col-10 bg-accent-blue mobile-menu active text-start' : 'col-lg-6 col-md-8 col-10 bg-accent-blue mobile-menu closed text-start'}>
                <div className="pt-5 ps-5 pe-5 text-start">
                    <div className="close text-right text-end me-5 h1 text-white" onClick={handleClick}>X</div>
                    <div className="pb-5">
                        <div className="d-inline-block" onClick={handleClick}>
                        <Logo />
                        </div>
                    </div>
                    <ul className="nav-menu list-unstyled">
                    <li className="nav-item py-3">
                        <Link to='/' className='nav-links ps-0 py-3' onClick={handleClick}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item py-3">
                        <Link to='/about/' className='nav-links ps-0 py-3' onClick={handleClick}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item py-3">
                        <Link to='/gallery/' className='nav-links ps-0 py-3' onClick={handleClick}>
                            Gallery
                        </Link>
                    </li>
                    <li className="nav-item py-3">
                        <Link to='/contact/' className='nav-links ps-0 py-3' onClick={handleClick}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <Link to={"mailto:rick@dallasjib.com"} target="_blank" className="text-accent-blue-light d-block"><em><strong>rick@dallasjib.com</strong></em></Link>
                <Link to={"tel:+1214-532-6820"} target="_blank" className="text-accent-blue-light text-decoration-none d-block"><strong>214-532-6820</strong></Link>
                <Link to={"//www.linkedin.com/"} target="_blank" className="d-block mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"25px",height:"auto"}} viewBox="0 0 448.1 512"><path fill="white" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"/></svg>
                    </Link>
                <img src="/images/Celebrating-30-years-delivering-promises.png" alt="Celebrating 30 years of delivering promises" className="mt-5" width="150px" height="auto" />

                </div>
                </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center justify-content-lg-end" style={{textAlign:"right"}}>
                        <div>
                    <a href="tel:+12145326820" className="text-white h2 bold">214-532-6820</a> 
                    <span className="d-block text-center text-white">Rick Dodd</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </nav>
    </>
    );
}

export default Navbar;
