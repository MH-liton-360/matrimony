import bannerImg from '../assets/Banner/BG-matrimony-image.png'

const Banner = () => {
    return (
        <div className="w-full overflow-hidden">
            {/* Flex container */}
            <div className="flex flex-col lg:flex-row items-center">

                {/* Left: Text */}
                <div className="lg:w-1/2 px-6 py-16 lg:py-32">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-snug">
                        Find Your Perfect Match for a Halal & Happy Marriage
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-lg">
                        Join thousands of happy couples and start your journey today!
                    </p>
                    <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                        Get Started
                    </button>
                </div>

                {/* Right: Image */}
                <div className="lg:w-1/2 w-full">
                    <img
                        className="w-full h-[400px] md:h-[500px] lg:h-full object-cover"
                        src={bannerImg}
                        alt="Banner"
                    />
                </div>

            </div>
        </div>
    )
}

export default Banner;