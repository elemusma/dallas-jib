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
    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    <meta name="description" content="Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects." />
    <meta property="og:image" content="/images/Production-Value.jpg" />
    <meta name="keywords" content="production value"></meta>
    </Helmet>
    <HeroSection 
    other = 'regular'
    title = {<>About Dallas Jib</>}
    text = 'Born and raised in Colorful Colorado.'
    // button = {<><Link to='/about/' className="btn btn-main">LEARN MORE</Link></>}
    />
    <Footer />
</>
    );
}

export default About;