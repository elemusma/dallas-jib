import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
// import Gallery from '../Gallery';
// import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
// import MetaTags from 'react-meta-tags';
// import { SRLWrapper } from "simple-react-lightbox";
import { SRLWrapper } from "simpler-react-lightbox";
import { Link } from 'react-router-dom';
// import Image from 'react-image-webp';
// import ImageCustom from '../ImageCustom';
// import './Home.css';
// import {isWebpSupported} from 'react-image-webp/dist/utils';
// import imagemin from 'imagemin';
// import imageminWebp from 'imagemin-webp';

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
    <meta property="og:site_name" content="Dallas Jib" />
    <meta property="og:title" content="Highest Quality Standards in Production Value | Dallas Jib" />
    <meta property="og:description" content="Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects." />
    <meta property="og:image" content="/images/Production-Value.jpg" />
    <meta name="keywords" content="production value"></meta>
    </Helmet>
    <HeroSection 
    img = '/images/Production-Value.jpg'
    other = 'regular'
    pretitle = 'HIGHEST QUALITY STANDARDS IN'
    title = {<>PRODUCTION <br></br> VALUE</>}
    text = 'Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects.'
    button = {<><Link to='/about/' className="btn btn-main">LEARN MORE</Link></>}
    />
    <section className="position-relative">
        <div className="position-absolute h-100 w-100 bg-attachment" style={{background:"url(/images/Background-dots.png)",backgroundAttachment:"fixed",backgroundSize:"cover",mixBlendMode:"luminosity",opacity:".8",top:"0",left:"0",pointerEvents:"none"}}></div>
        <div className="container">
            <div className="row bg-faded-gold px-lg-5" style={{padding:"100px 0"}}>
                <div className="col-12 text-center pb-3">
                    <h2 className="aspira-bold text-accent" style={{letterSpacing:".2em"}}>RECENT GALLERY</h2>
                </div>

                <SRLWrapper>
                <div className="row px-lg-5">
                <div className="col-lg-8 col-md-6 position-relative">
                <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-01.jpg">

                <img src="/images/Gallery-01.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" alt="Gallery-01" />
                

                </a>
                
                </div>
                </div>
                <div className="col-lg-4 col-md-6 position-relative pt-md-0 pt-3">
                    <div class="position-relative img-hover w-100 overflow-h">

                <a href="/images/Gallery-02.jpg">
                {/* <picture>
                <source type='image/webp' srcSet='/images/Gallery-02.webp' />
                <source type='image/jpeg' srcSet='/images/Gallery-02.jpg' /> */}
                <img src="/images/Gallery-02.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" alt="Gallery-02" />
                {/* </picture> */}
                </a>

                
                </div>
                </div>
                <div className="col-lg-4 col-md-6 position-relative pt-3">
                    <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-03.jpg">
                {/* <picture>
                <source type='image/webp' srcSet='/images/Gallery-03.webp' />
                <source type='image/jpeg' srcSet='/images/Gallery-03.jpg' /> */}
                <img src="/images/Gallery-03.jpg" alt="" width="100%" height="300px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" alt="Gallery-03" />
                {/* </picture> */}
                </a>
                
                </div>
                </div>
                <div className="col-lg-4 col-md-6 position-relative pt-3">
                    <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-04.jpg">
                {/* <picture>
                <source type='image/webp' srcSet='/images/Gallery-04.webp' />
                <source type='image/jpeg' srcSet='/images/Gallery-04.jpg' /> */}
                <img src="/images/Gallery-04.jpg" alt="" width="100%" height="300px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" alt="Gallery-04" />
                {/* </picture> */}
                </a>
                
                </div>
                </div>
                <div className="col-lg-4 col-12 position-relative pt-3">
                    <div class="position-relative img-hover w-100 overflow-h">
                <a href="/images/Gallery-05.jpg">
                {/* <picture>
                <source type='image/webp' srcSet='/images/Gallery-05.webp' />
                <source type='image/jpeg' srcSet='/images/Gallery-05.jpg' /> */}
                <img src="/images/Gallery-05.jpg" alt="" width="100%" height="300px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" alt="Gallery-05" />
                {/* </picture> */}
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