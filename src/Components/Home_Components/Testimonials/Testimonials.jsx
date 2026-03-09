import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import couple2Bg from "../../../assets/bg-image/Safe-Bg0.jpg";
import safety_Couple from "../../../assets/Safety_&_privacy/couple-02.jpg";
import SectionTitle from '../SectionTitle/SectionTitle';

const testimonials = [
    {
        name: "Priya & Daniel",
        quote: "We lived on different continents, but this platform brought us together.",
        image: safety_Couple,
    },
    {
        name: "Aisha & Omar",
        quote: "Our families were hesitant at first, but the match was perfect and now everyone is happy.",
        image: safety_Couple,
    },
    {
        name: "Maria & José",
        quote: "Distance couldn’t keep us apart. This site introduced us, and now we share our lives together.",
        image: safety_Couple,
    },
];

const Testimonials = () => {
    return (
        <section>
            <SectionTitle
                heading={"Testimonials"}
            ></SectionTitle>

            <div>
                <Swiper
                    className="mySwiper swiper-h"
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },   //Mobile view
                        640: { slidesPerView: 1, spaceBetween: 20 },  //Tablet view
                        1024: { slidesPerView: 1, spaceBetween: 30 },//Desktop view
                    }}
                >

                    <SwiperSlide>
                        {/* Inner vertical swiper */}
                        <Swiper
                            className="mySwiper2 swiper-v"
                            direction="vertical"
                            spaceBetween={50}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            style={{ height: "200px", position: "relative" }}
                        >
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="relative w-full flex items-center gap-6 rounded-lg shadow-lg overflow-hidden bg-linear-to-br p-4"
                                        style={{ background: "linear-gradient(to bottom right, #000E24, #000E24)" }}
                                    >
                                        <img
                                            src={couple2Bg}
                                            alt="Background"
                                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                                        />

                                        <img src={t.image} alt={t.name} className="h-32 w-32 object-cover rounded-full relative z-10" />

                                        <div className="relative z-10 text-left">
                                            <h2 className="text-white text-2xl font-bold">{t.name}</h2>
                                            <p className="text-gray-200 mt-2 text-lg italic">“{t.quote}”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SwiperSlide>



                    {/* Inline style override for vertical pagination */}
                    <style>
                        {`
                            .swiper-v .swiper-pagination {
                                position: absolute;
                                right: 10px;
                                top: 50%;
                                transform: translateY(-50%);
                                display: flex;
                                flex-direction: column;
                                z-index: 20;
                            }
                            .swiper-v .swiper-pagination-bullet {
                                background: #fff;
                                margin: 6px 0;
                            }
                            .swiper-v .swiper-pagination-bullet-active {
                                background: #00aced;
                            }
                            `}
                    </style>
                </Swiper>
            </div>
        </section>
    );
}
export default Testimonials;