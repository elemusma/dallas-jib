import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
// import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

function Home() {
    return (
    <>
    
    <Helmet>
    <meta charSet="utf-8" />
    <title>Highest Quality Standards in Production Value | Dallas Jib</title>
    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    <meta name="description" content="Helmet application" />
    </Helmet>
    <HeroSection />
    <section className="position-relative">
        <div className="position-absolute h-100 w-100" style={{background:"url(/images/Background-dots.png)",backgroundAttachment:"fixed",backgroundSize:"cover",mixBlendMode:"luminosity",opacity:".8",top:"0",left:"0"}}></div>
        <div className="container">
            <div className="row bg-faded-gold pt-5 pb-5 px-lg-5">
                <div className="col-12 text-center pb-5">
                    <h2>Recent Gallery Testing changes getting pushed</h2>
                </div>

<div className="row px-lg-5">
                <div className="col-lg-8 col-7 position-relative">
                    <img src="/images/Gallery-01.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} />
                </div>
                <div className="col-lg-4 col-5 position-relative">
                    <img src="/images/Gallery-02.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} />
                </div>
                <div className="col-lg-4 col-md-6 col-6 position-relative pt-3">
                    <img src="/images/Gallery-03.jpg" alt="" width="100%" height="auto" style={{objectFit:"cover"}} />
                </div>
                <div className="col-lg-4 col-md-6 col-6 position-relative pt-3">
                    <img src="/images/Gallery-04.jpg" alt="" width="100%" height="auto" style={{objectFit:"cover"}} />
                </div>
                <div className="col-lg-4 col-12 position-relative pt-3">
                    <img src="/images/Gallery-05.jpg" alt="" width="100%" height="auto" style={{objectFit:"cover"}} />
                </div>
</div>

            </div>
        </div>
    </section>
    <Footer />
    </>
    );
}

export default Home;