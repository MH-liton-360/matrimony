// import bgImg from '../assets/Banner/BG-banner.png'
import bannerImg from '../assets/Banner/BG-matrimony-image.png'

const Banner = () => {
    return (
        <section className="flex justify-between pt-20 px-20">

            <div>
                <p className='text-4xl font-bold text-center pt-12'>Find Your Perfect Match for a Halal & Happy Marriage</p>

            </div>

            <div>
                <img src={bannerImg} alt="" className='w-full h-90 object-cover' />
            </div>

        </section>
    )
}

export default Banner