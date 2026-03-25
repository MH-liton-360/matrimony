import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section>
            <title>

            </title>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#000E24] via-[#001a40] to-[#000E24] px-4">
                <div className="text-center max-w-xl">

                    {/* Error Code */}
                    <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-4">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-3">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mb-8">
                        Sorry, the page you are looking for doesn't exist or has been moved.
                    </p>

                    {/* Button */}
                    <Link
                        to="/"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 shadow-lg"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;