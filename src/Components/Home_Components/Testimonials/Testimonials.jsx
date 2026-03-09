// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import couple2Bg from "../../../assets/bg-image/Safe-Bg0.jpg";
import safety_Couple from "../../../assets/Safety_&_privacy/couple-02.jpg"
import SectionTitle from '../SectionTitle/SectionTitle';

const Testimonials = () => {
    return (
        <div className=''>
            <SectionTitle
                heading={"Testimonials"}
            ></SectionTitle>
            <>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        {/* Content number Safe and Secure .................................... */}
                        <div
                            className="relative w-full flex items-center justify-between rounded-lg shadow-lg overflow-hidden bg-linear-to-br p-2"
                            style={{ background: "linear-gradient(to bottom right, #000E24, #000E24)" }}
                        >
                            {/* Optional background image behind gradient */}
                            <img
                                src={couple2Bg}
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-30"
                            />

                            {/* Text Content */}
                            <img src={safety_Couple} alt="" className="h-40 w-40 object-cover rounded-full" />

                            <div className="relative z-10 text-center">
                                <h2 className="text-white text-4xl font-bold flex items-center justify-center gap-2">
                                    Safe and Secure
                                </h2>
                                <p className="text-gray-200 mt-4 text-lg">
                                    Trusted and Confidential
                                </p>
                            </div>

                        </div>

                    </SwiperSlide>


                </Swiper>
            </>
        </div>
    );
};

export default Testimonials;