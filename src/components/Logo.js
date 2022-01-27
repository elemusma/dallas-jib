import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';

function Logo() {
    return(
        <>
        <Link to="/" className="col-10 navbar-logo">
        <img src="/images/DallasJib-Logo.png" alt="Dallas Jib logo" width="400px" height="auto" style={{maxWidth:"100%"}} />
        </Link>
        </>
    );
}

export default Logo;