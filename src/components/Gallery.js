import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
    return (
        <SRLWrapper>
        <a href="/images/Gallery-01.jpg">
        <img src="/images/Gallery-01.jpg" alt="" width="100%" height="500px" style={{objectFit:"cover"}} className="w-100 image-intro-gallery" />
        </a>
        </SRLWrapper>
    );
}

export default Gallery;