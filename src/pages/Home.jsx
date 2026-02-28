import { Suspense } from "react";
import Banner from "../Components/Banner";
import Success_Story from "../Components/Success_Story";
import Navbar from "../shared/Navbar";


const fetchSuccess = async () => {
    const res = await fetch('https://raw.githubusercontent.com/MH-liton-360/matrimony/refs/heads/main/successStories.json');
    return res.json();
}

const Home = () => {
    const storyPromise = fetchSuccess();
    return (
        <section id="home">
            <div>
                {/* Navbar  */}
                <Navbar></Navbar>

                {/* Banner  */}
                <Banner></Banner>

                <div className="max-w-6xl mx-auto">

                    {/* Success-Story  */}
                    <Suspense fallback={<h3>Success Stroy Coming...</h3>} >
                        <Success_Story storyPromise={storyPromise} ></Success_Story>
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default Home;