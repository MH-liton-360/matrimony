import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import TestimonialsBg from "../../../assets/Testimonials/Testimonials-bg.jpg";
import safety_Couple1 from "../../../assets/Testimonials/Testimonials-bg-card-01.png";
import safety_Couple2 from "../../../assets/Testimonials/Testimonials-bg-card-03.png";
import safety_Couple3 from "../../../assets/Testimonials/Testimonials-bg-card-04.png";
import SectionTitle from '../SectionTitle/SectionTitle';

const testimonials = [
    {
        name: "Priya & Daniel",
        quote: "We lived on different continents, but this platform brought us together.",
        image: safety_Couple1,
    },
    {
        name: "Aisha & Omar",
        quote: "Our families were hesitant at first, but the match was perfect and now everyone is happy.",
        image: safety_Couple2,
    },
    {
        name: "Maria & José",
        quote: "Distance couldn’t keep us apart. This site introduced us, and now we share our lives together.",
        image: safety_Couple3,
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
                                        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.5), transparent)" }}
                                    >
                                        <img
                                            src={TestimonialsBg}
                                            alt="Background"
                                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                                        />

                                        <img src={t.image} alt={t.name} className="h-20 w-20 object-cover rounded-full relative z-10" />

                                        <div className="relative z-10 text-left">
                                            <h2 className="text-[#1D3C5B] text-2xl font-bold">{t.name}</h2>
                                            <p className="text-[#DDE8E9] mt-2 text-lg italic">“{t.quote}”</p>
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
                                transform: translateY(-120%);
                                display: flex;
                                flex-direction: column;
                                z-index: 20;
                            }
                            .swiper-v .swiper-pagination-bullet {
                                background: #fff;
                                margin: 6px 0;
                            }
                            .swiper-v .swiper-pagination-bullet-active {
                                background: #135BA2;
                            }
                            `}
                    </style>
                </Swiper>
            </div>
        </section>
    );
}
export default Testimonials;