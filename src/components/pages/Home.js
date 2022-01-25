import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
// import Gallery from '../Gallery';
// import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
// import { SRLWrapper } from "simple-react-lightbox";
import { SRLWrapper } from "simpler-react-lightbox";

// import SimplerReactLightbox from 'simpler-react-lightbox'

// import Image from 'next/image'

function Home() {
    return (
    <>
    
    <Helmet>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Highest Quality Standards in Production Value | Dallas Jib</title>
    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    <meta name="description" content="Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects." />
    <meta property="og:image" content="/images/Production-Value.jpg" />
    <meta name="keywords" content="production value"></meta>
    </Helmet>
    <HeroSection />
    <section className="position-relative">
        <div className="position-absolute h-100 w-100" style={{background:"url(/images/Background-dots.png)",backgroundAttachment:"fixed",backgroundSize:"cover",mixBlendMode:"luminosity",opacity:".8",top:"0",left:"0",pointerEvents:"none"}}></div>
        <div className="container">
            <div className="row bg-faded-gold px-lg-5" style={{padding:"100px 0"}}>
                <div className="col-12 text-center pb-3">
                    <h2 className="aspira-bold text-accent" style={{letterSpacing:".2em"}}>RECENT GALLERY</h2>
                </div>

                <SRLWrapper>
                <div className="row px-lg-5">
                <div className="col-lg-8 col-7 position-relative">
                <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-01.jpg">
                <img src="/images/Gallery-01.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" />
                </a>
                
                </div>
                </div>
                <div className="col-lg-4 col-5 position-relative">
                    <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-02.jpg">
                <img src="/images/Gallery-02.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" />
                </a>
                
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6 position-relative pt-3">
                    <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-03.jpg">
                <img src="/images/Gallery-03.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" />
                </a>
                
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6 position-relative pt-3">
                    <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-04.jpg">
                <img src="/images/Gallery-04.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" />
                </a>
                
                </div>
                </div>
                <div className="col-lg-4 col-12 position-relative pt-3">
                    <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-05.jpg">
                <img src="/images/Gallery-05.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" />
                </a>
                
                </div>
                </div>
                </div>
                </SRLWrapper>

            </div>
        </div>
    </section>
    <Footer />
    </>
    );
}

export default Home;