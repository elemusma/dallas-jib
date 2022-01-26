import React from 'react';
import Footer from '../Footer';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import HeroSection from '../HeroSection';

function Contact() {
    return (
<>

<Helmet>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contact Us | Dallas Jib</title>
<meta name="description" content="720.903.0048 | rick@rickdodd.net. We have 30 years of experience, feel free to reach out to us with any questions." />
<meta property="og:image" content="/images/Production-Value.jpg" />
<meta name="keywords" content="production value"></meta>
</Helmet>


    <HeroSection 
    // title = {<>Gallery Dallas Jib</>}
    // text = 'Browse through all our projects.'
    // button = {<><Link to='/Gallery/' className="btn btn-main">LEARN MORE</Link></>}
    other = {<>
    <div className="row justify-content-center" style={{paddingBottom:"175px"}}>
    <div class="col-md-9 pt-5 pb-5 p-4 position-relative">
<div class="content">
<div class="position-absolute bg-white w-100 h-100" style={{opacity:"0.75",top:"0",left:"0"}}></div>
<div class="position-relative text-center">
<h2>Contact us with any questions!</h2>
<p>contact form will go here. Figure out how to do react form.</p>
</div>
</div>
</div>
</div>
    </>}
    />
<Footer />



</>
    );
}

export default Contact;