import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {


return (
    <>
    <section className='hero position-relative text-white pt-2 pb-5 bg-attachment' style={{background:"url(/images/Production-Value.jpg)",backgroundSize:"cover",backgroundAttachment:"fixed"}}>

        <div className="position-absolute w-100 h-100 bg-black" style={{mixBlendMode:"multiply",top:"0",left:"0",opacity:".5"}}></div>

        <div className="position-absolute triangle" style={{}}></div>

        <img src="/images/Celebrating-30-years-delivering-promises.png" alt="" className="logo-triangle position-absolute" />

        <div className="container position-relative">
            <div className="row" style={{paddingBottom:"325px"}}>
        <Link to="/" className="col-10 navbar-logo">
                <img src="/images/DallasJib-Logo.png" width="400px" height="auto" />
            </Link>
            </div>
        <div className="row align-items-center">
            <div className="col-md-9">
                <h2 className="mb-0 aspira-black h3">HIGHEST QUALITY STANDARDS IN</h2>
                <h1 className="aspira-black" style={{fontSize:"70px",lineHeight:"1"}}>PRODUCTION<br></br>VALUE</h1>
                <div className="bg-accent mb-4" style={{height:"4px",width:"200px"}}></div>
                <div className="col-md-6">
                <p className=""><strong>Bringing years of experience as a cameraman and jib operator for broadcast and corporate projects has allowed me to bring a wealth of working knowledge and creativity to your projects.</strong></p>
                <Link to='/about/' className="btn btn-main">LEARN MORE</Link>
                </div>

            </div>
            
        </div>
        </div>
    </section>
    </>
);
}

export default HeroSection;
