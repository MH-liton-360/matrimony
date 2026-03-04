import bannerImg from '../assets/Banner/BG-matrimony-image.png'

const Banner = () => {
    return (
        <section className="flex justify-between pt-12 px-20 items-center">

            <div className="max-w-xl">

                <h3 className='text-4xl md:text-5xl font-bold leading-tight'>
                    Find Your Perfect Match for a <br />
                    <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-green-600 bg-clip-text text-transparent">
                        Halal & Happy Marriage
                    </span>
                </h3>

                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                    Join the leading matrimony platform for Muslims. Connect with
                    genuine, verified profiles worldwide and start your beautiful
                    journey today.
                </p>

            </div>

            <div>
                <img
                    src={bannerImg}
                    alt="Muslim Couple"
                    className='w-full h-96 object-cover'
                />
            </div>

        </section>
    )
}

export default Banner