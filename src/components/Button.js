import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium','btn--large'];

const LINK = ['#'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    buttonLink
    }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0] 

     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

     const checkButtonLink = LINK.includes(buttonLink) ? buttonLink : LINK[0]

     return (
         <Link to={`${checkButtonLink}`} className=''>
             <button
             className={`btn ${checkButtonStyle} ${checkButtonSize}`}
             onClick={onClick}
             type={type}
             >
                 {children}
             </button>
         </Link>
     )
};
