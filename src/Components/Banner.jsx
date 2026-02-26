import bannerImg from '../assets/Banner/banner.png'

const Banner = () => {
    return (
        <div className='overflow-hidden'>
            <img
                className='w-full lg:h-180 object-cover'
                src={bannerImg}
                alt="Banner"
            />
        </div>
    );
};

export default Banner;