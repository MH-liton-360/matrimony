// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide01 from '../assets/Success-story-image/01 (1).jpg';
import slide02 from '../assets/Success-story-image/01 (2).jpg';
import slide03 from '../assets/Success-story-image/01 (3).jpg';
import slide04 from '../assets/Success-story-image/01 (4).jpg';
import slide05 from '../assets/Success-story-image/01 (5).jpg';
import slide06 from '../assets/Success-story-image/01 (6).jpg';
import slide07 from '../assets/Success-story-image/01 (7).jpg';

const Success_Story = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper py-10"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >
                {[slide01, slide02, slide03, slide04, slide05, slide06, slide07].map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="card bg-base-100 shadow-sm">
                            <figure className="px-5 pt-5">
                                <img
                                    src={slide} //this is current slide
                                    alt={`Slide ${index + 1}`}
                                    className="rounded-xl w-full h-64 md:h-72 lg:h-80 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p>
                                    {
                                        [
                                            "Rahim and Ayesha met through our platform and found a bond built on trust and understanding. Their journey is a true example of love meeting the right opportunity.",
                                            "Shahriar and Fatima’s story reminds us that meaningful connections can happen when hearts are open. Their union reflects patience, compatibility, and mutual respect.",
                                            "After months of getting to know each other, Imran and Leena found their perfect match. Their story is a testament to finding love through shared values and dreams.",
                                            "Rafiq and Nabila’s journey highlights the beauty of commitment and communication. Through our platform, they discovered a lifelong partnership full of joy and understanding.",
                                            "Tanvir and Sofia found love that transcends distance and differences. Their success story shows that genuine connections flourish when hearts align.",
                                            "Aziz and Mariam’s marriage blossomed from a shared vision for the future. Their story inspires hope and confidence for those seeking lasting relationships.",
                                            "Hassan and Laila’s union exemplifies trust, understanding, and love. Their journey shows how two souls can find completeness through a meaningful connection."
                                        ][index]
                                    }
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Success_Story;