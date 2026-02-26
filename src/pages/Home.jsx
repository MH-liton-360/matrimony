import Banner from "../Components/Banner";
import Navbar from "../shared/Navbar";


const Home = () => {
    return (
        <div>
            {/* Navbar  */}
            <Navbar></Navbar>


            <div className="max-w-6xl mx-auto p-10">

                {/* Banner  */}
                <Banner></Banner>

            </div>
        </div>
    );
};

export default Home;