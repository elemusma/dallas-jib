import React from 'react';
import {Helmet} from "react-helmet";
// import { Link } from 'react-router-dom';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { SRLWrapper } from "simpler-react-lightbox";

function Gallery() {
    return (
<>
        <Helmet>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Gallery | Dallas Jib</title>
    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    <meta name="description" content="Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects." />
    <meta property="og:site_name" content="Dallas Jib" />
    <meta property="og:title" content="Gallery | Dallas Jib" />
    <meta property="og:description" content="Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects." />
    <meta property="og:image" content="/images/Dallas-Jib-Cameraman-Operator-05.jpg" />
    <meta name="keywords" content="production value"></meta>
    </Helmet>
    <HeroSection 
    img = '/images/Dallas-Jib-Cameraman-Operator-05.jpg'
    other = 'regular'
    title = {<>Gallery Dallas Jib</>}
    text = 'Browse through all our projects.'
    // button = {<><Link to='/Gallery/' className="btn btn-main">LEARN MORE</Link></>}
    />
    <section className="pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <SRLWrapper>
                <a href="/images/Dallas-Jib-Cameraman-Operator-09.jpg">
                <img src="/images/Dallas-Jib-Cameraman-Operator-09.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" alt="Aviation Cameraman" />
                </a>
                </SRLWrapper>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</>
    );
}

export default Gallery;