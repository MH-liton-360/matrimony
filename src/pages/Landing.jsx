import { Link } from "react-router-dom";
import bg_image from "../assets/bg-image/Warm embrace under golden lights.png";
import image_logo from "../assets/logo/Interlocked hands forming a heart.png"

const Landing = () => {
    return (
        <section

            style={{
                backgroundImage: `url(${bg_image})`,
                backgroundSize: "cover",
                backgroundPosition: "10% 15%",
                minHeight: "100vh",
            }}
            className="relative flex items-center justify-start px-6 md:px-12 lg:px-20"
        >


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Login Button - Top Right */}
            <Link to=""><button className="absolute top-5 right-5 z-20 bg-teal-600 text-white px-8 py-2 rounded-xl hover:bg-teal-700 transition">
                Login
            </button></Link>

            {/* Content Card - Left Center */}
            <div className="relative z-10 bg-white rounded-xl shadow-xl w-full max-w-md p-6 text-center">
                <div className="flex flex-col gap-4">

                    {/* Logo */}
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <img className="h-16" src={image_logo} alt="image_logo" />
                        <h1 className="text-cyan-950 uppercase text-xl font-semibold">Matrimony</h1>
                    </div>

                    {/* Headline */}
                    <h2 className="text-black text-2xl font-medium">
                        Connecting Hearts, Creating Futures
                    </h2>

                    <p className="text-sm text-gray-500">
                        Trusted Site Used By Million Worldwide
                    </p>

                    {/* Gender Selection */}
                    <div className="flex justify-center gap-4 mt-2">
                        <button className="btn btn-primary btn-circle btn-sm">♂</button>
                        <button className="btn btn-primary btn-circle btn-sm">♀</button>
                    </div>

                    {/* Age Selector */}
                    <div className="mt-2">
                        <label className="text-gray-700 mr-2">How old are you?</label>
                        <select className="select select-bordered select-sm">
                            {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                                <option key={age} value={age}>{age}</option>
                            ))}
                        </select>
                    </div>

                    {/* View Singles Button */}
                    <Link to="/home"><button className="btn btn-teal-600 bg-teal-600 text-white mt-3 hover:bg-teal-700 transition w-full">
                        Welcome Now
                    </button></Link>

                </div>
            </div>
        </section>
    );
};

export default Landing;
