// Loading.jsx
import loadingGif from "../assets/Loading-logo/4-conversion-blocks.gif";

const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">

            {/* Professional GIF */}
            <img
                src={loadingGif}
                alt="Loading..."
                className="w-32 h-32 md:w-40 md:h-40 mb-6"
            />

            {/* Optional Text */}
            <p className="text-gray-700 dark:text-gray-200 font-semibold text-lg animate-pulse">
                Please wait...
            </p>

        </div>
    );
};

export default Loading;