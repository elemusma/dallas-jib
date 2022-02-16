import React from 'react';
import {Helmet} from "react-helmet";
// import { Link } from 'react-router-dom';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function About() {
    return (
<>
        <Helmet>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>About | Dallas Jib</title>
    <meta name="description" content="Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects." />
    <meta property="og:site_name" content="Dallas Jib" />
    <meta property="og:title" content="About | Dallas Jib" />
    <meta property="og:description" content="Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects." />
    <meta property="og:image" content="/images/Dallas-Jib-Cameraman-Operator-06.jpg" />
    <meta name="keywords" content="production value"></meta>
    </Helmet>
    <HeroSection 
    other = 'regular'
    title = {<>About Dallas Jib</>}
    text = 'Born and Raised in Texas'
    img = '/images/Dallas-Jib-Cameraman-Operator-06.jpg'
    // button = {<><Link to='/about/' className="btn btn-main">LEARN MORE</Link></>}
    />
    <section className="pt-5 pb-5 position-relative d-flex align-items-center" style={{height:"100vh",background:"url(/images/Dallas-Jib-Cameraman-Operator-01.jpg)",backgroundAttachment:"fixed",backgroundSize:"cover"}}>
    <div className="position-absolute w-100 h-100 bg-black" style={{mixBlendMode:"multiply",top:"0",left:"0",opacity:".5"}}></div>
        <div className="container position-relative">
            <div className="row">
                <div className="col-md-9 text-white">
                    <h2>Cameraman with years of experience</h2>
                    <p className="h4">Years of experience as a cameraman and jib operator for broadcast and corporate projects allows me to bring a wealth of working knowledge and creativity to your projects.</p>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-5 pb-5 position-relative d-flex align-items-center" style={{height:"100vh",background:"url(/images/Dallas-Jib-Cameraman-Operator-02.jpg)",backgroundAttachment:"fixed",backgroundSize:"cover"}}>
    <div className="position-absolute w-100 h-100 bg-black" style={{mixBlendMode:"multiply",top:"0",left:"0",opacity:".5"}}></div>
        <div className="container position-relative">
            <div className="row">
                <div className="col-md-9 text-white">
                    <h2>Increased production value</h2>
                    <p className="h4">With over 20 years of experience as a jib operator, I realize how a seasoned jib operator can increase production value in many situations. I have worked concerts to live shots with ABC and NBC as a jib operator. I have worked with a variety of clients around the globe and in multiple countries.</p>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-5 pb-5 position-relative d-flex align-items-center" style={{height:"100vh",background:"url(/images/Dallas-Jib-Cameraman-Operator-03.jpg)",backgroundAttachment:"fixed",backgroundSize:"cover",backgroundPosition:"center bottom"}}>
    <div className="position-absolute w-100 h-100 bg-black" style={{mixBlendMode:"multiply",top:"0",left:"0",opacity:".5"}}></div>
        <div className="container position-relative">
            <div className="row">
                <div className="col-md-9 text-white">
                    <h2>Wide perspective to enhance production value</h2>
                    <p className="h4">My experience as hand-held, long lens, and jib operator, as well as production video “camera shader” gives me the ability to look at many areas of the process in order to enhance the production value.</p>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-5 pb-5 position-relative d-flex align-items-center" style={{height:"100vh",background:"url(/images/Dallas-Jib-Cameraman-Operator-08.jpg)",backgroundAttachment:"fixed",backgroundSize:"cover",backgroundPosition:"center bottom"}}>
    <div className="position-absolute w-100 h-100 bg-black" style={{mixBlendMode:"multiply",top:"0",left:"0",opacity:".5"}}></div>
        <div className="container position-relative">
            <div className="row">
                <div className="col-md-9 text-white">
                <h2>Credits</h2>
                <p className="h4">With over 20 years of experience as a jib operator, I realize how a seasoned jib operator can increase production value in many situations.</p>


                <ul>
 	<li>ABC Show with Correspondent John Quinones remote cabin in AK, investigative reporting</li>
 	<li>ABC World News live shots for New Orleans Super Bowl pregame</li>
 	<li>NBC Nightly News live shots</li>
 	<li>Antigua Islands independent project, 3 weeks as 2nd unit 27’ Jib</li>
 	<li>Docudramas MOS in grave yards and lake side, other remote locations</li>
 	<li>Movie “Fissure” exteriors</li>
 	<li>Studio shoots for local producers, Music videos, live broadcasts</li>
 	<li>“New Kids on the Block” Tour, - Dallas, TX</li>
 	<li>Over 20 years as a Jib Owner/Operator</li>
 	<li>Israel month long documentary on location</li>
 	<li>Years of live broadcasts with Jibs</li>
 	<li>Rap Music video with Red Camera independent producer</li>
</ul>

                </div>
            </div>
        </div>
    </section>
    <Footer />
</>
    );
}

export default About;