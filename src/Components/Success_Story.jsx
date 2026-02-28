// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


import slide01 from '../assets/bg-image/Warm embrace under golden lights.png'


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
                className="mySwiper"
            >
                {/* Slide Start Now Here!  */}

                {/* Swiper slide 01  */}
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={slide01}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper slide 01  */}
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={slide01}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper slide 01  */}
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={slide01}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper slide 01  */}
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={slide01}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper slide 01  */}
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={slide01}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper slide 01  */}
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={slide01}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper slide 01  */}
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={slide01}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper slide 01  */}
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={slide01}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Success_Story;