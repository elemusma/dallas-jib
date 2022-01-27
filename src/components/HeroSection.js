import React, { useState, useEffect } from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
// import { Link } from 'react-router-dom';
import Logo from './Logo';

function HeroSection(props) {

    const [desktopShow, setDesktopShow] = useState(true);
    const [mobileShow, setMobileShow] = useState(true);

    const showDesktop = () => {
        if(window.innerWidth <=992) {
            setDesktopShow(false);
        } else {
            setDesktopShow(true);
        }
    };

    useEffect(() => {
        showDesktop();
    }, []);
    window.addEventListener('resize', showDesktop);

    const showMobile = () => {
        if(window.innerWidth <=991) {
            setMobileShow(true);
        } else {
            setMobileShow(false);
        }
    };

    useEffect(() => {
        showMobile();
    }, []);
    window.addEventListener('resize', showMobile);

return (
    <>
    <section className='hero position-relative pt-2 pb-5 bg-attachment' style={{background:"url(/images/Production-Value.jpg)",backgroundSize:"cover",backgroundAttachment:"fixed"}}>

        <div className="position-absolute w-100 h-100 bg-black" style={{mixBlendMode:"multiply",top:"0",left:"0",opacity:".5"}}></div>

        <div className="position-absolute triangle" style={{}}></div>

        <img src="/images/Celebrating-30-years-delivering-promises.png" alt="Celebrating 30 years of delivering promises" className="logo-triangle position-absolute" />


        <div className="container position-relative">
            {desktopShow &&
            <div className="row" style={{paddingBottom:"325px"}}>
        <Logo />
            </div>
            }

            {mobileShow &&
            <div style={{paddingBottom:"250px"}}></div>
            }

        {props.other === 'regular' ?
        <div className="row align-items-center text-white">
            <div className="col-md-9">
                {props.pretitle ? 
                <h2 className="mb-0 aspira-black h3 pretitle">{props.pretitle}</h2>
                : ""}
                {props.title ? 
                <h1 className="aspira-black" style={{fontSize:"70px",lineHeight:"1"}}>{props.title}</h1>
                : ""}
                <div className="bg-accent mb-4" style={{height:"4px",width:"200px"}}></div>
                <div className="col-lg-6 col-md-10">
                <p className=""><strong>{props.text}</strong></p>
                {props.button ? 
                props.button
                : ""}
                </div>
            </div>
        </div>
        : props.other}

        </div>
    </section>
    </>
);
}

export default HeroSection;
