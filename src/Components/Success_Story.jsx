// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



//Slide import image
import slide01 from '../assets/Success-story-image/01 (1).jpg';
import slide02 from '../assets/Success-story-image/01 (2).jpg';
import slide03 from '../assets/Success-story-image/01 (3).jpg';
import slide04 from '../assets/Success-story-image/01 (4).jpg';
import slide05 from '../assets/Success-story-image/01 (5).jpg';
import slide06 from '../assets/Success-story-image/01 (6).jpg';
import slide07 from '../assets/Success-story-image/01 (7).jpg';

const Success_Story = () => {

    const stories = [
        "Oliver and Emily from England met through our platform and built a bond on trust and understanding.",
        "Arjun and Priya from India remind us that meaningful connections happen when hearts are open.",
        "Rashed and Fatema from Bangladesh got to know each other for months and found their perfect match.",
        "Ethan and Sophia from USA highlight the beauty of commitment and communication.",
        "Ayaan and Ananya from India found love that transcends distance and differences.",
        "Rahman and Mariam from Bangladesh blossomed from a shared vision for the future.",
        "William and Charlotte from England exemplify trust, understanding, and love."
    ];

    const slides = [slide01, slide02, slide03, slide04, slide05, slide06, slide07];

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="mySwiper py-10"
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
        >
            {slides.map((slide, index) => (     //slide.map-> slide on mapping, slide -> current slide, index means position start 0....6

                //    key index means unique id. 
                <SwiperSlide key={index}>

                    {/* This is card  */}
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-5 pt-5">
                            <img
                                src={slide}     //current slide
                                alt={`Slide ${index + 1}`}    //Increase slide : current + 1, mane next slide hobe.
                                className="rounded-xl w-full h-64 md:h-72 lg:h-80 object-cover"
                            />
                        </figure>

                        <div className="card-body items-center text-center">
                            <p>{stories[index]}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Success_Story;