import Banner from "../Components/Banner";
import Success_Story from "../Components/Success_Story";
import Navbar from "../shared/Navbar";


const Home = () => {
    return (
        <div>
            {/* Navbar  */}
            <Navbar></Navbar>

            {/* Banner  */}
            <Banner></Banner>

            <div className="max-w-6xl mx-auto">

                {/* Success-Story  */}
                <Success_Story></Success_Story>

            </div>
        </div>
    );
};

export default Home;