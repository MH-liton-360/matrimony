import bgImg from '../assets/Banner/BG-banner.png'
import bannerImg from '../assets/Banner/BG-matrimony-image.png'

const Banner = () => {
    return (
        <section
            className="relative w-full h-[500px] bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url(${bgImg})`
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 items-center">

                {/* Left Side Text */}
                <div>
                    <h1 className="text-white text-5xl font-bold leading-tight">
                        Find Your Perfect Match for a
                        <span className="text-amber-400"> Halal & Happy </span>
                        Marriage
                    </h1>

                    <p className="text-gray-200 mt-6 max-w-md">
                        Join the leading matrimony platform for Muslims.
                        Connect with genuine, verified profiles worldwide.
                    </p>

                    <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Create Free Profile
                    </button>
                </div>

                {/* Right Side Image */}
                <div className="hidden md:flex justify-end">
                    <img
                        src={bannerImg}
                        alt="Happy Muslim Couple"
                        className="max-h-[600px] object-contain"
                    />
                </div>

            </div>
        </section>
    )
}

export default Banner