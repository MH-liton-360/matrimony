import bannerImg from '../assets/Banner/BG-matrimony-image.png'
import bgImg from '../assets/Banner/bg.png'

const Banner = () => {
    return (

        <section className="relative flex justify-between pt-12 px-20 overflow-hidden">

            {/* ✅ Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImg})` }}
            ></div>

            <div className="absolute inset-0 
                bg-gradient-to-r 
                from-white/70 
                via-white/50 
                to-transparent">
            </div>

            {/* ✅ Content */}
            <div className="relative z-10 pt-20 max-w-sm">

                <h3 className='text-4xl md:text-3xl font-bold leading-tight'>
                    Find Your Perfect Match for a <br />
                    <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-green-600 bg-clip-text text-transparent">
                        Halal & Happy Marriage
                    </span>
                </h3>

                <p className="mt-6 text-gray-700 text-xs leading-relaxed">
                    Join the leading matrimony platform for Muslims. Connect with
                    genuine, verified profiles worldwide and start your beautiful
                    journey today.
                </p>

                <button className="btn btn-outline btn-secondary">Secondary</button>
                <button className="btn btn-outline btn-secondary">Secondary</button>


            </div>

            <div className="relative z-10">
                <img
                    src={bannerImg}
                    alt="Muslim Couple"
                    className='w-full h-auto object-cover'
                />
            </div>

        </section>
    )
}

export default Banner