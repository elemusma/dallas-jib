import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Footer() {
return (
    <footer className="bg-accent-blue text-white pt-5 pb-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 text-center">
                {/* <picture>
                <source type='image/webp' srcSet='/images/DallasJib-Logo.webp' />
                <source type='image/png' srcSet='/images/DallasJib-Logo.png' /> */}
                {/* <img src="/images/DallasJib-Logo.png" alt="Dallas Jib logo" width="400px" height="auto" style={{maxWidth:"100%"}} /> */}
                <Logo />
                {/* </picture> */}
                </div>
                
                <div className="col-md-9 text-center pt-5">
                <ul className="nav-menu active d-flex justify-content-center align-items-center list-unstyled flex-wrap mb-0">
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
                </ul>
                </div>
                <div className="col-md-9 text-center pt-5">
                <Link to={"//www.linkedin.com/"} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"25px",height:"auto"}} viewBox="0 0 448.1 512"><path fill="white" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"/></svg>
                    </Link>
                </div>
                <div className="col-md-9 text-center pt-5">
                    <p className="mb-0">Copyright &copy; 2022 Dallas Jib - All Rights Reserved.</p>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <Link to={"mailto:rick@rickdodd.net"} target="_blank" className="text-accent-blue-light"><em><strong>rick@rickdodd.net</strong></em></Link> <div className="bg-accent mx-3" style={{width:"1px",height:"15px"}}></div>
                    <p className="mb-0 pe-2">Phone: </p>
                    <Link to={"tel:+1720.903.0048"} target="_blank" className="text-white text-decoration-none"><strong>720.903.0048</strong></Link> <div className="bg-accent mx-3" style={{width:"1px",height:"15px"}}></div>
                    <Link to={"#"} target="_blank" className="text-white text-decoration-none">Privacy Policy</Link> <span className="px-1"> / </span> <Link to={"#"} target="_blank" className="text-white text-decoration-none">Disclaimer</Link>
                    </div>
                </div>
                <div className="col-md-9 text-center pt-5">
                <p className="mb-0 small">Created by</p>
                {/* <picture>
                <source type='image/webp' srcSet='/images/created-by-inside-out-creative.webp' />
                <source type='image/png' srcSet='/images/created-by-inside-out-creative.png' /> */}
                <img src="/images/created-by-inside-out-creative.png" alt="" width="175px" height="auto" />
                {/* </picture> */}
                </div>
            </div>
        </div>
    </footer>
);
}

export default Footer;
