// import bannerImg from '../assets/Banner/banner.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img01 from '../assets/bg-image/Warm embrace under golden lights.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img01} />
                </div>
                <div>
                    <img src={img01} />
                </div>
                <div>
                    <img src={img01} />
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;