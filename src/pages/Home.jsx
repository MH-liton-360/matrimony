import Banner from "../Components/Banner";
import FAQ from "../Components/FAQ";
import Success_Story from "../Components/Success_Story";
import Navbar from "../shared/Navbar";



const Home = () => {
    return (
        <section id="home">
            <div>
                {/* Navbar  */}
                <Navbar></Navbar>

                {/* Banner  */}
                <Banner></Banner>

                <div className="max-w-6xl mx-auto">

                    {/* Success-Story  */}
                    <Success_Story></Success_Story>

                    {/* FAQ means: Frequently Asked Questions  */}
                    <FAQ></FAQ>
                </div>
            </div>
        </section>
    );
};

export default Home;