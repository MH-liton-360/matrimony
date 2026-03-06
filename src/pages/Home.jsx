import Banner from "../Components/Banner/Banner";
import FAQ from "../Components/FAQ/FAQ";
import Featured_Premium from "../Components/Featured_Premium/Featured_Premium";
import Safety_and_Privacy from "../Components/HomeSection/Safety_and_Privacy";
import Recently_Join_Members from "../Components/Recently_Join_Members/Recently_Join_Members";
import Success_Story from "../Components/Success_Story";
import Navbar from "../shared/Navbar";


const Home = () => {
    return (
        <section id="home">
            {/* title means browser heading replace helmet because react 19 not using helmet using "Just title"  */}
            <title>Home - Our Matrimony </title>
            <div>
                {/* Navbar  */}
                <Navbar></Navbar>

                {/* Banner  */}
                <Banner></Banner>

                <div className="max-w-6xl mx-auto">

                    {/* Featured Premium Profiles  */}
                    <Featured_Premium></Featured_Premium>

                    {/* Recently_Join_Members  */}
                    <Recently_Join_Members></Recently_Join_Members>

                    {/* Safety and Privacy  */}
                    <Safety_and_Privacy></Safety_and_Privacy>

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