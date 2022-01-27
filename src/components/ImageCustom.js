import React from 'react';
import Image from 'react-image-webp';


function ImageCustom() {
    return (
        <>
            {/* <Image
            src={require('../images/Gallery-01.jpg')}
            webp={require('../images/Gallery-01.webp')}
            /> */}
            <Image
                src={require('../images/Gallery-01.jpg')}
                webp={require('../images/Gallery-01.webp')}
                className={'w-100 image-intro-gallery'}
                style={[],[]}
                alt={'Gallery-01'}
                />
            {/* <img src="/images/Gallery-01.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" alt="Gallery-01" /> */}
        </>
        );
}

export default ImageCustom;