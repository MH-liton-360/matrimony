import slide01 from '../assets/bg-image/Warm embrace under golden lights.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Success_Story = () => {
    return (
        <div id='success_story' className="">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
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

                {/* Swiper slide 02  */}
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

                {/* Swiper slide 03  */}
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

                {/* Swiper slide 04  */}
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

                {/* Swiper slide 05  */}
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

                {/* Swiper slide 06  */}
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

                {/* Swiper slide 07  */}
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
                {/* Swiper slide 08  */}
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
                {/* Swiper slide 09  */}
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

        </div>

    );
};

export default Success_Story;